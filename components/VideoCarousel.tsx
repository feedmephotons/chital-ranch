import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

interface VideoItem {
  src: string;
  title: string;
}

const videos: VideoItem[] = [
  { src: '/videos/video1.mp4', title: 'Ranch Life' },
  { src: '/videos/video2.mp4', title: 'Our Herd' },
  { src: '/videos/video3.mp4', title: 'CR Fallow' },
];

const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? videos.length - 1 : currentIndex - 1;
    pauseCurrentVideo();
    setCurrentIndex(newIndex);
    setIsPlaying(false);
  };

  const goToNext = () => {
    const newIndex = currentIndex === videos.length - 1 ? 0 : currentIndex + 1;
    pauseCurrentVideo();
    setCurrentIndex(newIndex);
    setIsPlaying(false);
  };

  const pauseCurrentVideo = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }
  };

  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-ranch-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-ranch-gold uppercase tracking-widest text-sm font-bold">Ranch Life</span>
          <h2 className="text-4xl font-serif font-bold text-white mt-2 mb-4">See Our Operation</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get a glimpse of daily life at CR Fallow and see our chocolate fallow deer in action.
          </p>
        </div>

        {/* Main Video Display */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            {videos.map((video, index) => (
              <video
                key={video.src}
                ref={(el) => { videoRefs.current[index] = el; }}
                src={video.src}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnd}
              />
            ))}

            {/* Video Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              {/* Center Play Button */}
              <button
                onClick={togglePlay}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 transition-all transform hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="text-white" size={40} />
                ) : (
                  <Play className="text-white ml-1" size={40} />
                )}
              </button>

              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-serif font-bold text-lg">{videos[currentIndex].title}</h3>
                  <p className="text-sm text-slate-300">{currentIndex + 1} of {videos.length}</p>
                </div>
                <button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="text-white" size={20} />
                  ) : (
                    <Volume2 className="text-white" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all transform hover:scale-110"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all transform hover:scale-110"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          {videos.map((video, index) => (
            <button
              key={video.src}
              onClick={() => {
                pauseCurrentVideo();
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-ranch-gold scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                muted
                preload="metadata"
              />
              <div className={`absolute inset-0 ${index === currentIndex ? 'bg-ranch-gold/20' : 'bg-black/30'}`} />
            </button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                pauseCurrentVideo();
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-ranch-gold w-6' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
