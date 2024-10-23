import { ExerciseSet } from '../types';

export const exerciseSets: ExerciseSet[] = [
  {
    id: 'morning',
    title: 'Morning Refresh',
    timeOfDay: 'morning',
    exercises: [
      {
        id: 'palm-warming',
        title: 'Palm Warming',
        duration: 30,
        instruction: 'Rub your palms together until they feel warm',
        animation: 'palms'
      },
      {
        id: 'palming',
        title: 'Palming',
        duration: 60,
        instruction: 'Cover your closed eyes with warm palms',
        animation: 'cover'
      },
      {
        id: 'focus-shift',
        title: 'Focus Shifting',
        duration: 45,
        instruction: 'Alternate focus between near and far objects',
        animation: 'focus'
      },
      {
        id: 'eye-rolling',
        title: 'Eye Rolling',
        duration: 30,
        instruction: 'Roll your eyes in clockwise and counterclockwise directions',
        animation: 'roll'
      },
      {
        id: 'near-far',
        title: 'Near-Far Focus',
        duration: 40,
        instruction: 'Focus on your thumb, then focus on a distant object',
        animation: 'focus'
      }
    ]
  },
  {
    id: 'afternoon',
    title: 'Afternoon Relief',
    timeOfDay: 'afternoon',
    exercises: [
      {
        id: 'figure-eight',
        title: 'Figure Eight',
        duration: 30,
        instruction: 'Move eyes in figure-eight pattern',
        animation: 'eight'
      },
      {
        id: 'side-movement',
        title: 'Side Movement',
        duration: 45,
        instruction: 'Move eyes smoothly from left to right',
        animation: 'side'
      },
      {
        id: 'diagonal-movement',
        title: 'Diagonal Movement',
        duration: 30,
        instruction: 'Move eyes in diagonal directions',
        animation: 'diagonal'
      },
      {
        id: 'butterfly-blink',
        title: 'Butterfly Blink',
        duration: 35,
        instruction: 'Blink rapidly like butterfly wings',
        animation: 'blink'
      },
      {
        id: 'zoom-focus',
        title: 'Zoom Focus',
        duration: 40,
        instruction: 'Focus on an object while moving it closer and farther',
        animation: 'zoom'
      }
    ]
  },
  {
    id: 'evening',
    title: 'Evening Relaxation',
    timeOfDay: 'evening',
    exercises: [
      {
        id: 'blinking',
        title: 'Conscious Blinking',
        duration: 30,
        instruction: 'Blink slowly and deliberately',
        animation: 'blink'
      },
      {
        id: 'distance-viewing',
        title: 'Distance Viewing',
        duration: 60,
        instruction: 'Look at distant objects through window',
        animation: 'distance'
      },
      {
        id: 'eye-massage',
        title: 'Gentle Eye Massage',
        duration: 45,
        instruction: 'Gently massage around your eyes',
        animation: 'massage'
      },
      {
        id: 'palming-meditation',
        title: 'Palming Meditation',
        duration: 50,
        instruction: 'Cover eyes with palms and practice deep breathing',
        animation: 'palming'
      },
      {
        id: 'candle-gazing',
        title: 'Simulated Candle Gazing',
        duration: 40,
        instruction: 'Focus on the animated light point',
        animation: 'candle'
      }
    ]
  }
];