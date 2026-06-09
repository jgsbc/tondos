import React from 'react';
import { exercises } from '../data/exercises';

interface ExerciseDetailProps {
  exerciseId: string;
  onBack: () => void;
  onStartSessionWithExercise: (id: string) => void;
}

export const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exerciseId,
  onBack,
  onStartSessionWithExercise
}) => {
  const exercise = exercises.find((e) => e.id === exerciseId);

  if (!exercise) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Exercice introuvable</h2>
        <button className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={onBack}>
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="detail-view">
      {/* Top back button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          className="btn btn-secondary" 
          style={{ minHeight: '44px', width: 'auto', padding: '8px 16px', fontSize: '16px', borderRadius: '12px' }}
          onClick={onBack}
        >
          ← Retour
        </button>
        <h1 style={{ fontSize: '24px' }}>{exercise.title}</h1>
      </div>

      {/* Large Image container */}
      <div className="detail-img-container">
        <img 
          src={exercise.image} 
          alt={`Démonstration animée de l'exercice ${exercise.title}`} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Tags Row */}
      <div className="tags-row">
        <span className={`tag tag-difficulty-${exercise.difficulty}`}>
          Difficulté : {exercise.difficulty}
        </span>
        <span className="tag tag-area">
          Zone : {exercise.bodyArea}
        </span>
        <span className="tag tag-duration">
          ⏱️ Conseillé : {exercise.duration}
        </span>
      </div>

      {/* Objective */}
      <div className="detail-info">
        <h3 className="block-title">Objectif de l'exercice</h3>
        <p style={{ fontSize: '17px', color: '#1f2937', fontWeight: 500 }}>
          {exercise.goal}
        </p>
      </div>


      {/* Precautions Box */}
      <div className="precautions-card">
        <h4>
          <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Précautions à prendre
        </h4>
        <ul className="precautions-list">
          {exercise.precautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      </div>

      {/* Bottom Action buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
        <button 
          className="btn btn-success" 
          onClick={() => onStartSessionWithExercise(exercise.id)}
        >
          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          </svg>
          Lancer cet exercice
        </button>
        
        <button className="btn btn-secondary" onClick={onBack}>
          Retour à la liste
        </button>
      </div>
    </div>
  );
};