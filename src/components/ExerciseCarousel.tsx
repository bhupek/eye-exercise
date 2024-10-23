import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye, PlayCircle } from 'lucide-react';
import { ExerciseSet } from '../types';

interface Props {
  exerciseSet: ExerciseSet;
  onStart: (id: string) => void;
}

export const ExerciseCarousel: React.FC<Props> = ({ exerciseSet, onStart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const exercisesPerSlide = 3;
  const totalSlides = Math.ceil(exerciseSet.exercises.length / exercisesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentExercises = () => {
    const start = currentSlide * exercisesPerSlide;
    return exerciseSet.exercises.slice(start, start + exercisesPerSlide);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 relative border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-black rounded-full p-3">
          <Eye className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          {exerciseSet.title}
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex gap-6">
          {getCurrentExercises().map((exercise) => (
            <div key={exercise.id} className="flex-1 group">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-black/10 rounded-full p-2">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {exercise.duration}s
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{exercise.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{exercise.instruction}</p>
                <button
                  onClick={() => onStart(exerciseSet.id)}
                  className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 group-hover:shadow-md"
                >
                  <PlayCircle className="w-5 h-5" />
                  Start Exercise
                </button>
              </div>
            </div>
          ))}
        </div>

        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-black text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-black text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-black w-6' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};