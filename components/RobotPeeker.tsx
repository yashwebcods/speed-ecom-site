'use client';

import React, { useEffect, useState, useRef } from 'react';
import { RobotAvatar, Phase } from '@/components/hero-chat-scene';

const LEFT_MESSAGES = [
  "👋 Hi, I'm Speedi AI!",
  "💰 Spot hidden marketplace fees!",
  "📉 Amazon taking too much cut?",
  "📊 Let's check your true ROI."
];
const RIGHT_MESSAGES = [
  "✅ Claim missing returns instantly!",
  "🚀 Let's scale your e-commerce.",
  "🔍 Auditing Meesho & Flipkart...",
  "💸 Stop revenue leakage today!"
];

export default function RobotPeeker() {
  const [isPeeking, setIsPeeking] = useState(false);
  const [side, setSide] = useState<'left' | 'right'>('left');
  const [showSpeech, setShowSpeech] = useState(false);
  const [phase, setPhase] = useState<Phase>('initial-wait');
  const [pose, setPose] = useState<'face' | 'full' | 'hand'>('full');
  const [bottomPos, setBottomPos] = useState('100px');
  const [sideOffset, setSideOffset] = useState(0);

  const [leftMsgIndex, setLeftMsgIndex] = useState(0);
  const [rightMsgIndex, setRightMsgIndex] = useState(0);
  const [canShow, setCanShow] = useState(false);

  const lastScrollY = useRef(0);
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastTriggerSideRef = useRef<'left' | 'right'>('left');

  useEffect(() => {
    // 1. Setup Intersection Observer for all sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger robot when section comes into view, but only after hero scroll
          if (window.scrollY > 400) {
            setCanShow(true);
            setSide(prev => {
              const newSide = prev === 'left' ? 'right' : 'left';
              triggerPeek(newSide);
              return newSide;
            });
          }
        }
      });
    }, { threshold: 0.25 }); // Trigger when 25% of section is visible

    // Small delay to ensure DOM is fully rendered before querying
    setTimeout(() => {
      const sections = document.querySelectorAll('section, main > div');
      sections.forEach(sec => observer.observe(sec));
    }, 100);

    // 2. Debounced Scroll Fallback (for long sections)
    const handleScroll = () => {
      if (isAnimatingRef.current) return;

      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      debounceTimeoutRef.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDiff = currentScrollY - lastScrollY.current;

        if (currentScrollY > 400) {
          setCanShow(true);
          if (Math.abs(scrollDiff) > 20) {
            setSide(prev => {
              const newSide = prev === 'left' ? 'right' : 'left';
              triggerPeek(newSide);
              return newSide;
            });
          }
        }
        lastScrollY.current = currentScrollY;
      }, 700);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  const triggerPeek = (peekSide: 'left' | 'right') => {
    if (isAnimatingRef.current || (!canShow && window.scrollY <= 400)) return;

    isAnimatingRef.current = true;

    // 1. Random delay before appearing (500ms to 2.5s) to make it feel less robotic
    const randomDelay = Math.floor(Math.random() * 2000) + 500;

    timeoutRef.current = setTimeout(() => {
      // Pick a random pose for variety
      const poses: Array<'face' | 'full' | 'hand'> = ['face', 'full', 'hand'];
      const randomPose = poses[Math.floor(Math.random() * poses.length)];
      setPose(randomPose);

      // Set a random height for variety (between 15% and 65% of viewport)
      const randomHeight = Math.floor(Math.random() * 50) + 15;
      setBottomPos(`${randomHeight}vh`);

      // Set a random depth/offset from the side (0px to 60px)
      const randomOffset = Math.floor(Math.random() * 60);
      setSideOffset(randomOffset);

      setIsPeeking(true);
      setShowSpeech(false);

      // Cycle through gestures
      setPhase('greeting');

      setTimeout(() => {
        setPhase('gesturing');
      }, 1500);

      // 2. Show speech bubble and start "talking" animation
      setTimeout(() => {
        setShowSpeech(true);
        setPhase('typing-answer');
      }, 2500);

      // 3. Finish talking and slide back out after a longer screen time
      timeoutRef.current = setTimeout(() => {
        setShowSpeech(false);
        setPhase('initial-wait'); // Stop talking

        setTimeout(() => {
          setIsPeeking(false);

          // 4. Reset for next animation
          setTimeout(() => {
            isAnimatingRef.current = false;
            if (peekSide === 'left') {
              setLeftMsgIndex(prev => (prev + 1) % LEFT_MESSAGES.length);
            } else {
              setRightMsgIndex(prev => (prev + 1) % RIGHT_MESSAGES.length);
            }
          }, 800);
        }, 500); // 0.5s delay before sliding out after speech bubble hides
      }, 6000); // 6 seconds total visible time to allow proper reading
    }, randomDelay);
  };

  const currentMessage = side === 'left'
    ? LEFT_MESSAGES[leftMsgIndex]
    : RIGHT_MESSAGES[rightMsgIndex];

  const getTransform = () => {
    if (!isPeeking) {
      // Hide further away to ensure it's completely off-screen and comes in with momentum
      return side === 'left' ? 'translateX(-150%)' : 'translateX(150%)';
    }

    // Robot is fully visible with a small 10px margin from the edge
    let baseTranslate = 0;
    let rotate = 0;

    if (pose === 'face') {
      baseTranslate = side === 'left' ? (-35 + sideOffset) : (35 - sideOffset); // Show only half/face
      rotate = side === 'left' ? 15 : -15; // Lean in
    } else if (pose === 'full') {
      baseTranslate = side === 'left' ? (15 + sideOffset) : (-15 - sideOffset); // Fully visible
      rotate = 0;
    } else if (pose === 'hand') {
      baseTranslate = side === 'left' ? (-10 + sideOffset) : (10 - sideOffset); // Partially visible
      rotate = side === 'left' ? -10 : 10;
    }

    // Add a slight "breathing" or "tilting" gesture scale
    const scale = pose === 'full' ? 1.05 : 1;
    const extraTilt = phase === 'gesturing' ? (side === 'left' ? -5 : 5) : 0;

    return `translateX(${baseTranslate}px) rotate(${rotate + extraTilt}deg) scale(${scale})`;
  };

  const getTransition = () => {
    if (isPeeking) {
      // Smoother, slightly longer spring-in animation
      return 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    }
    // Smooth ease-in-out for exiting
    return 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  };

  return (
    <div
      className="fixed z-[999] pointer-events-none"
      style={{
        bottom: bottomPos,
        left: side === 'left' ? '0' : 'auto',
        right: side === 'right' ? '0' : 'auto',
      }}
    >
      <div
        className="relative"
        style={{
          transform: getTransform(),
          transition: getTransition(),
          width: '90px',
          height: '100px',
        }}
      >
        {/* Speech Bubble */}
        <div
          className={`absolute bottom-full mb-2 w-max max-w-[220px] sm:max-w-[260px] whitespace-normal bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 transition-opacity duration-300 ${showSpeech ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            // Pin to the side to prevent horizontal overflow on tiny screens
            [side === 'left' ? 'left' : 'right']: pose === 'face' ? '40px' : '10px',
            transform: side === 'left' && pose === 'face' ? 'rotate(-15deg)' : side === 'right' && pose === 'face' ? 'rotate(15deg)' : 'none',
          }}
        >
          <div className="text-[10px] uppercase font-extrabold text-primary mb-0.5 tracking-wider">Speedi AI</div>
          <div className="font-semibold text-sm text-slate-700 leading-snug">{currentMessage}</div>
          {/* Arrow */}
          <div
            className="absolute top-full w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent"
            style={{
              [side === 'left' ? 'left' : 'right']: pose === 'face' ? '10px' : '35px',
            }}
          />
        </div>

        <div
          style={{
            width: '90px',
            height: '100px',
            transform: side === 'right' ? 'scaleX(-1)' : 'none',
          }}
        >
          <RobotAvatar phase={phase} disableBounce={true} />
        </div>
      </div>
    </div>
  );
}
