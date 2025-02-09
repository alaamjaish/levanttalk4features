import { Question } from '@/types/quiz';

// Keep track of correct answer positions to ensure even distribution
let positionCounts = [0, 0, 0, 0];
let questionsProcessed = 0;

/**
 * Randomizes the options and updates the correctAnswer index for a question
 * Uses a balanced approach to ensure even distribution of correct answers
 */
export function randomizeOptions(question: Question): Question {
  const correctOption = question.options[question.correctAnswer];
  const otherOptions = question.options.filter((_, i) => i !== question.correctAnswer);
  
  // Shuffle the incorrect options
  for (let i = otherOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherOptions[i], otherOptions[j]] = [otherOptions[j], otherOptions[i]];
  }
  
  // Determine the position for the correct answer using a balanced approach
  let newCorrectIndex;
  
  // Reset counts if we've processed a full batch
  if (questionsProcessed % 40 === 0) {
    positionCounts = [0, 0, 0, 0];
  }
  
  // Find the position that has been used least
  const minCount = Math.min(...positionCounts);
  const eligiblePositions = positionCounts
    .map((count, index) => count === minCount ? index : -1)
    .filter(index => index !== -1);
  
  // Randomly choose from the least used positions
  newCorrectIndex = eligiblePositions[Math.floor(Math.random() * eligiblePositions.length)];
  
  // Update counts
  positionCounts[newCorrectIndex]++;
  questionsProcessed++;
  
  // Create new options array with correct answer in chosen position
  const newOptions = [...otherOptions];
  newOptions.splice(newCorrectIndex, 0, correctOption);
  
  return {
    ...question,
    options: newOptions,
    correctAnswer: newCorrectIndex
  };
}
