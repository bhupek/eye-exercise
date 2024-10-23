import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { ExerciseCarousel } from './components/ExerciseCarousel';
import { ExercisePlayer } from './components/ExercisePlayer';
import { exerciseSets } from './data/exercises';
import { ExerciseSet } from './types';

function App() {
  const [activeExerciseSet, setActiveExerciseSet] = useState<ExerciseSet | null>(
    null
  );

  const handleStartExercise = (id: string) => {
    const set = exerciseSets.find((set) => set.id === id);
    if (set) setActiveExerciseSet(set);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <header className="relative bg-black text-white py-8 mb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000,#434343)] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 rounded-full p-3">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">EyeCare Exercise</h1>
              <p className="text-gray-300">Your daily eye wellness routine</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Daily Eye Exercise Routine
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Choose your preferred time and start your eye exercise journey
        </p>

        <div className="space-y-12 max-w-6xl mx-auto">
          {exerciseSets.map((set) => (
            <ExerciseCarousel
              key={set.id}
              exerciseSet={set}
              onStart={handleStartExercise}
            />
          ))}
        </div>
      </main>

      {activeExerciseSet && (
        <ExercisePlayer
          exercises={activeExerciseSet.exercises}
          onClose={() => setActiveExerciseSet(null)}
        />
      )}
    </div>
  );
}

export default App;