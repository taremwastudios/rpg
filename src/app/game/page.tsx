"use client";

import { useState } from "react";
import Link from "next/link";

// Navigation tabs
const tabs = [
  { id: "tournaments", label: "Tournaments", icon: "🏆" },
  { id: "arena", label: "Arena", icon: "⚔️" },
  { id: "store", label: "Store", icon: "🛒" },
  { id: "clan", label: "My Clan", icon: "👥" },
  { id: "profile", label: "My Profile", icon: "👤" },
];

// Sample tournament data
const tournaments = [
  { id: 1, name: "Dragon Slayer Cup", prize: "10,000 Gold", participants: 128, status: "Live" },
  { id: 2, name: "Shadow Arena", prize: "5,000 Gold", participants: 64, status: "Starting Soon" },
  { id: 3, name: "Guild War", prize: "Legendary Gear", participants: 256, status: "Tomorrow" },
];

// Sample arena matches
const arenaMatches = [
  { id: 1, player1: "HeroKnight", player2: "DarkMage", bet: "500 Gold", time: "Now" },
  { id: 2, player1: "ShadowRogue", player2: "LightPaladin", bet: "1,000 Gold", time: "5 min" },
];

// Sample store items
const storeItems = [
  { id: 1, name: "Dragon Sword", price: "5,000 Gold", rarity: "Legendary", icon: "🗡️" },
  { id: 2, name: "Mystic Shield", price: "3,000 Gold", rarity: "Epic", icon: "🛡️" },
  { id: 3, name: "Health Potion", price: "100 Gold", rarity: "Common", icon: "🧪" },
  { id: 4, name: "Speed Boots", price: "2,000 Gold", rarity: "Rare", icon: "👢" },
];

// Sample clan data
const clanData = {
  name: "Dragon Slayers",
  level: 15,
  members: 28,
  leader: "HeroKing",
  wins: 156,
  rank: "Diamond",
};

// Sample profile data
const profileData = {
  username: "HeroKnight",
  level: 42,
  rank: "Diamond",
  gold: 12500,
  wins: 328,
  losses: 87,
  winRate: "79%",
  avatar: "🧙‍♂️",
};

export default function GamePage() {
  const [activeTab, setActiveTab] = useState("tournaments");

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

  return (
    <div className="game-container min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
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

      {/* Header */}
      <header className="relative z-10 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <h1 className="text-2xl font-bold text-white">RPG Arena</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-yellow-600/30 rounded-full px-4 py-1 border border-yellow-500/30">
                <span>💰</span>
                <span className="text-yellow-400 font-semibold">{profileData.gold.toLocaleString()} Gold</span>
              </div>
              <Link href="/home" className="text-white/70 hover:text-white transition-colors">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="relative z-10 bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap
                  ${activeTab === tab.id 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto w-full p-6">
        {/* Tournaments Tab */}
        {activeTab === "tournaments" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Active Tournaments</h2>
            <div className="grid gap-4">
              {tournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="bg-gradient-to-r from-amber-900/40 to-purple-900/40 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                      <div className="flex items-center gap-4 mt-2 text-white/70">
                        <span>👥 {tournament.participants} players</span>
                        <span>🎁 {tournament.prize}</span>
                      </div>
                    </div>
                    <div className={`
                      px-4 py-2 rounded-full font-semibold
                      ${tournament.status === "Live" 
                        ? "bg-red-500/30 text-red-400 border border-red-500/30" 
                        : tournament.status === "Starting Soon"
                          ? "bg-yellow-500/30 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/30 text-blue-400 border border-blue-500/30"
                      }
                    `}>
                      {tournament.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Arena Tab */}
        {activeTab === "arena" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">⚔️ Live Arena</h2>
            <div className="grid gap-4">
              {arenaMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-2xl p-6 border border-red-500/20 hover:border-red-500/50 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 text-center">
                      <div className="text-2xl mb-2">⚔️</div>
                      <div className="text-white font-bold">{match.player1}</div>
                    </div>
                    <div className="px-6">
                      <div className="text-yellow-400 font-semibold mb-1">{match.bet}</div>
                      <div className="text-white/60 text-sm">{match.time}</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-2xl mb-2">🛡️</div>
                      <div className="text-white font-bold">{match.player2}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl text-white font-bold text-lg hover:scale-[1.02] transition-transform">
              🎯 Join Arena Match
            </button>
          </div>
        )}

        {/* Store Tab */}
        {activeTab === "store" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">🛒 Item Store</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {storeItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all cursor-pointer"
                >
                  <div className="text-4xl mb-3 text-center">{item.icon}</div>
                  <h3 className="text-white font-semibold text-center mb-2">{item.name}</h3>
                  <div className={`
                    text-center text-sm font-medium mb-3
                    ${item.rarity === "Legendary" ? "text-orange-400" : 
                      item.rarity === "Epic" ? "text-purple-400" : 
                      item.rarity === "Rare" ? "text-blue-400" : "text-white/60"
                    }
                  `}>
                    {item.rarity}
                  </div>
                  <button className="w-full py-2 bg-yellow-600/30 border border-yellow-500/30 rounded-xl text-yellow-400 font-semibold hover:bg-yellow-600/50 transition-colors">
                    💰 {item.price}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Clan Tab */}
        {activeTab === "clan" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">👥 My Clan</h2>
            
            {/* Clan Header */}
            <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl">
                  🐉
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{clanData.name}</h3>
                  <div className="text-blue-400">Level {clanData.level} • {clanData.rank} Rank</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white">{clanData.members}</div>
                  <div className="text-white/60 text-sm">Members</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white">{clanData.wins}</div>
                  <div className="text-white/60 text-sm">Wins</div>
                </div>
                <div className="bg-black/30 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white">{clanData.leader}</div>
                  <div className="text-white/60 text-sm">Leader</div>
                </div>
              </div>
            </div>

            {/* Clan Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform">
                ⚔️ Clan Wars
              </button>
              <button className="py-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform">
                📋 Manage Clan
              </button>
            </div>
          </div>
        )}

        {/* My Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">👤 My Profile</h2>
            
            {/* Profile Card */}
            <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl">
                  {profileData.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white">{profileData.username}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="bg-purple-500/30 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      Level {profileData.level}
                    </span>
                    <span className="bg-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      {profileData.rank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">💰</div>
                  <div className="text-white font-semibold">{profileData.gold.toLocaleString()}</div>
                  <div className="text-white/60 text-sm">Gold</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">✅</div>
                  <div className="text-white font-semibold">{profileData.wins}</div>
                  <div className="text-white/60 text-sm">Wins</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-red-400">❌</div>
                  <div className="text-white font-semibold">{profileData.losses}</div>
                  <div className="text-white/60 text-sm">Losses</div>
                </div>
                <div className="bg-black/30 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">📊</div>
                  <div className="text-white font-semibold">{profileData.winRate}</div>
                  <div className="text-white/60 text-sm">Win Rate</div>
                </div>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button className="py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform">
                ✏️ Edit Profile
              </button>
              <button className="py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-xl text-white font-bold hover:scale-[1.02] transition-transform">
                📜 Match History
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
