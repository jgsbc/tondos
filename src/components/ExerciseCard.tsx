import React from 'react';
import type { Exercise } from '../data/exercises';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onClick }) => {
  return (
    <div 
      className="exercise-card" 
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Exercice ${exercise.title}. Difficulté ${exercise.difficulty}, ciblant ${exercise.bodyArea}`}
    >
      <div className="card-image-container">
        <img 
          src={exercise.image} 
          alt={`Illustration de l'exercice ${exercise.title}`} 
          className="exercise-img"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h2 style={{ fontSize: '20px', color: '#1f2937' }}>{exercise.title}</h2>
        <p style={{ fontSize: '16px', color: '#4b5563', lineBreak: 'anywhere' }}>{exercise.shortDescription}</p>
        <div className="tags-row">
          <span className={`tag tag-difficulty-${exercise.difficulty}`}>
            {exercise.difficulty}
          </span>
          <span className="tag tag-area">
            {exercise.bodyArea}
          </span>
          <span className="tag tag-duration">
            ⏱️ {exercise.duration}
          </span>
        </div>
      </div>
    </div>
  );
};