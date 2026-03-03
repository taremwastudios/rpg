"use client";

import { useState } from "react";
import Link from "next/link";

// App icon component
function AppIcon({ 
  icon, 
  label, 
  color = "from-purple-500 to-pink-500",
  href
}: { 
  icon: string; 
  label: string; 
  color?: string;
  href?: string;
}) {
  const iconElement = (
    <button 
      className="flex flex-col items-center gap-2 group touch-none"
    >
      <div className={`
        w-16 h-16 rounded-2xl 
        bg-gradient-to-br ${color}
        flex items-center justify-center
        text-3xl
        shadow-lg
        group-hover:scale-110 group-hover:shadow-xl
        transition-all duration-200
        ring-2 ring-white/20
      `}>
        {icon}
      </div>
      <span className="text-xs text-white/80 font-medium drop-shadow-md">
        {label}
      </span>
    </button>
  );
  
  if (href) {
    return <Link href={href}>{iconElement}</Link>;
  }
  return iconElement;
}

// Status bar component
function StatusBar() {
  const [time, setTime] = useState(new Date());
  
  // Update time every minute
  useState(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  });
  
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  
  return (
    <div className="flex justify-between items-center px-6 py-3 text-white text-sm font-medium">
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
        </svg>
        <span>5G</span>
      </div>
      <div className="font-semibold">
        {hours}:{minutes}
      </div>
      <div className="flex items-center gap-1">
        <span>100%</span>
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>
        </svg>
      </div>
    </div>
  );
}

// App dock component
function AppDock() {
  return (
    <div className="absolute bottom-0 left-0 right-0 px-4 pb-6">
      <div className="flex justify-center gap-4 bg-black/30 backdrop-blur-md rounded-3xl px-6 py-4 border border-white/10">
        <AppIcon 
          icon="📸" 
          label="Camera" 
          color="from-gray-700 to-gray-900"
        />
        <AppIcon 
          icon="💬" 
          label="Messages" 
          color="from-green-500 to-emerald-600"
        />
        <Link href="/game">
          <AppIcon 
            icon="⚔️" 
            label="Quest" 
            color="from-amber-600 to-orange-700"
          />
        </Link>
        <AppIcon 
          icon="🗺️" 
          label="Map" 
          color="from-emerald-600 to-teal-700"
        />
        <AppIcon 
          icon="⚙️" 
          label="Settings" 
          color="from-gray-600 to-gray-800"
        />
      </div>
    </div>
  );
}

// Main home screen
export default function PhoneOS() {
  const [activePage, setActivePage] = useState<string | null>(null);

  // Pre-generate stars with static values
  const stars = [
    { top: 10, left: 20, delay: 0.5, opacity: 0.8 },
    { top: 25, left: 45, delay: 1.2, opacity: 0.5 },
    { top: 40, left: 15, delay: 0.8, opacity: 0.9 },
    { top: 55, left: 70, delay: 1.5, opacity: 0.6 },
    { top: 70, left: 35, delay: 0.3, opacity: 0.7 },
    { top: 85, left: 80, delay: 1.0, opacity: 0.4 },
    { top: 15, left: 60, delay: 1.8, opacity: 0.8 },
    { top: 30, left: 90, delay: 0.6, opacity: 0.5 },
    { top: 50, left: 25, delay: 1.1, opacity: 0.7 },
    { top: 65, left: 55, delay: 0.9, opacity: 0.6 },
    { top: 80, left: 10, delay: 1.4, opacity: 0.9 },
    { top: 5, left: 75, delay: 0.4, opacity: 0.5 },
    { top: 35, left: 5, delay: 1.7, opacity: 0.7 },
    { top: 60, left: 40, delay: 0.2, opacity: 0.8 },
    { top: 75, left: 65, delay: 1.3, opacity: 0.4 },
    { top: 20, left: 85, delay: 0.7, opacity: 0.6 },
    { top: 45, left: 50, delay: 1.6, opacity: 0.9 },
    { top: 90, left: 30, delay: 0.1, opacity: 0.5 },
    { top: 8, left: 95, delay: 1.9, opacity: 0.7 },
    { top: 95, left: 5, delay: 0.35, opacity: 0.8 },
  ];

  const apps = [
    { icon: "📧", label: "Mail", color: "from-blue-500 to-blue-700" },
    { icon: "📅", label: "Calendar", color: "from-red-500 to-pink-600" },
    { icon: "☁️", label: "Weather", color: "from-sky-400 to-blue-600" },
    { icon: "🎵", label: "Music", color: "from-pink-500 to-rose-600" },
    { icon: "📸", label: "Photos", color: "from-yellow-500 to-orange-600" },
    { icon: "🛒", label: "Store", color: "from-blue-600 to-indigo-700" },
    { icon: "💼", label: "Files", color: "from-slate-500 to-slate-700" },
    { icon: "🎮", label: "RPG", color: "from-purple-600 to-violet-800", href: "/game" },
    { icon: "💰", label: "Wallet", "color": "from-green-600 to-teal-600" },
    { icon: "📱", label: "Apps", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <div className="game-container flex flex-col">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />

      {/* Main content */}
      <div className="flex-1 relative z-10 pt-8">
        {/* Date and greeting */}
        <div className="text-center mb-8">
          <div className="text-white/60 text-sm mb-1">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            Welcome, Hero
          </h1>
        </div>

        {/* Weather widget */}
        <div className="mx-6 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌤️</span>
              <div>
                <div className="text-white font-semibold">72°F</div>
                <div className="text-white/60 text-sm">Partly Cloudy</div>
              </div>
            </div>
            <div className="text-right text-white/60 text-sm">
              <div>Adventure awaits</div>
              <div>in the realm</div>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="px-6 mb-6">
          <h2 className="text-white/80 text-sm font-semibold mb-3 ml-1">Quick Actions</h2>
          <div className="flex gap-3">
            <Link href="/game" className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-3 text-center shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">⚔️</div>
              <div className="text-white text-sm font-semibold">New Quest</div>
            </Link>
            <div className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 text-center shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">📦</div>
              <div className="text-white text-sm font-semibold">Inventory</div>
            </div>
            <div className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-3 text-center shadow-lg hover:scale-105 transition-transform">
              <div className="text-2xl mb-1">👥</div>
              <div className="text-white text-sm font-semibold">Party</div>
            </div>
          </div>
        </div>

        {/* App grid */}
        <div className="px-6 pb-32">
          <h2 className="text-white/80 text-sm font-semibold mb-3 ml-1">All Apps</h2>
          <div className="grid grid-cols-4 gap-4">
            {apps.map((app) => (
              <AppIcon
                key={app.label}
                icon={app.icon}
                label={app.label}
                color={app.color}
                href={app.href}
              />
            ))}
          </div>
        </div>
      </div>

      {/* App dock */}
      <AppDock />
    </div>
  );
}
