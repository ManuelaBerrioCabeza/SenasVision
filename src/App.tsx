import React, { useState } from 'react';
import { 
  Languages, 
  Home,
  Info,
  BookOpen,
  MessageSquare,
  HelpCircle, 
  Linkedin
} from 'lucide-react';

import Camera from './camera';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <img src="/favicon.png" alt="Languages" className="h-20 w-20" />
            <button 
              onClick={() => window.location.href = '/translator'}
              className={"text-2xl font-bold text-indigo-700 ml-10"}>
              SeñasVision
            </button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setActivePage('home')}
                  className={`px-3 py-2 rounded-md ${activePage === 'home' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('about')}
                  className={`px-3 py-2 rounded-md ${activePage === 'about' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('learn')}
                  className={`px-3 py-2 rounded-md ${activePage === 'learn' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'}`}
                >
                  Learn SSL
                </button>
              </li>
            </ul>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {activePage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-blue-900/70 z-10"></div>
              <div className="relative h-[100vh] overflow-hidden">
                <img 
                  src={"main.png"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Breaking Barriers Through Sign Language</h1>
                    <p className="text-xl text-white/90 mb-8">
                      Translate Spanish Sign Language to text in Spanish and English in real-time with our cutting-edge technology
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setActivePage('translator')} 
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-medium"
                      >
                        Start Translating
                      </button>
                      <button 
                        onClick={() => setActivePage('learn')} 
                        className="px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How SeñasVision Works</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our platform uses advanced AI to interpret and translate Spanish Sign Language in real-time
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-indigo-50 rounded-xl p-8 text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Home className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy to Use</h3>
                    <p className="text-gray-600">
                      Simply enable your webcam and start signing. Our system will interpret and translate your gestures in real-time.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-xl p-8 text-center">
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Languages className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Bilingual Translation</h3>
                    <p className="text-gray-600">
                    Ensure clear and inclusive communication with translations available in English and Spanish.
                    </p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-xl p-8 text-center">
                  <button 
                  onClick={() => setActivePage('learn')}
                >
                
                    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn Sign Language</h3>
                    <p className="text-gray-600">
                      Access our comprehensive resources to learn Spanish Sign Language at your own pace.
                    </p>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-900 text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Break Communication Barriers?</h2>
                <button 
                  onClick={() => setActivePage('translator')} 
                  className="px-8 py-4 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
                >
                  Start Translating Now
                </button>
              </div>
            </section>
          </>
        )}

        {activePage === 'about' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About SeñasVision</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={"mission.png"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-gray-700 mb-4">
                        SeñasVision is dedicated to breaking down communication barriers for the deaf and hard-of-hearing community. 
                        Our mission is to make Spanish Sign Language (SSL) accessible to everyone through technology.
                      </p>
                      <p className="text-gray-700">
                        We believe that language should never be a barrier to communication. By leveraging advanced computer vision 
                        and machine learning technologies, we've created a tool that can interpret Spanish Sign Language in real-time 
                        and translate it into both written Spanish and English.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h3>
                    <p className="text-gray-700 mb-4">
                      SeñasVision was founded in 2025 by a team of three passionate computer scinetists girls who recognized 
                      the need for better tools to bridge the communication gap between the Spanish hard-of-hearing community.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Team</h3>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <img 
                          src={"ath.png"}
                          className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                        />
                        <h4 className="font-semibold text-gray-900">Athali Martinez</h4>
                        <p className="text-gray-600">Founder & CEO</p>
                        <p className="text-gray-700 mt-2">
                          Athali is a Computer Science major at Los Angeles Valley College and interested in making an impact in machine learning.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <img 
                          src={"nat.png"}
                          className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                        />
                        <h4 className="font-semibold text-gray-900">Nataly Castillo</h4>
                        <p className="text-gray-600">Founder & CEO</p>
                        <p className="text-gray-700 mt-2">
                          Nataly is a Computer Science major at Los Angeles Valley College. She's specifically interested in computer vision models and autonomous systems.
                        </p>
                      </div>
                    
                      <div className="text-center">
                        <img 
                          src={"manu.png"}
                          className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                        />
                        <h4 className="font-semibold text-gray-900">Manuela Berrio</h4>
                        <p className="text-gray-600">Founder & CEO</p>
                        <p className="text-gray-700 mt-2">
                         Manuela is a student at USC majoring in Computer Science and Business Administration with an emphasis in AI Applications and a dream to leave a footprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

    {activePage === 'learn' && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resources</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                      <img 
                          src={"vs.png"}
                          className="w-45 h-32 mx-auto object-cover mb-4"
                        />
                      <h4 className="font-semibold text-gray-900">American vs Spanish Sign Language</h4>
                      <p className="text-gray-600 mb-4">Beginners Vocab</p>
                      <a 
                        href="https://www.youtube.com/watch?v=FMsZCzEVzS4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium inline-block mt-4"
                      >
                        Learn More
                      </a>
                      </div>
                      
                      <div className="text-center">
                      <img 
                          src={"baby.png"}
                          className="w-45 h-32 mx-auto object-cover mb-4"
                        />
                      <h4 className="font-semibold text-gray-900">Spanish Sign Language</h4>
                        <p className="text-gray-600 mb-4">Lengua de Signos Española</p>
                      <a 
                        href="https://www.youtube.com/watch?v=VLVl3u_yh98" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium inline-block mt-4"
                      >
                        Learn More
                      </a>
                      </div>
                      
                      <div className="text-center">
                      <img 
                          src={"granpa.png"}
                          className="w-45 h-32 mx-auto object-cover mb-4"
                        />
                      <h4 className="font-semibold text-gray-900">Basic Sign Language for Caregivers of the Deaf</h4>
                        <p className="text-gray-600 mb-4">Señas Básicas para Cuidadores</p>
                      <a 
                        href="https://www.youtube.com/watch?v=9NpI5B8YZaU" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-indigo-700 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium inline-block mt-4"
                      >
                        Learn More
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Placeholder for other pages */}
        {activePage == 'translator' &&(
          <Camera />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mr-4">
                      <img src="/favicon.png" alt="Languages" className="h-20 w-20" />
                    </div>
              <h2 className="text-xl font-bold">SeñasVision</h2>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;