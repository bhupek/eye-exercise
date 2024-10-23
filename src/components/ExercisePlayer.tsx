import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Clock, Volume2, VolumeX } from 'lucide-react';
import { Exercise } from '../types';
import { useVoice } from '../hooks/useVoice';

interface Props {
  exercises: Exercise[];
  onClose: () => void;
}

export const ExercisePlayer: React.FC<Props> = ({ exercises, onClose }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exercises[0].duration);
  const [isActive, setIsActive] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const { speak, speaking } = useVoice();

  const currentExercise = exercises[currentExerciseIndex];

  useEffect(() => {
    // Reset timeLeft when exercise changes
    setTimeLeft(currentExercise.duration);
    
    // Speak the new instruction
    if (voiceEnabled && !speaking) {
      speak(currentExercise.instruction);
    }
  }, [currentExerciseIndex, currentExercise.duration, voiceEnabled, speak, speaking, currentExercise.instruction]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (currentExerciseIndex < exercises.length - 1) {
            setCurrentExerciseIndex((prev) => prev + 1);
            return exercises[currentExerciseIndex + 1].duration;
          } else {
            setIsActive(false);
            if (voiceEnabled) {
              speak("Great job! You've completed all exercises.");
            }
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentExerciseIndex, exercises, voiceEnabled, speak]);

  const restart = () => {
    setCurrentExerciseIndex(0);
    setTimeLeft(exercises[0].duration);
    setIsActive(true);
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
    if (speaking) {
      window.speechSynthesis.cancel();
    }
  };

  const progress = (timeLeft / currentExercise.duration) * 100;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-black rounded-full p-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {currentExercise.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleVoice}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title={voiceEnabled ? "Disable voice" : "Enable voice"}
            >
              {voiceEnabled ? (
                <Volume2 className="w-6 h-6" />
              ) : (
                <VolumeX className="w-6 h-6" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <div className="aspect-video bg-gray-50 rounded-2xl flex items-center justify-center mb-6 border border-gray-100 overflow-hidden perspective">
            <div className={`exercise-animation ${currentExercise.animation}`}>
              <div className="w-16 h-16 rounded-full shadow-lg"></div>
            </div>
          </div>
          <p className="text-xl text-center mb-6 text-gray-800 font-medium">
            {currentExercise.instruction}
          </p>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-3">
            <div
              className="bg-black h-3 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span>{timeLeft} seconds remaining</span>
            <span>Exercise {currentExerciseIndex + 1} of {exercises.length}</span>
          </div>
        </div>

        {!isActive && (
          <button
            onClick={restart}
            className="w-full bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-300 group"
          >
            <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            Restart Exercise
          </button>
        )}
      </div>
    </div>
  );
};