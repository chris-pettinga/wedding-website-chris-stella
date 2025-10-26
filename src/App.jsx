import { useState } from 'react'
import mainPhoto from './assets/main-photo.jpg'

function App() {
  const [showPopup, setShowPopup] = useState(true)

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Galaxy background image */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}></div>

      {/* Twinkling stars - tiny dots */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)`,
        backgroundSize: '60px 60px, 100px 100px, 130px 130px, 180px 180px, 220px 220px, 90px 90px',
        backgroundPosition: '0 0, 40px 60px, 80px 20px, 130px 100px, 20px 150px, 170px 70px',
        animation: 'twinkleFast 2s ease-in-out infinite'
      }}></div>

      {/* Twinkling stars - small */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #add8e6 1px, transparent 1px), radial-gradient(circle, #ffffff 1px, transparent 1px), radial-gradient(circle, #87ceeb 1px, transparent 1px)`,
        backgroundSize: '200px 200px, 250px 250px, 180px 180px, 300px 300px',
        backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 140px',
        animation: 'twinkleSlow 3.5s ease-in-out infinite',
        animationDelay: '0.7s'
      }}></div>

      {/* Bright stars with glow */}
      <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-white rounded-full" style={{
        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(200, 230, 255, 0.4)',
        animation: 'twinkle 3s ease-in-out infinite'
      }}></div>
      <div className="absolute top-[40%] right-[25%] w-3 h-3 bg-cyan-200 rounded-full" style={{
        boxShadow: '0 0 10px 2px rgba(0, 255, 255, 0.6), 0 0 20px 4px rgba(0, 200, 255, 0.3)',
        animation: 'twinkleFast 2.5s ease-in-out infinite',
        animationDelay: '1s'
      }}></div>
      <div className="absolute bottom-[30%] left-[40%] w-2 h-2 bg-white rounded-full" style={{
        boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.7), 0 0 15px 3px rgba(200, 230, 255, 0.3)',
        animation: 'twinkle 3.5s ease-in-out infinite',
        animationDelay: '0.5s'
      }}></div>
      <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-blue-200 rounded-full" style={{
        boxShadow: '0 0 8px 2px rgba(100, 200, 255, 0.6), 0 0 15px 3px rgba(0, 150, 255, 0.3)',
        animation: 'twinkleSlow 4s ease-in-out infinite',
        animationDelay: '2s'
      }}></div>

      {/* Shooting stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0" style={{animation: 'shootingStar 8s ease-in-out infinite'}}></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0" style={{animation: 'shootingStar 12s ease-in-out infinite', animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-28 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent opacity-0" style={{animation: 'shootingStar 10s ease-in-out infinite', animationDelay: '7s'}}></div>
      </div>

      {/* Planets */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-60" style={{
        background: 'radial-gradient(circle at 30% 30%, #ff00ff, #8b008b)',
        boxShadow: '0 0 40px rgba(255, 0, 255, 0.6)',
        animation: 'float 20s ease-in-out infinite'
      }}></div>

      <div className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full opacity-50" style={{
        background: 'radial-gradient(circle at 30% 30%, #00ffff, #0088aa)',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
        animation: 'float 25s ease-in-out infinite',
        animationDelay: '5s'
      }}></div>

      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full opacity-40" style={{
        background: 'radial-gradient(circle at 30% 30%, #ffd700, #ff8c00)',
        boxShadow: '0 0 25px rgba(255, 215, 0, 0.5)',
        animation: 'float 30s ease-in-out infinite',
        animationDelay: '10s'
      }}></div>

      <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full opacity-50" style={{
        background: 'radial-gradient(circle at 30% 30%, #ff69b4, #ff1493)',
        boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)',
        animation: 'float 22s ease-in-out infinite',
        animationDelay: '3s'
      }}></div>


      {/* Early 2000s Spam Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative max-w-lg w-full">
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
              <div className="bg-white p-4 border-4 border-purple-600" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 10px, #ffff00 10px, #ffff00 20px)'
              }}>
                <div className="bg-white p-4 border-4 border-red-500">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2 animate-bounce">🚨</div>
                    <h2 className="text-3xl font-black text-red-600 mb-2 animate-pulse" style={{
                      fontFamily: 'Comic Sans MS, cursive',
                      textShadow: '2px 2px 0px #ffff00, 4px 4px 0px #ff00ff'
                    }}>
                      ★★★ CONGRATULATIONS!!! ★★★
                    </h2>
                    <div className="text-xl font-black text-blue-600 mb-3" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                      🎉 YOU'VE BEEN SELECTED!!! 🎉
                    </div>
                  </div>

                  <div className="bg-yellow-200 border-4 border-red-600 p-4 mb-4">
                    <p className="text-lg font-black text-center mb-2" style={{fontFamily: 'Comic Sans MS, cursive', color: '#ff0000'}}>
                      🔥🔥🔥 YOU ARE THE 1,000,000TH VISITOR!!! 🔥🔥🔥
                    </p>
                    <p className="text-base font-bold text-center mb-1" style={{fontFamily: 'Arial, sans-serif', color: '#0000ff'}}>
                      YOU'VE WON A FREE TRIP TO OUR WEDDING!!!
                    </p>
                    <p className="text-sm font-bold text-center" style={{fontFamily: 'Arial, sans-serif'}}>
                      CLICK BELOW TO CLAIM YOUR PRIZE NOW!!!
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setShowPopup(false)}
                      className="w-full text-xl font-black py-4 border-4 border-black transform hover:scale-105 transition-transform"
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

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="flex-1 text-lg font-black py-3 bg-green-500 border-4 border-green-800 text-white hover:bg-green-600"
                        style={{fontFamily: 'Arial, sans-serif'}}
                      >
                        YES!!!
                      </button>
                      <button
                        onClick={() => setShowPopup(false)}
                        className="flex-1 text-lg font-black py-3 bg-red-500 border-4 border-red-800 text-white hover:bg-red-600"
                        style={{fontFamily: 'Arial, sans-serif'}}
                      >
                        YES!!!
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-xs font-bold animate-pulse" style={{fontFamily: 'Arial, sans-serif', color: '#ff0000'}}>
                      ⚠️ OFFER EXPIRES IN: 00:59:59 ⚠️
                    </p>
                    <p className="text-[10px] mt-1" style={{fontFamily: 'Arial, sans-serif', color: '#666'}}>
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
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-400 mb-6 tracking-tighter uppercase animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive', textShadow: '4px 4px 0px #ff006e, 6px 6px 0px #00ffff'}}>
            ✨ Stella & Chris ✨
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-yellow-400 to-orange-400 mb-4 tracking-tighter uppercase" style={{fontFamily: 'Comic Sans MS, cursive', textShadow: '4px 4px 0px #00b8d4'}}>
            are tying the knot 😏
          </h2>

          {/* Marquee text */}
          <div className="mb-6 overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 py-3 border-y-4 border-yellow-400">
            <div className="whitespace-nowrap animate-marquee inline-block">
              <span className="text-2xl font-black text-yellow-300 mx-8" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                💖 GET READY TO PARTY 💖 DESTINATION: PORTUGAL 💖 BRING YOUR DANCING SHOES 💖 OPEN BAR ALERT 🍾 💖 WHAT HAPPENS IN QUINTA STAYS IN QUINTA 💖 GET READY TO PARTY 💖 DESTINATION: PORTUGAL 💖 BRING YOUR DANCING SHOES 💖 OPEN BAR ALERT 🍾 💖 WHAT HAPPENS IN QUINTA STAYS IN QUINTA 💖
              </span>
            </div>
          </div>

          {/* Main Photo */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-yellow-500 p-2 transform hover:scale-105 transition-transform border-8 border-double border-pink-400" style={{
              boxShadow: '0 0 20px rgba(255, 0, 110, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)'
            }}>
              <img src={mainPhoto} alt="Chris & Stella" className="w-full h-auto" />
            </div>
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
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-pink-500 to-fuchsia-600 p-8 md:p-12 transform hover:-rotate-2 transition-transform border-4 border-yellow-400">
                <div className="text-5xl md:text-7xl mb-4 md:mb-6">🔥</div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 md:mb-6" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>When</h3>
                <p className="text-2xl md:text-4xl font-black text-yellow-300 mb-2 md:mb-3">September 26-28</p>
                <p className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">2026</p>
                <p className="text-lg md:text-2xl text-cyan-300 font-black" style={{fontFamily: 'Comic Sans MS, cursive'}}>3 Days of Debauchery 😈</p>
              </div>
              <a
                href="https://www.google.com/maps/search/quinta+do+lago/@37.0388274,-8.0372591,14z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 md:p-12 transform hover:rotate-2 transition-transform border-4 border-fuchsia-400 block"
              >
                <div className="text-5xl md:text-7xl mb-4 md:mb-6">💎</div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 md:mb-6" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Where</h3>
                <p className="text-2xl md:text-4xl font-black text-yellow-300 mb-2 md:mb-3">Quinta do Lago</p>
                <p className="text-xl md:text-3xl font-bold text-white">Portugal</p>
              </a>
              <a
                href="https://www.google.com/travel/flights?q=flights+to+faro+portugal+september+25+2026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 md:p-12 transform hover:-rotate-2 transition-transform border-4 border-cyan-400 block"
              >
                <div className="text-5xl md:text-7xl mb-4 md:mb-6">✈️</div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-4 md:mb-6" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Flights</h3>
                <p className="text-2xl md:text-4xl font-black text-yellow-300 mb-2 md:mb-3">Faro Airport</p>
                <p className="text-xl md:text-3xl font-bold text-white">(FAO)</p>
              </a>
            </div>
          </div>
        </section>

        {/* Accommodations */}
        <section className="mb-16 bg-gradient-to-r from-cyan-500 to-blue-600 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12">
            <div className="text-center mb-10">
              <div className="inline-block px-6 py-2 bg-yellow-400 transform rotate-1 mb-6">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  Where to Stay
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-fuchsia-500 to-pink-600 p-8 border-4 border-cyan-400 hover:border-yellow-400 transition-colors">
                <div className="text-6xl mb-4">🏨</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Hotel Option 1</h3>
                <p className="text-xl font-bold text-white mb-2">Hotel Name</p>
                <p className="text-sm text-pink-200 mb-1">Code: WEDDING2026</p>
                <p className="text-sm text-pink-200">Book by: May 1, 2026</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 p-8 border-4 border-yellow-400 hover:border-cyan-400 transition-colors">
                <div className="text-6xl mb-4">🏨</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Hotel Option 2</h3>
                <p className="text-xl font-bold text-white mb-2">Hotel Name</p>
                <p className="text-sm text-purple-200 mb-1">Code: WEDDING2026</p>
                <p className="text-sm text-purple-200">Book by: May 1, 2026</p>
              </div>
              <a
                href="https://www.airbnb.com/s/Quinta-do-Lago--Portugal/homes?checkin=2026-09-25&checkout=2026-09-27"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-orange-500 to-red-500 p-8 border-4 border-pink-400 hover:border-yellow-400 transition-colors block"
              >
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-black text-yellow-300 uppercase mb-4" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Airbnb</h3>
                <p className="text-xl font-bold text-white mb-2">Search Airbnb</p>
                <p className="text-sm text-orange-200">Click to browse options</p>
              </a>
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
              <li className="bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl animate-pulse">🍾</div>
                    <div>
                      <p className="text-sm font-black text-cyan-300 uppercase tracking-wider">Friday Sept 26</p>
                      <p className="text-3xl font-black text-white" style={{fontFamily: 'Comic Sans MS, cursive'}}>Welcome Drinks 🥂</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gradient-to-r from-fuchsia-400 to-pink-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl animate-bounce">💍</div>
                    <div>
                      <p className="text-sm font-black text-fuchsia-300 uppercase tracking-wider">Saturday Sept 27</p>
                      <p className="text-3xl font-black text-white" style={{fontFamily: 'Comic Sans MS, cursive'}}>The I Do's & Dance Party 💋🕺💃</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-gradient-to-r from-green-400 to-emerald-500 p-1">
                <div className="bg-black p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-5xl">🥂</div>
                    <div>
                      <p className="text-sm font-black text-green-300 uppercase tracking-wider">Sunday Sept 28</p>
                      <p className="text-3xl font-black text-white" style={{fontFamily: 'Comic Sans MS, cursive'}}>Recovery Brunch 😵‍💫</p>
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
                <div className="text-6xl mb-4 animate-pulse">☀️</div>
                <h3 className="text-2xl font-black text-white uppercase mb-4" style={{fontFamily: 'Comic Sans MS, cursive'}}>It's Gonna Be Hot 🔥</h3>
                <p className="text-xl font-bold text-yellow-100 mb-1">Pack sunscreen!</p>
                <p className="text-lg text-yellow-200">And your hottest fit 😎</p>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 p-8 border-4 border-yellow-400 hover:border-cyan-400 transition-colors">
                <div className="text-6xl mb-4 animate-bounce">👗</div>
                <h3 className="text-2xl font-black text-white uppercase mb-4" style={{fontFamily: 'Comic Sans MS, cursive'}}>Look Good, Feel Good</h3>
                <p className="text-lg font-bold text-pink-100 mb-2">Dress to Impress ✨</p>
                <p className="text-lg font-bold text-pink-100 mb-2">Bring your A-game 💅</p>
                <p className="text-lg font-bold text-pink-100">Comfy shoes = happy feet 👟</p>
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
        <section className="mb-16 bg-gradient-to-r from-pink-500 to-fuchsia-600 p-1 transform hover:scale-105 transition-transform">
          <div className="bg-black p-12 text-center">
            <div className="text-7xl mb-6">💌</div>
            <a href="mailto:wedding@example.com" className="inline-block mb-6">
              <div className="px-8 py-3 bg-yellow-400 transform -rotate-1 hover:scale-105 transition-transform border-4 border-pink-500 animate-pulse">
                <h2 className="text-4xl md:text-5xl font-black text-black uppercase" style={{fontFamily: 'Comic Sans MS, cursive'}}>
                  💌 Slide Into Our DMs 💌
                </h2>
              </div>
            </a>
            <div className="text-base md:text-xl font-bold text-cyan-400 break-words px-4">
              wedding@example.com
            </div>
            <div className="mt-6 text-xl font-black text-yellow-300 animate-pulse" style={{fontFamily: 'Comic Sans MS, cursive'}}>
              ⭐ Questions? Concerns? Just wanna chat? ⭐
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
