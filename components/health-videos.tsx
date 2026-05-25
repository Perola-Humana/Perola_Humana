"use client"

import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { useState, useRef } from "react"
import Image from "next/image"

export default function HealthVideos() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [posterErrors, setPosterErrors] = useState<Set<number>>(new Set())
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videos = [
    {
      id: 1,
      src: "/video1.mp4",
      poster: "/video1-poster.png", 
      title: "Vídeo 1: Inovações Tecnológicas"
    },
    {
      id: 2,
      src: "/video2.mp4",
      poster: "/video2-poster.png", 
      title: "Vídeo 2: Revolução na Saúde"
    }
  ]

  const toggleVideo = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (playingVideo === index) {
      video.pause()
      setPlayingVideo(null)
    } else {
      // Pause other videos
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause()
        }
      })
      video.play()
      setPlayingVideo(index)
    }
  }

  const handlePosterError = (index: number) => {
    setPosterErrors(prev => new Set([...prev, index]))
  }

  return (
    <section id="health-videos" className="pt-24 pb-16 sm:pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 relative scroll-mt-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-[#C8935F] to-[#E0A878] bg-clip-text text-transparent">
              SAÚDE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C8935F] to-[#E0A878] rounded-full mx-auto mb-4" />
          </div>
          <p className="text-slate-400 text-white">A grande revolução na saúde. Disponível totalmente gratuito para todos. Informações em breve.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Video Container */}
              <div className="aspect-video bg-slate-900 rounded-2xl border border-slate-800 relative overflow-hidden group">
                {/* Poster Image (if not playing and poster available) */}
                {!posterErrors.has(index) && playingVideo !== index && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={video.poster}
                      alt={video.title}
                      fill
                      className="object-cover"
                      onError={() => handlePosterError(index)}
                      priority
                    />
                  </div>
                )}

                {/* Video Element */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  src={video.src}
                  className={`w-full h-full object-cover relative z-10 ${playingVideo === index ? 'opacity-100' : 'opacity-0'}`}
                  onEnded={() => setPlayingVideo(null)}
                  onClick={() => toggleVideo(index)}
                  preload="metadata"
                />

                {/* Overlay with Play/Pause Button */}
                <div 
                  className={`absolute inset-0 z-20 bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center transition-opacity duration-300 ${
                    playingVideo === index ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  } cursor-pointer`}
                  onClick={() => toggleVideo(index)}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-800/90 flex items-center justify-center shadow-xl border border-slate-700 group-hover:scale-110 group-hover:border-[#C8935F]/50 transition-all duration-300">
                    {playingVideo === index ? (
                      <Pause className="w-8 h-8 text-[#C8935F]" />
                    ) : (
                      <Play className="w-8 h-8 text-[#C8935F] ml-1" />
                    )}
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#C8935F]/5 to-[#E0A878]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Title Below Video */}
              <h3 className="text-white font-medium text-lg text-center">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}