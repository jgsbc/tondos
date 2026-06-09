import React from 'react';
import { exercises } from '../data/exercises';
import { ExerciseCard } from './ExerciseCard';

interface ExerciseListProps {
  onSelectExercise: (id: string) => void;
  onBack: () => void;
}

export const ExerciseList: React.FC<ExerciseListProps> = ({ onSelectExercise, onBack }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button 
          className="btn btn-secondary" 
          style={{ minHeight: '44px', width: 'auto', padding: '8px 16px', fontSize: '16px', borderRadius: '12px' }}
          onClick={onBack}
        >
          ← Retour
        </button>
        <h1 style={{ fontSize: '24px' }}>Liste des exercices</h1>
      </div>

      <p style={{ fontSize: '17px', color: '#4b5563' }}>
        Sélectionnez un exercice pour consulter ses instructions détaillées :
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {exercises.map((exercise) => (
          <ExerciseCard 
            key={exercise.id} 
            exercise={exercise} 
            onClick={() => onSelectExercise(exercise.id)} 
          />
        ))}
      </div>

      <button className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={onBack}>
        Retour à l'accueil
      </button>
    </div>
  );
};