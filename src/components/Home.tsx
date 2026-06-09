import React from 'react';

interface HomeProps {
  onStartSession: () => void;
  onViewList: () => void;
  deferredInstallPrompt: any;
  onInstall: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onStartSession,
  onViewList,
  deferredInstallPrompt,
  onInstall
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <h1 style={{ color: '#1f2937', marginBottom: '8px' }}>Mes Exercices</h1>
        <p style={{ fontSize: '19px', color: '#4b5563', fontWeight: 500 }}>
          Pour rester en forme, en douceur et à votre rythme.
        </p>
      </div>

      {/* Warning Card */}
      <div className="safety-warning">
        <h3>
          <svg style={{ width: '24px', height: '24px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Consigne de sécurité importante
        </h3>
        <p>
          Si vous ressentez une douleur anormale, des vertiges, ou un essoufflement important, arrêtez immédiatement l'exercice. Ces exercices sont indicatifs et ne remplacent pas l'avis de votre professionnel de santé.
        </p>
      </div>

      {/* Main Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
        <button className="btn btn-success" onClick={onStartSession}>
          <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Commencer la séance
        </button>

        <button className="btn btn-primary" onClick={onViewList}>
          <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Voir la liste des exercices
        </button>
      </div>

      {/* PWA Install Banner */}
      {deferredInstallPrompt && (
        <div className="install-banner">
          <div className="install-banner-text">
            Ajouter l'application sur l'écran d'accueil de votre téléphone pour y accéder facilement
          </div>
          <button className="btn btn-secondary" style={{ minHeight: '50px', fontSize: '18px' }} onClick={onInstall}>
            Installer l'application
          </button>
        </div>
      )}

      {/* App details / encouragement */}
      <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center', marginTop: '8px' }}>
        <p style={{ fontSize: '16px', color: '#6b7280' }}>
          Application 100% gratuite • Fonctionne sans connexion Internet
        </p>
      </div>
    </div>
  );
};