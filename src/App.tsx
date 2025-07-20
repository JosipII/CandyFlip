import React, { useState } from 'react';
import { Home, ShoppingCart, Search, X, Star, Heart } from 'lucide-react';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/CandyFlipLogoTransparentSVG-01.svg" 
                alt="CandyFlip Logo"
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                CandyFlip
              </h1>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Süße Leckereien suchen... 🍭"
                  className="w-full pl-10 pr-4 py-2 bg-white/50 border-2 border-pink-200 rounded-full focus:border-pink-400 focus:outline-none focus:bg-white/80 transition-all duration-200 placeholder-pink-400"
                />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center space-x-6">
              {/* Candy House (Home) */}
              <button className="flex flex-col items-center group">
                <div className="relative">
                  <Home className="h-6 w-6 text-pink-500 group-hover:text-pink-600 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <span className="text-xs text-pink-600 mt-1">🏠</span>
              </button>

              {/* Candy Shopping Cart */}
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className="flex flex-col items-center group"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-purple-500 group-hover:text-purple-600 transition-colors" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-pink-300 rounded-full"></div>
                  <div className="absolute top-2 right-1 w-1 h-1 bg-purple-300 rounded-full"></div>
                </div>
                <span className="text-xs text-purple-600 mt-1">🛒</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Verzaubert
              </span>
              <br />
              <span className="text-gray-700">das Süsse in dir</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entdecke unsere magische Kollektion von Premium-Süßigkeiten, Leckereien und Konfekt, 
              die deine Welt mit Süße auf den Kopf stellen werden! 🍭✨
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Starte dein süßes Abenteuer 🚀
            </button>
          </div>
        </div>

        {/* Floating candy decorations */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🍬</div>
        <div className="absolute top-32 right-16 text-3xl animate-pulse">🍭</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-spin" style={{animationDuration: '8s'}}>🍪</div>
        <div className="absolute bottom-32 right-10 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🧁</div>
        
        {/* Animated candy cane moving left to right */}
        <div 
          className="absolute top-40 text-5xl"
          style={{
            animation: 'moveLeftToRight 8s linear infinite',
            animationDelay: '2s'
          }}
        >
          🍭
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <Star className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Qualität 🌟</h3>
            <p className="text-gray-600">Nur die feinsten Zutaten und Handwerkskunst fließen in jede süße Kreation ein.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mit Liebe gemacht 💕</h3>
            <p className="text-gray-600">Jede Süßigkeit wird mit Leidenschaft und Sorgfalt gefertigt, um Freude in deinen Tag zu bringen.</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
            <ShoppingCart className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Schnelle Lieferung 🚚</h3>
            <p className="text-gray-600">Lass dir deine süßen Leckereien frisch vor die Haustür liefern - blitzschnell!</p>
          </div>
        </div>
      </div>

      {/* Bonbon-style Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-gradient-to-br from-pink-400 via-purple-400 to-pink-500 rounded-full w-96 h-96 flex flex-col items-center justify-center shadow-2xl animate-pulse">
            {/* Bonbon shine effect */}
            <div className="absolute top-16 left-20 w-12 h-8 bg-white/30 rounded-full blur-sm"></div>
            <div className="absolute top-20 left-24 w-6 h-4 bg-white/50 rounded-full blur-sm"></div>
            
            {/* Close button */}
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            
            {/* Content */}
            <div className="text-center text-white p-8">
              <h2 className="text-3xl font-bold mb-4">🍬 Süße Kasse 🍬</h2>
              <p className="text-lg mb-6 opacity-90">
                Dein Warenkorb ist so süß wie ein Bonbon! 
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white/20 backdrop-blur-sm text-white py-3 px-6 rounded-full hover:bg-white/30 transition-colors">
                  Warenkorb ansehen 🛒
                </button>
                <button className="w-full bg-white text-pink-600 py-3 px-6 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                  Jetzt zur Kasse ✨
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">🍭 Kostenloser Versand ab 50€! 🍭</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;