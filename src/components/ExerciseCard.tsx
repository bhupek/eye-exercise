import React from 'react';
import { Clock, Play } from 'lucide-react';
import { ExerciseSet } from '../types';

interface Props {
  exerciseSet: ExerciseSet;
  onStart: (id: string) => void;
}

export const ExerciseCard: React.FC<Props> = ({ exerciseSet, onStart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
      <h3 className="text-2xl font-bold mb-4">{exerciseSet.title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5" />
        <span className="text-gray-600">
          {exerciseSet.exercises.length * 1} minutes
        </span>
      </div>
      <div className="mb-6">
        <p className="text-gray-600">
          {exerciseSet.exercises.length} exercises for your eyes
        </p>
      </div>
      <button
        onClick={() => onStart(exerciseSet.id)}
        className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
      >
        <Play className="w-5 h-5" />
        Start Exercises
      </button>
    </div>
  );
}