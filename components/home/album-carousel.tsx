'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import Link from 'next/link'

export function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const mediaItems = [
    { id: 1, title: 'Youth Empowerment Workshop', type: 'image', src: '/placeholder-1.jpg' },
    { id: 2, title: 'Skills Training Session', type: 'image', src: '/placeholder-2.jpg' },
    { id: 3, title: 'Community Impact Video', type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 4, title: 'Graduation Ceremony', type: 'image', src: '/placeholder-3.jpg' },
    { id: 5, title: 'Business Mentorship Program', type: 'image', src: '/placeholder-4.jpg' },
    { id: 6, title: 'Digital Literacy Training', type: 'image', src: '/placeholder-5.jpg' },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">Album & Media Gallery</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-12">
          Celebrating our journey and impact through captured moments
        </p>

        <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video mb-8 group">
          {/* Main carousel display */}
          <div className="relative w-full h-full">
            {mediaItems[currentIndex].type === 'image' && (
              <img
                src={mediaItems[currentIndex].src}
                alt={mediaItems[currentIndex].title}
                className="w-full h-full object-cover"
              />
            )}
            {mediaItems[currentIndex].type === 'video' && (
              <iframe
                src={mediaItems[currentIndex].src}
                className="w-full h-full"
                allowFullScreen
              />
            )}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 hover:bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={24} />
          </button>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-white text-2xl font-bold">{mediaItems[currentIndex].title}</h3>
          </div>
        </div>

        {/* Thumbnails grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {mediaItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative rounded-lg overflow-hidden aspect-square border-2 transition-all ${
                idx === currentIndex ? 'border-primary' : 'border-gray-300'
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Play className="text-white" size={24} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
