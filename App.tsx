import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shelf } from './components/Shelf';
import { Letter } from './components/Letter';
import { HighScores } from './components/HighScores';
import { Aerial } from './components/Aerial';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AchievementToast, DialogBox } from './components/Secrets';
import { coin } from './sound';
import { EMAIL } from './constants';
import { SECRETS, foundSecrets, say, unlock } from './secrets';

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const MHORO = 'mhoro';

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

// The dev room: a note in the console for anyone who opens it, and a secret to claim.
function useDevRoom() {
  useEffect(() => {
    const w = window as typeof window & { munya?: Record<string, () => string> };
    if (w.munya) return;
    w.munya = {
      unlock: () => (unlock('devroom') ? 'Achievement unlocked: Dev room.' : 'Already yours. Nice.'),
      hire: () => { window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Found the dev room')}`; return 'Opening your email…'; },
      secrets: () => {
        const found = foundSecrets();
        return SECRETS.map(s => `${found.includes(s.id) ? '■' : '□'} ${found.includes(s.id) ? s.name : '???'}`).join('\n');
      },
    };
    const banner = 'font: bold 15px ui-monospace, monospace; padding: 6px 10px; color: #050505;';
    console.log('%c MUNYA MAKOSA %c DEV ROOM ', `${banner} background: #39ff14;`, `${banner} background: #ffd200;`);
    console.log(
      '%cYou found the dev room. If you read consoles for fun, we should probably work together.\n\n' +
        '  munya.unlock()   claim this secret\n' +
        '  munya.hire()     email me\n' +
        '  munya.secrets()  see what you’ve found',
      'color: #39ff14; background: #050505; font: 13px ui-monospace, monospace; line-height: 1.7; padding: 8px 10px;',
    );
  }, []);
}

// Reveal each [data-reveal] block once its top reaches the lower tenth of the screen.
// Checked on every scroll frame rather than with an IntersectionObserver, so a fast flick or a
// jump to an anchor also reveals everything scrolled past, instead of leaving it invisible.
function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    let pending = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.9;
      pending = pending.filter(block => {
        if (block.getBoundingClientRect().top > line) return true;
        block.classList.add('is-in');
        return false;
      });
      if (!pending.length) stop();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(check); };
    const stop = () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    check();
    return stop;
  }, []);
}

const App: React.FC = () => {
  // Easter egg: the Konami code flips the cabinet into hardcore mode.
  const [hardcore, setHardcore] = useState(false);
  useReveal();
  useDevRoom();

  useEffect(() => {
    let seq: string[] = [];
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping(e.target)) return;
      seq = [...seq, e.key].slice(-KONAMI.length);
      if (seq.join() === KONAMI.join()) {
        setHardcore(h => !h);
        if (!unlock('konami')) coin();
        seq = [];
      }
      if (seq.slice(-MHORO.length).join('').toLowerCase() === MHORO) {
        unlock('mhoro');
        say('Mhoro! Makadii? That’s “hello, how are you?” in Shona. I’m from Zimbabwe, so you just made my day.');
        seq = [];
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className={hardcore ? 'hardcore' : undefined}>
      <Navbar />
      <main>
        <Hero />
        <Shelf />
        <Letter />
        <HighScores />
        <Aerial />
        <Contact />
      </main>
      <Footer />
      <AchievementToast />
      <DialogBox />
    </div>
  );
};

export default App;
