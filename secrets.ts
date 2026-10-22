// Easter eggs. Each secret, once found, is remembered in this browser and counted in the footer.
import { useEffect, useState } from 'react';
import { coin } from './sound';

export interface Secret {
  id: string;
  name: string;
  found: string; // what the visitor did, shown once it's unlocked
}

export const SECRETS: Secret[] = [
  { id: 'golden', name: 'Golden hour', found: 'Dropped by between 20:04 and 20:10, Cape Town time, while the drone was up.' },
  { id: 'mhoro', name: 'Mhoro!', found: 'Said hello in Shona.' },
  { id: 'devroom', name: 'Dev room', found: 'Found the console and claimed it.' },
  { id: 'gameover', name: 'Continue?', found: 'Hit a dead end and kept playing.' },
  { id: 'konami', name: 'Hardcore mode', found: 'Entered the Konami code.' },
];

const KEY = 'munya-secrets';
const UNLOCKED = 'secret-unlocked';
const SAY = 'player-says';

function read(): string[] {
  try {
    const ids = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(ids) ? ids.filter(id => SECRETS.some(s => s.id === id)) : [];
  } catch {
    return [];
  }
}

export function foundSecrets(): string[] {
  return read();
}

// Returns true the first time a secret is found.
export function unlock(id: string): boolean {
  const ids = read();
  if (ids.includes(id) || !SECRETS.some(s => s.id === id)) return false;
  try {
    localStorage.setItem(KEY, JSON.stringify([...ids, id]));
  } catch {
    /* storage blocked: still celebrate, it just won't be remembered */
  }
  coin();
  window.dispatchEvent(new CustomEvent(UNLOCKED, { detail: id }));
  return true;
}

export function useSecrets(): string[] {
  const [ids, setIds] = useState(read);
  useEffect(() => {
    const update = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    };
    window.addEventListener(UNLOCKED, update);
    return () => window.removeEventListener(UNLOCKED, update);
  }, []);
  return ids;
}

export function onUnlock(fn: (id: string) => void) {
  const handler = (e: Event) => fn((e as CustomEvent<string>).detail);
  window.addEventListener(UNLOCKED, handler);
  return () => window.removeEventListener(UNLOCKED, handler);
}

// Player One speaks in an RPG text box.
export function say(text: string) {
  window.dispatchEvent(new CustomEvent(SAY, { detail: text }));
}

export function onSay(fn: (text: string) => void) {
  const handler = (e: Event) => fn((e as CustomEvent<string>).detail);
  window.addEventListener(SAY, handler);
  return () => window.removeEventListener(SAY, handler);
}

// Cape Town clock: the Sonder frames were shot between 20:04 and 20:10.
export function isGoldenHour(now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Johannesburg', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(now);
  const h = Number(parts.find(p => p.type === 'hour')?.value);
  const m = Number(parts.find(p => p.type === 'minute')?.value);
  return h === 20 && m >= 4 && m < 10;
}
