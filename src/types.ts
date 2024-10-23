export interface Exercise {
  id: string;
  title: string;
  duration: number;
  instruction: string;
  animation: string;
}

export type TimeOfDay = 'morning' | 'afternoon' | 'evening';

export interface ExerciseSet {
  id: string;
  title: string;
  timeOfDay: TimeOfDay;
  exercises: Exercise[];
}