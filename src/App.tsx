import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { ExerciseList } from './components/ExerciseList';
import { ExerciseDetail } from './components/ExerciseDetail';
import { SessionView } from './components/SessionView';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

type View = 'home' | 'list' | 'detail' | 'session';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | null>(null);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Listen for the PWA install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredInstallPrompt) return;
    
    // Show the install prompt
    deferredInstallPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredInstallPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);

    // We no longer need the prompt, clear it
    setDeferredInstallPrompt(null);
  };

  const navigateTo = (view: View) => {
    setCurrentView(view);
    // Scroll page to top on view changes
    window.scrollTo(0, 0);
  };

  const handleSelectExercise = (id: string) => {
    setSelectedExerciseId(id);
    navigateTo('detail');
  };

  const handleStartSession = (initialExerciseId: string | null = null) => {
    setSelectedExerciseId(initialExerciseId);
    navigateTo('session');
  };

  // Render correct view based on current state
  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            onStartSession={() => handleStartSession(null)} 
            onViewList={() => navigateTo('list')} 
            deferredInstallPrompt={deferredInstallPrompt}
            onInstall={handleInstallClick}
          />
        );
      case 'list':
        return (
          <ExerciseList 
            onSelectExercise={handleSelectExercise} 
            onBack={() => navigateTo('home')} 
          />
        );
      case 'detail':
        return (
          <ExerciseDetail 
            exerciseId={selectedExerciseId || ''} 
            onBack={() => navigateTo('list')} 
            onStartSessionWithExercise={(id) => handleStartSession(id)}
          />
        );
      case 'session':
        return (
          <SessionView 
            initialExerciseId={selectedExerciseId} 
            onClose={() => navigateTo('home')} 
          />
        );
      default:
        return (
          <Home 
            onStartSession={() => handleStartSession(null)} 
            onViewList={() => navigateTo('list')} 
            deferredInstallPrompt={deferredInstallPrompt}
            onInstall={handleInstallClick}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {/* Universal header except when in a active session to maximize space and focus */}
      {currentView !== 'session' && (
        <header className="app-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => navigateTo('home')}>
            <span style={{ fontSize: '22px' }}>🪖</span>
            <span className="header-title">Tondos</span>
          </div>
          
          {currentView !== 'home' && (
            <button 
              onClick={() => navigateTo('home')} 
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#4b5563',
                display: 'flex',
                alignItems: 'center'
              }}
              aria-label="Accueil"
            >
              <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
          )}
        </header>
      )}

      <main className="app-content">
        {renderContent()}
      </main>
    </div>
  );
}