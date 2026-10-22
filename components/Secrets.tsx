import React, { useEffect, useRef, useState } from 'react';
import { onSay, onUnlock, SECRETS, useSecrets } from '../secrets';

// "ACHIEVEMENT UNLOCKED" toast, top right.
export const AchievementToast: React.FC = () => {
  const [queue, setQueue] = useState<string[]>([]);
  const found = useSecrets();

  useEffect(() => onUnlock(id => setQueue(q => [...q, id])), []);

  useEffect(() => {
    if (!queue.length) return;
    const t = window.setTimeout(() => setQueue(q => q.slice(1)), 4200);
    return () => window.clearTimeout(t);
  }, [queue]);

  const secret = SECRETS.find(s => s.id === queue[0]);
  return (
    <div className="toast-slot" role="status" aria-live="polite">
      {secret && (
        <div className="toast" key={secret.id}>
          <p className="toast__title">ACHIEVEMENT UNLOCKED</p>
          <p className="toast__name">{secret.name}</p>
          <p className="toast__count">Secrets {found.length}/{SECRETS.length}</p>
        </div>
      )}
    </div>
  );
};

// RPG text box: Player One talks, letter by letter.
export const DialogBox: React.FC = () => {
  const [text, setText] = useState('');
  const [shown, setShown] = useState(0);
  const timer = useRef<number>();

  useEffect(() => onSay(t => { setText(t); setShown(0); }), []);

  useEffect(() => {
    if (!text) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || shown >= text.length) {
      if (reduced && shown < text.length) setShown(text.length);
      timer.current = window.setTimeout(() => setText(''), 6000);
      return () => window.clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => setShown(n => n + 1), 28);
    return () => window.clearTimeout(timer.current);
  }, [text, shown]);

  if (!text) return null;
  return (
    <div className="dialog" role="status" aria-live="polite">
      <img src="/avatar.png" alt="" width={64} height={64} />
      <p>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true">{text.slice(0, shown)}</span>
      </p>
      <button type="button" className="dialog__close" onClick={() => setText('')}>OK</button>
    </div>
  );
};

// The counter in the footer: found secrets by name, the rest as ???.
export const SecretCounter: React.FC = () => {
  const found = useSecrets();
  return (
    <div className="secrets">
      <h3>SECRETS {found.length}/{SECRETS.length}</h3>
      <ul>
        {SECRETS.map(s => {
          const isFound = found.includes(s.id);
          return (
            <li key={s.id} className={isFound ? 'is-found' : undefined}>
              <span>{isFound ? s.name : '???'}</span>
              {isFound && <small>{s.found}</small>}
            </li>
          );
        })}
      </ul>
      {found.length < SECRETS.length && (
        <p className="secrets__hint">Some only show up at the right time. One is hiding where developers look.</p>
      )}
    </div>
  );
};
