import React from 'react';
import { SOCIALS } from '../constants';
import { FLAG, Stripe, Teeth } from './Pixel';
import { SecretCounter } from './Secrets';

// The back of the card.
export const Footer: React.FC = () => (
  <footer className="back wrap" aria-labelledby="footer-title">
    <Stripe thin colors={[FLAG.green, FLAG.gold, FLAG.red, '#eaffe4']} count={40} />
    <Teeth color="#eaffe4" />
    <div className="back__panel">
      <div>
        <h2 id="footer-title">THANKS FOR PLAYING</h2>
        <p className="back__msg">
          Built in Cape Town with React and a lot of pixels. Before you go, try up, up, down, down, left,
          right, left, right, B, A.
        </p>
      </div>
      <div className="back__right">
        <ul className="back__addr">
          {SOCIALS.map(s => (
            <li key={s.platform}>
              <span>{s.platform}</span>
              <a href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <figure className="back__stamp">
          <img src="/avatar.png" alt="" width={84} height={84} loading="lazy" />
        </figure>
      </div>
      <SecretCounter />
      <p className="back__imprint">
        © {new Date().getFullYear()} Munyaradzi Makosa. Aerial photographs by Munya, Cape Town, 12 November 2025.
      </p>
    </div>
  </footer>
);
