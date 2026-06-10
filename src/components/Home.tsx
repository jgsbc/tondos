import React from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface HomeProps {
  onStartSession: () => void;
  onViewList: () => void;
  deferredInstallPrompt: BeforeInstallPromptEvent | null;
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

      {/* Identité Tondos */}
      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <h1 style={{ color: '#1f2937', marginBottom: '4px', fontSize: '36px' }}>Tondos</h1>
        <p style={{ fontSize: '18px', color: '#3b82f6', fontWeight: 700, letterSpacing: '0.03em', marginBottom: '16px' }}>
          La Brigade Élastique
        </p>
        <p style={{ fontSize: '16px', color: '#6b7280', fontStyle: 'italic', marginBottom: '8px' }}>
          Le programme officiel du daron souple, solide et légèrement dangereux avec un élastique.
        </p>
        <p style={{ fontSize: '17px', color: '#374151', lineHeight: 1.6 }}>
          Bienvenue dans votre centre d'entraînement personnel. Ici, pas de médaille olympique, pas de coach qui hurle, pas de legging fluo obligatoire. Juste vous, votre dos, un élastique, et une noble mission : rester mobile avec panache.
        </p>
      </div>

      {/* Message de sécurité */}
      <div className="safety-warning">
        <h3>
          <svg style={{ width: '24px', height: '24px', flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Avant de défier l'élastique
        </h3>
        <p>
          Si ça tire gentiment : tout va bien, le corps négocie.
        </p>
        <p>
          Si ça pique, bloque, brûle, tourne, lance ou vous donne envie d'insulter une chaise : <strong>on arrête.</strong>
        </p>
        <p style={{ marginTop: '4px', fontStyle: 'italic' }}>
          Ces exercices ne remplacent pas l'avis d'un professionnel de santé. Ils remplacent surtout l'excuse "je le ferai demain".
        </p>
      </div>

      {/* Boutons d'action */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
        <button className="btn btn-success" onClick={onStartSession}>
          <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lancer la mission
        </button>

        <button className="btn btn-primary" onClick={onViewList}>
          <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Inspecter l'arsenal
        </button>
      </div>

      {/* Bannière PWA */}
      {deferredInstallPrompt && (
        <div className="install-banner">
          <div className="install-banner-text">
            Installer la Brigade sur l'écran d'accueil pour y accéder même sans réseau.
          </div>
          <button className="btn btn-secondary" style={{ minHeight: '50px', fontSize: '18px' }} onClick={onInstall}>
            Rejoindre la Brigade
          </button>
        </div>
      )}

      {/* Pied de page discret */}
      <div style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center', marginTop: '8px' }}>
        <p style={{ fontSize: '15px', color: '#6b7280' }}>
          🪖 Brigade Élastique • Opération hors ligne possible • Aucune médaille requise
        </p>
      </div>
    </div>
  );
};