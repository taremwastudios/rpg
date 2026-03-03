import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-4 md:p-8">
      {/* Game Container */}
      <div className="game-container">
        {/* RPG Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-950">
          {/* Decorative stars */}
          <div className="absolute top-10 left-8 w-2 h-2 bg-yellow-300 rounded-full opacity-80 animate-pulse"></div>
          <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-60 animate-pulse delay-75"></div>
          <div className="absolute top-24 left-16 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-150"></div>
          <div className="absolute top-8 right-20 w-1 h-1 bg-yellow-100 rounded-full opacity-50 animate-pulse delay-300"></div>
          <div className="absolute top-20 left-24 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-40 animate-pulse delay-200"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-6 py-6">
          {/* Back Button */}
          <Link href="/login" className="absolute top-6 left-6 text-purple-300/70 hover:text-purple-200 transition-colors z-20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>

          {/* Logo/Title */}
          <div className="text-center mb-6 mt-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 mb-3 shadow-lg shadow-emerald-500/30">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-300 tracking-wide">
              NEW HERO
            </h1>
            <p className="text-purple-300/80 text-xs mt-1">Forge Your Legend</p>
          </div>

          {/* Register Form */}
          <form className="space-y-3 flex-1 overflow-y-auto">
            {/* Username Input */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Hero Name
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Choose your name"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-purple-400/50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Scroll (Email)
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-purple-400/50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Secret Code
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-purple-400/50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Confirm Code
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder-purple-400/50 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                />
              </div>
            </div>

            {/* Class Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Choose Class
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button type="button" className="py-2 px-1 bg-purple-950/50 border border-purple-700/50 rounded-lg text-xs text-purple-200 hover:border-amber-500/50 hover:bg-purple-900/50 transition-all">
                  ⚔️ Warrior
                </button>
                <button type="button" className="py-2 px-1 bg-purple-950/50 border border-purple-700/50 rounded-lg text-xs text-purple-200 hover:border-amber-500/50 hover:bg-purple-900/50 transition-all">
                  🏹 Ranger
                </button>
                <button type="button" className="py-2 px-1 bg-purple-950/50 border border-purple-700/50 rounded-lg text-xs text-purple-200 hover:border-amber-500/50 hover:bg-purple-900/50 transition-all">
                  🔮 Mage
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-1">
              <input 
                type="checkbox" 
                className="w-4 h-4 mt-0.5 rounded border-purple-600 bg-purple-950/50 text-emerald-500 focus:ring-emerald-500/30" 
              />
              <label className="text-xs text-purple-300/70 leading-relaxed">
                I agree to the{" "}
                <Link href="#" className="text-emerald-400 hover:text-emerald-300">Terms of Quest</Link>
                {" "}and{" "}
                <Link href="#" className="text-emerald-400 hover:text-emerald-300">Privacy Scroll</Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-4"
            >
              BEGIN JOURNEY
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4 pt-3 border-t border-purple-700/30">
            <p className="text-purple-300/70 text-xs">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
