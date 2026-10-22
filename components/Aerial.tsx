import React from 'react';
import { AERIAL } from '../constants';

// Side quest: frames from the drone, each with its flight log strip.
export const Aerial: React.FC = () => (
  <section className="section wrap" id="aerial" aria-labelledby="aerial-title">
    <div className="head" data-reveal>
      <h2 id="aerial-title">CAPE TOWN AFTER DARK</h2>
      <p>Side quest: I fly a DJI over the city as the lights come on. Eight frames from The Concept of Sonder, shot in six minutes on 12 November 2025.</p>
    </div>
    <ul className="tiles" data-reveal>
      {AERIAL.map(f => (
        <li className="tile" key={f.frame}>
          <div className="tile__img">
            <img src={f.src} alt={f.alt} width={1600} height={900} loading="lazy" />
          </div>
          <div className="tile__strip">
            <div>
              <span>DJI</span>
              <span>F{f.frame}</span>
              <span className="hide-sm">{f.time}</span>
              <span className="hide-sm">12.11.25</span>
            </div>
            <div>
              <span>{f.place}</span>
              <span className="hide-sm">Cape Town</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="aerial__more" data-reveal>
      <a className="textlink" href="https://munyamakosa.pixieset.com/theconceptofsonder/" target="_blank" rel="noreferrer">
        See all thirteen frames on Pixieset
      </a>
      <a className="textlink" href="https://dj.munyamakosa.com" target="_blank" rel="noreferrer">
        Then hear the 20 February set: Afro house to peak time
      </a>
    </div>
  </section>
);
