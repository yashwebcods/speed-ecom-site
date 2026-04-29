"use client"

import {
  BarChart3, TrendingUp, CalendarDays, Package,
  AlertCircle, DollarSign, Warehouse, Lightbulb, Zap
} from "lucide-react"

interface ThreeDIconProps {
  title: string
  color?: string
}

function getIcon(title: string) {
  const t = title.toLowerCase()
  if (t.includes("advertising") || t.includes("roi")) return BarChart3
  if (t.includes("sales") && t.includes("analysis")) return TrendingUp
  if (t.includes("discount") || t.includes("festival")) return CalendarDays
  if (t.includes("shipping") || t.includes("weight")) return Package
  if (t.includes("commission")) return AlertCircle
  if (t.includes("pricing") || t.includes("profit")) return DollarSign
  if (t.includes("warehouse") || t.includes("settlement")) return Warehouse
  if (t.includes("growth") || t.includes("insight")) return Lightbulb
  if (t.includes("weekend") || t.includes("optimization")) return Zap
  return BarChart3
}

export function ThreeDCardIcon({ title, color }: ThreeDIconProps) {
  const Icon = getIcon(title)
  const isAccent = color?.includes("accent")

  return (
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isAccent ? "bg-accent/15 text-accent" : "bg-primary/15 text-primary"}`}>
      <Icon className="w-6 h-6" />
    </div>
  )
}
