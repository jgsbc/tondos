import React, { useState } from 'react';
import { exercises } from '../data/exercises';

interface SessionViewProps {
  initialExerciseId: string | null;
  onClose: () => void;
}

export const SessionView: React.FC<SessionViewProps> = ({ initialExerciseId, onClose }) => {
  const startIndex = initialExerciseId
    ? exercises.findIndex((e) => e.id === initialExerciseId)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(startIndex !== -1 ? startIndex : 0);
  const [isFinished, setIsFinished] = useState(false);

  const totalExercises = exercises.length;
  const currentExercise = exercises[currentIndex];

  const handleNext = () => {
    if (currentIndex < totalExercises - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      setIsFinished(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Écran de fin de mission
  if (isFinished) {
    return (
      <div className="session-finished">
        <span className="trophy-icon">🪖</span>
        <h1 style={{ color: '#10b981', fontSize: '30px' }}>Mission accomplie.</h1>
        <p style={{ fontSize: '20px', fontWeight: 600, color: '#1f2937' }}>
          Le corps est réveillé.
        </p>
        <p style={{ fontSize: '18px', color: '#4b5563', padding: '0 10px' }}>
          L'élastique est calmé.
        </p>
        <p style={{ fontSize: '18px', color: '#4b5563', padding: '0 10px' }}>
          Le daron peut retourner à ses affaires avec panache.
        </p>
        <p style={{ fontSize: '16px', color: '#6b7280', fontStyle: 'italic', padding: '0 10px', marginTop: '4px' }}>
          Hydratation recommandée. Triomphe intérieur autorisé.
        </p>
        <button className="btn btn-success" style={{ marginTop: '20px' }} onClick={onClose}>
          Retour à la base
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

      {/* En-tête de séance : progression */}
      <div>
        <div className="session-header-row">
          <button
            className="btn btn-danger-outline"
            style={{ minHeight: '40px', width: 'auto', padding: '6px 12px', fontSize: '15px', borderRadius: '10px' }}
            onClick={onClose}
          >
            ✕ Abandonner
          </button>
          <span className="session-count">
            Mission {currentIndex + 1} / {totalExercises}
          </span>
        </div>
        <div className="session-progress-bar">
          <div
            className="session-progress-fill"
            style={{ width: `${((currentIndex + 1) / totalExercises) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Titre de l'exercice */}
      <h2 style={{ fontSize: '26px', textAlign: 'center', margin: '4px 0', color: '#1f2937' }}>
        {currentExercise.title}
      </h2>

      {/* Image animée en grand */}
      <div className="detail-img-container">
        <img
          src={currentExercise.image}
          alt={`Démonstration animée de l'exercice ${currentExercise.title}`}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Objectif */}
      <div style={{ textAlign: 'center', padding: '0 8px' }}>
        <p style={{ fontSize: '17px', fontWeight: 600, color: '#4b5563' }}>
          🎯 {currentExercise.goal}
        </p>
      </div>

      {/* Précautions */}
      <div className="precautions-card" style={{ padding: '12px' }}>
        <h4 style={{ fontSize: '16px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: '#dd6b20' }}>
          <svg style={{ width: '18px', height: '18px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Consignes de la Brigade :
        </h4>
        <ul className="precautions-list" style={{ fontSize: '15px', paddingLeft: '18px', marginTop: '4px' }}>
          {currentExercise.precautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      </div>

      {/* Boutons de navigation */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '16px', position: 'sticky', bottom: '10px', zIndex: 5 }}>
        {currentIndex > 0 ? (
          <button
            className="btn btn-secondary"
            style={{ flex: 1, minHeight: '60px' }}
            onClick={handlePrev}
          >
            ← Retrait
          </button>
        ) : (
          <button
            className="btn btn-secondary"
            style={{ flex: 1, minHeight: '60px' }}
            onClick={onClose}
          >
            Quitter
          </button>
        )}

        <button
          className="btn btn-success"
          style={{ flex: 2, minHeight: '60px' }}
          onClick={handleNext}
        >
          {currentIndex === totalExercises - 1 ? 'Mission terminée 🪖' : 'Mission suivante →'}
        </button>
      </div>

    </div>
  );
};