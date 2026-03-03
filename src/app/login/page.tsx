import Link from "next/link";

export default function LoginPage() {
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
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-6 py-8">
          {/* Logo/Title */}
          <div className="text-center mb-8 mt-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-4 shadow-lg shadow-orange-500/30">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                <path className="text-amber-200" d="M12 5L5 9v7c0 3.5 2.5 6.5 7 8 4.5-1.5 7-4.5 7-8V9l-7-4z"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 tracking-wide">
              QUEST LOG
            </h1>
            <p className="text-purple-300/80 text-sm mt-2">Begin Your Adventure</p>
          </div>

          {/* Login Form */}
          <form className="space-y-4 flex-1">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Hero Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-purple-200/70 uppercase tracking-wider ml-1">
                Secret Code
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-purple-950/50 border border-purple-700/50 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-purple-400/50 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-purple-300/80 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-purple-600 bg-purple-950/50 text-amber-500 focus:ring-amber-500/30" />
                <span>Remember me</span>
              </label>
              <Link href="#" className="text-amber-400/80 hover:text-amber-300 transition-colors">
                Forgot?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-6"
            >
              ENTER REALM
            </button>
          </form>

          {/* Register Link */}
          <div className="text-center mt-6 pt-4 border-t border-purple-700/30">
            <p className="text-purple-300/70 text-sm">
              New adventurer?{" "}
              <Link href="/register" className="text-amber-400 hover:text-amber-300 font-medium transition-colors">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
