/* --- FULL KODE DIMULAI DI SINI --- */

export default function StartedPage() {
  return (
    <div className="bg-gradient-to-b from-sky-200 to-white p-4 sm:p-6 md:p-10 min-h-screen max-w-screen overflow-auto font-[Inter]">
      <div className="h-full bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl md:rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">

          {/* Sidebar */}
          <div className="flex bg-gradient-to-b from-blue-500 to-purple-600 p-4 flex-col items-center justify-between ">
            
            {/* Profile */}
            <div className="hidden md:flex text-center flex-col items-center space-y-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-white text-xs font-medium">Senopati</div>
            </div>

            {/* Menu Icons */}
            <nav className="w-8 h-8 flex flex-col items-center space-y-4"></nav>

            {/* Logo */}
            <div className="hidden md:flex w-10 h-10 bg-white/20 rounded-xl items-center justify-center text-white hover:bg-white/30 transition">
              <a href="/quicknote/started" className="text-lg font-bold">
                Q!
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 sm:p-6 md:p-10 flex items-center justify-center">
            <div className="text-center max-w-3xl w-full">
              
              {/* Welcome Section */}
              <div className="mb-6 md:mb-8">
                <div className="mb-4 md:mb-6">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                    Q!
                  </h1>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
                  Welcome to QuickNote!
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-6 md:mb-8 px-4">
                  Upload your audio or video files and get clear, accurate
                  transcripts in minutes. Perfect for meetings, interviews,
                  lectures, and more. No stress, no hassle — just words that
                  work for you.
                </p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 px-4">

                {/* Step 1 */}
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-sm font-bold rounded-full mb-2">
                      1
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-center">
                    Upload Media
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    Upload your audio or video files (MP3 or MP4)
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm7 4a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-500 text-white text-sm font-bold rounded-full mb-2">
                      2
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-center">
                    AI Processing
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    Our AI analyzes and converts speech to accurate text
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white text-sm font-bold rounded-full mb-2">
                      3
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-center">
                    Results & Download
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    Get your transcript and download it as needed
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 pb-4">
                <a
                  href="/quicknote/upload"
                  className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                  Start Transcribing Now
                </a>
              </div>
              {/* YouTube Guide Link */}
        <div className="mt-8 mb-4 text-center">
          <a
            href="https://www.youtube.com/watch?v=Ww2eVtw6jYo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 italic text-sm hover:text-gray-700 transition"
          >
            📘 QuickNote complete guide (YouTube)
          </a>
        </div>

            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

/* --- FULL KODE BERAKHIR DI SINI --- */
