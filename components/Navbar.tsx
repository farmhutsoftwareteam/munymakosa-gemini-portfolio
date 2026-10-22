import React, { useState } from 'react';
import { blip, coin, isSoundOn, setSound } from '../sound';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#scores', label: 'High scores' },
  { href: '#aerial', label: 'Aerial' },
  { href: '/cv.html', label: 'CV' },
];

export const Navbar: React.FC = () => {
  const [sound, setSoundState] = useState(isSoundOn);

  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    setSoundState(next);
    if (next) blip(880, 90);
  };

  return (
    <header className="wrap bar">
      <a className="bar__mark" href="#top">MUNYA MAKOSA</a>
      <nav aria-label="Main">
        <ul className="bar__links">
          {LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bar__end">
        <button className="sound" type="button" aria-pressed={sound} onClick={toggleSound}>
          {sound ? 'Sound on' : 'Sound off'}
        </button>
        <a className="btn btn--coin" href="#contact" onClick={coin}>Hire me</a>
      </div>
    </header>
  );
};
