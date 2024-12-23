import React from 'react'
import bgimage from '../image/drive-download-20241217T033358Z-001/larm-rmah-AEaTUnvneik-unsplash.jpg'
import childimage from '../image/drive-download-20241217T033358Z-001/Blue_White_Professional_Concept_Foundation_Logo__2_-removebg-preview.png'
import yellow from '../image/drive-download-20241217T033358Z-001/Blue_White_Professional_Concept_Foundation_Logo-removebg-preview.png'
import { DollarSign } from 'lucide-react'
import redhand from '../image/drive-download-20241217T033358Z-001/tim-marshall-cAtzHUz7Z8g-unsplash.jpg'
import smilingchild from '../image/drive-download-20241217T033358Z-001/chayene-rafaela-nGwkIZFelko-unsplash.jpg'

export default function Home() {
  return (
    <main className="relative bg-[#f5f5f3]">
      {/* Hero Section with background image */}
      <section className="relative">
        {/* Background image container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgimage} 
            alt="background" 
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-12 -top-20 w-48 h-48 -rotate-45">
                  <img src={yellow} alt="" className="w-full h-full object-contain" />
                </div>
                <h1 className="relative text-6xl font-bold tracking-tight z-10">
                  DAAN
                </h1>
              </div>
              <h2 className="text-3xl font-medium">
                because we all are <br />
                <span className="italic">gifted.</span>
              </h2>
              <p className="text-gray-600 max-w-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its
                layout. The point of using Lorem ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using Content here, content here, making it look like
                readable English.
              </p>
            </div>

            {/* Right column - Image */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src={childimage}
                  alt="Student portrait"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content */}
      <div className="bg-[#f5f5f3]">
        {/* Welcome Section */}
        <section className="relative bg-white/80 backdrop-blur-sm py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 -top-2 w-64 h-12 bg-gray-200 rounded-full opacity-50" />
                  <h2 className="relative text-[#2A9D8F] text-2xl font-medium">
                    Welcome to Daan
                  </h2>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold italic leading-tight">
                  We are world wide
                  <br />
                  charity organisation.
                </h1>
                <p className="text-gray-600 max-w-xl">
                  It is a long established fact that a reader will be distracted by the readable content of
                  a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters.
                </p>
              </div>

              {/* Right Column - Images */}
              <div className="relative">
                <div className="grid gap-8">
                  <div className="relative">
                    <img
                      src={redhand}
                      alt="Hands with red paint"
                      className="w-64 h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative bg-[#2A9D8F] p-6 rounded-lg w-64 ml-auto -mt-28">
                    <div className="text-white">
                      <span className="text-4xl font-bold">12+</span>
                      <p className="text-sm">years of<br />experience</p>
                    </div>
                  </div>
                  <div className="relative -mt-12">
                    <img
                      src={smilingchild}
                      alt="Children smiling"
                      className="w-3/4 h-48 object-cover rounded-lg shadow-lg ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F9EFDB] rounded-lg p-8 shadow-lg">
              {[
                { number: "25 K+", label: "Completed Project" },
                { number: "12 M+", label: "Volunteer" },
                { number: "15 M+", label: "Ideas raised funds" },
                { number: "5 K+", label: "Categories served" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 relative">
                  <div className="absolute inset-0 border border-dashed border-gray-300 m-2 rounded" />
                  <div className="relative">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Causes Section */}
        <section className="relative py-16 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="relative mb-8">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-64 h-12 bg-gray-200 rounded-full opacity-50" />
              <h2 className="relative text-[#2A9D8F] text-2xl font-medium">
                Global Causes
              </h2>
            </div>
            <h3 className="text-4xl font-bold italic mb-8">
              Raise your hand to
              <br />
              global causes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              It is a long established fact that a reader will be distracted by the readable content of a page
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
          </div>
              </section>
              
        
          </div>
          <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Donation Card */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[#2A9D8F] opacity-90" />
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">DONATION</h3>
                <p className="mb-6 text-white/90">
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2A9D8F] transition-colors">
                  Donate now
                </button>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[#2A9D8F] opacity-90" />
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">VOLUNTEER</h3>
                <p className="mb-6 text-white/90">
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2A9D8F] transition-colors">
                  Join Now
                </button>
              </div>
            </div>

            {/* Fundraise Card */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-[#2A9D8F] opacity-90" />
              <div className="relative z-10 p-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold">FUNDRAISE</h3>
                  <DollarSign className="w-6 h-6" />
                </div>
                <p className="mb-6 text-white/90">
                  It is a long established fact that a reader will be distracted by the
                  readable content of a page when looking at its
                </p>
                <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#2A9D8F] transition-colors">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img src="/placeholder.svg?height=100&width=200" alt="DAAN" className="w-full max-h-16 object-contain" />
            <img src="/placeholder.svg?height=100&width=200" alt="CharityLife" className="w-full max-h-16 object-contain" />
            <img src="/placeholder.svg?height=100&width=200" alt="Lorem Ipsum" className="w-full max-h-16 object-contain" />
            <img src="/placeholder.svg?height=100&width=200" alt="Mega Group" className="w-full max-h-16 object-contain" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-[#f5f5f3]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Gallery Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gray-200 blur-sm rounded-full" />
              <h2 className="relative text-[#2A9D8F] text-2xl font-medium px-12 py-2">
                Gallery
              </h2>
            </div>
            <h3 className="text-4xl font-bold italic mt-6">
              some work of us
            </h3>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Hands with red paint"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Children outdoors"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Child with adult"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

