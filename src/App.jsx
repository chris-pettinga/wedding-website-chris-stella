import { useState } from 'react'

function App() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Pop art background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #ff006e 0px, #ff006e 2px, transparent 2px, transparent 4px), repeating-linear-gradient(90deg, #ff006e 0px, #ff006e 2px, transparent 2px, transparent 4px)',
        opacity: 0.05
      }}></div>

      {/* Neon accents */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-fuchsia-500 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-30"></div>

      {/* Early 2000s Spam Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative max-w-2xl w-full">
            {/* Popup window */}
            <div className="bg-gradient-to-br from-yellow-300 via-lime-400 to-cyan-400 p-2 border-4 border-red-600 shadow-2xl">
              {/* Title bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 flex items-center justify-between mb-2 border-2 border-white">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 border border-red-700"></div>
                  <div className="w-4 h-4 bg-yellow-400 border border-yellow-600"></div>
                  <div className="w-4 h-4 bg-green-500 border border-green-700"></div>
                  <span className="text-white font-bold text-sm ml-2" style={{fontFamily: 'Arial, sans-serif'}}>
                    ⚠️ URGENT WEDDING ALERT ⚠️
                  </span>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-white font-bold text-xl hover:text-red-500 px-2"
                  style={{fontFamily: 'Arial, sans-serif'}}
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="bg-white p-8 border-4 border-purple-600" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 10px, #ffff00 10px, #ffff00 20px)'
              }}>
                <div className="bg-white p-6 border-4 border-red-500">
                  <div className="text-center mb-6">
                    <div className="text-8xl mb-4 animate-bounce">🚨</div>
                    <h2 className="text-5xl font-black text-red-600 mb-4 animate-pulse" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '3px 3px 0px #ffff00, 6px 6px 0px #ff00ff'
                    }}>
                      ★★★ CONGRATULATIONS!!! ★★★
                    </h2>
                    <div className="text-3xl font-black text-blue-600 mb-6" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                      🎉 YOU'VE BEEN SELECTED!!! 🎉
                    </div>
                  </div>

                  <div className="bg-yellow-200 border-4 border-red-600 p-6 mb-6">
                    <p className="text-2xl font-black text-center mb-4" style={{fontFamily: 'Comic Sans MS, cursive', color: '#ff0000'}}>
                      🔥🔥🔥 YOU ARE THE 1,000,000TH VISITOR!!! 🔥🔥🔥
                    </p>
                    <p className="text-xl font-bold text-center mb-2" style={{fontFamily: 'Arial, sans-serif', color: '#0000ff'}}>
                      YOU'VE WON A FREE TRIP TO OUR WEDDING!!!
                    </p>
                    <p className="text-lg font-bold text-center" style={{fontFamily: 'Arial, sans-serif'}}>
                      CLICK BELOW TO CLAIM YOUR PRIZE NOW!!!
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="w-full text-3xl font-black py-6 border-4 border-black transform hover:scale-105 transition-transform"
                      style={{
                        fontFamily: 'Comic Sans MS, cursive',
                        background: 'linear-gradient(45deg, #ff0000, #ff00ff, #00ffff, #00ff00)',
                        color: '#ffff00',
                        textShadow: '2px 2px 0px #000000',
                        animation: 'rainbow 2s linear infinite'
                      }}
                    >
                      ⭐ CLICK HERE NOW!!! ⭐
                    </button>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="flex-1 text-xl font-black py-4 bg-green-500 border-4 border-green-800 text-white hover:bg-green-600"
                        style={{fontFamily: 'Arial, sans-serif'}}
                      >
                        YES!!!
                      </button>
                      <button
                        onClick={() => setShowPopup(false)}
                        className="flex-1 text-xl font-black py-4 bg-red-500 border-4 border-red-800 text-white hover:bg-red-600"
                        style={{fontFamily: 'Arial, sans-serif'}}
                      >
                        YES!!!
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm font-bold animate-pulse" style={{fontFamily: 'Arial, sans-serif', color: '#ff0000'}}>
                      ⚠️ OFFER EXPIRES IN: 00:59:59 ⚠️
                    </p>
                    <p className="text-xs mt-2" style={{fontFamily: 'Arial, sans-serif', color: '#666'}}>
                      * No purchase necessary. Attendance mandatory. Hotel not included.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated sparkles */}
            <div className="absolute -top-4 -left-4 text-6xl animate-spin">✨</div>
            <div className="absolute -top-4 -right-4 text-6xl animate-bounce">💫</div>
            <div className="absolute -bottom-4 -left-4 text-6xl animate-bounce">⭐</div>
            <div className="absolute -bottom-4 -right-4 text-6xl animate-spin">✨</div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <header className="text-center mb-20 py-12">
          <div className="inline-block mb-8 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transform -rotate-2">
            <div className="text-6xl">💋</div>
          </div>
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 mb-6 tracking-tighter uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '4px 4px 0px #ff006e'}}>
            DESTINATION
          </h1>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-orange-400 mb-8 tracking-tighter uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '4px 4px 0px #00b8d4'}}>
            WEDDING
          </h2>
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-1">
            <p className="text-2xl md:text-3xl text-black font-black uppercase tracking-wider">
              Click Here to Enter
            </p>
          </div>
        </header>

        {/* Event Details */}
        <section className="mb-16 bg-gradient-to-r from-fuchsia-500 to-purple-600 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-cyan-400 transform -rotate-1 mb-6">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  The Deets
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-pink-500 to-fuchsia-600 p-12 transform hover:-rotate-2 transition-transform border-4 border-yellow-400">
                <div className="text-7xl mb-6">🔥</div>
                <h3 className="text-3xl font-black text-white uppercase mb-6" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>When</h3>
                <p className="text-4xl font-black text-yellow-300 mb-3">September 25-27</p>
                <p className="text-3xl font-bold text-white mb-4">2026</p>
                <p className="text-2xl text-cyan-300 font-black">Weekend Extravaganza</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-12 transform hover:rotate-2 transition-transform border-4 border-fuchsia-400">
                <div className="text-7xl mb-6">💎</div>
                <h3 className="text-3xl font-black text-white uppercase mb-6" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Where</h3>
                <p className="text-4xl font-black text-yellow-300 mb-3">Quinta do Lago</p>
                <p className="text-3xl font-bold text-white">Portugal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Travel & Accommodations */}
        <section className="mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-fuchsia-500 transform rotate-1 mb-6">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  Getting There
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-8 border-4 border-pink-400 hover:border-yellow-400 transition-colors">
                <div className="text-6xl mb-4">✈️</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Fly In</h3>
                <p className="text-xl font-bold text-white mb-1">International Airport</p>
                <p className="text-lg text-cyan-200">(CODE)</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 p-8 border-4 border-cyan-400 hover:border-yellow-400 transition-colors">
                <div className="text-6xl mb-4">🛏️</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Sleep Here</h3>
                <p className="text-xl font-bold text-white mb-2">Hotel Name</p>
                <p className="text-sm text-pink-200 mb-1">Code: WEDDING2024</p>
                <p className="text-sm text-pink-200">Book by: May 1</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-8 border-4 border-orange-400 hover:border-yellow-400 transition-colors">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Ride With Us</h3>
                <p className="text-xl font-bold text-white mb-2">Shuttle Service</p>
                <p className="text-sm text-green-200">3:00 PM & 3:30 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="mb-16 bg-gradient-to-r from-purple-500 to-fuchsia-600 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-yellow-400 transform -rotate-1 mb-6">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  The Lineup
                </h2>
              </div>
            </div>
            <ul className="space-y-4 max-w-4xl mx-auto">
              <li className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl">🍾</div>
                    <div>
                      <p className="text-sm font-black text-yellow-300 uppercase tracking-wider">Thursday Sept 25</p>
                      <p className="text-3xl font-black text-white">Welcome Drinks</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gradient-to-r from-fuchsia-400 to-pink-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl">💍</div>
                    <div>
                      <p className="text-sm font-black text-fuchsia-300 uppercase tracking-wider">Friday Sept 26</p>
                      <p className="text-3xl font-black text-white">The Main Event</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl">🎊</div>
                    <div>
                      <p className="text-sm font-black text-cyan-300 uppercase tracking-wider">Friday Night</p>
                      <p className="text-3xl font-black text-white">Party Time</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gradient-to-r from-green-400 to-emerald-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl">🥂</div>
                    <div>
                      <p className="text-sm font-black text-green-300 uppercase tracking-wider">Saturday Sept 27</p>
                      <p className="text-3xl font-black text-white">Recovery Brunch</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Local Information */}
        <section className="mb-16 bg-gradient-to-r from-orange-500 to-red-500 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-cyan-400 transform rotate-1 mb-6">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  Need To Know
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 border-4 border-fuchsia-400 hover:border-cyan-400 transition-colors">
                <div className="text-6xl mb-4">☀️</div>
                <h3 className="text-2xl font-black text-white uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>It's Hot</h3>
                <p className="text-xl font-bold text-yellow-100 mb-1">Portuguese Summer</p>
                <p className="text-lg text-yellow-200">Warm & Sunny</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 border-4 border-yellow-400 hover:border-cyan-400 transition-colors">
                <div className="text-6xl mb-4">👠</div>
                <h3 className="text-2xl font-black text-white uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Dress Code</h3>
                <p className="text-lg font-bold text-pink-100 mb-2">Formal</p>
                <p className="text-lg font-bold text-pink-100 mb-2">Dancing shoes</p>
                <p className="text-lg font-bold text-pink-100">Layers optional</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 border-4 border-orange-400 hover:border-yellow-400 transition-colors">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-black text-white uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Local Intel</h3>
                <p className="text-xl font-bold text-cyan-100 mb-1">Coming Soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-pink-500 to-fuchsia-600 p-1">
          <div className="bg-black p-12 text-center">
            <div className="text-7xl mb-6">💌</div>
            <div className="inline-block px-8 py-3 bg-yellow-400 mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                Hit Us Up
              </h2>
            </div>
            <a href="mailto:wedding@example.com" className="inline-block text-2xl font-black text-cyan-400 hover:text-yellow-400 transition-colors uppercase tracking-wider border-b-4 border-cyan-400 hover:border-yellow-400 pb-2">
              wedding@example.com
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
