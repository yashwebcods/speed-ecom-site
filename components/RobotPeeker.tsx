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
  
  const [leftMsgIndex, setLeftMsgIndex] = useState(0);
  const [rightMsgIndex, setRightMsgIndex] = useState(0);
  
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastTriggerSideRef = useRef<'left' | 'right'>('left');

  useEffect(() => {
    // 1. Setup Intersection Observer for all sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Alternate sides based on last triggered side
          const peekSide = lastTriggerSideRef.current === 'left' ? 'right' : 'left';
          triggerPeek(peekSide);
        }
      });
    }, { threshold: 0.25 }); // Trigger when 25% of section is visible

    // Small delay to ensure DOM is fully rendered before querying
    setTimeout(() => {
      const sections = document.querySelectorAll('section, main > div');
      sections.forEach(sec => observer.observe(sec));
    }, 100);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const triggerPeek = (peekSide: 'left' | 'right') => {
    if (isAnimatingRef.current) return;
    
    isAnimatingRef.current = true;
    lastTriggerSideRef.current = peekSide;
    setSide(peekSide);
    setIsPeeking(true);
    setShowSpeech(false);
    
    // 1. Robot slides in and does a greeting wave
    setPhase('greeting');

    // 2. Show speech bubble and start "talking" animation
    setTimeout(() => {
      setShowSpeech(true);
      setPhase('typing-answer');
    }, 1000); // Wait 1 second before talking to let arrival animation finish

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
    }, 3000); // 3 seconds total visible time for quicker appearance
  };

  const currentMessage = side === 'left' 
    ? LEFT_MESSAGES[leftMsgIndex] 
    : RIGHT_MESSAGES[rightMsgIndex];

  const getTransform = () => {
    if (!isPeeking) {
      // Hide further away to ensure it's completely off-screen and comes in with momentum
      return side === 'left' ? 'translateX(-120%)' : 'translateX(120%)';
    }
    // Robot is fully visible with a small 10px margin from the edge
    return side === 'left' ? 'translateX(10px)' : 'translateX(-10px)';
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
        bottom: '100px', // Raised slightly to avoid mobile scroll-to-top buttons
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
          className={`absolute bottom-full mb-2 w-max max-w-[220px] sm:max-w-[260px] whitespace-normal bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 transition-opacity duration-300 ${
            showSpeech ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            // Pin to the side to prevent horizontal overflow on tiny screens
            [side === 'left' ? 'left' : 'right']: '10px',
          }}
        >
          <div className="text-[10px] uppercase font-extrabold text-primary mb-0.5 tracking-wider">Speedi AI</div>
          <div className="font-semibold text-sm text-slate-700 leading-snug">{currentMessage}</div>
          {/* Arrow */}
          <div 
            className="absolute top-full w-0 h-0 border-t-[8px] border-t-white border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent"
            style={{
              // Since bubble is offset by 10px from container, 35px puts arrow perfectly at 45px (center of 90px container)
              [side === 'left' ? 'left' : 'right']: '35px',
            }}
          />
        </div>

        {/* Robot Avatar */}
        <div 
          style={{
            width: '90px',
            height: '100px',
            transform: side === 'right' ? 'scaleX(-1)' : 'none',
          }}
        >
          <RobotAvatar phase={phase} />
        </div>
      </div>
    </div>
  );
}
