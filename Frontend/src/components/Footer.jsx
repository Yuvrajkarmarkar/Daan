import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-emerald-600 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Volunteer wearing white t-shirt with volunteer text"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Content */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
              Want to become<br />a volunteer?
            </h1>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition duration-300">
              Join Us Today
            </button>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 4c1.5 0 3 1.5 3 3s-1.5 3-3 3-3-1.5-3-3 1.5-3 3-3zM0 4c1.5 0 3 1.5 3 3s-1.5 3-3 3v6c1.5 0 3 1.5 3 3s-1.5 3-3 3v6c1.5 0 3 1.5 3 3s-1.5 3-3 3h30c-1.5 0-3-1.5-3-3s1.5-3 3-3v-6c-1.5 0-3-1.5-3-3s1.5-3 3-3v-6c-1.5 0-3-1.5-3-3s1.5-3 3-3H0z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
             }}
        ></div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 mt-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <a href="/" className="text-2xl font-bold">DAAN.</a>
            <p className="text-sm text-gray-400">
              © 2023 Care.<br />All rights reserved
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><a href="/volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="/donate" className="text-gray-400 hover:text-white transition-colors">Want to donate</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>VJTI, CS / IT department</p>
              <p>Matunga, Mumbai</p>
              <p>+91 900000000</p>
              <p>vjtidaan@vjti.com</p>
            </div>
          </div>

          {/* Email Updates Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get email updates</h3>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-gray-700 text-white placeholder-gray-500 px-4 py-2 rounded-l-md focus:outline-none focus:border-white"
                />
                <button
                  className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200 transition duration-300"
                  aria-label="Subscribe to email updates"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400">*We never share your privacy</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800">
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

