import React, { useState } from 'react';
import { SCORES } from '../constants';
import { blip } from '../sound';
import { Teeth } from './Pixel';

// The arcade high-score table, printed as one sheet. On phones the four groups become tabs.
export const HighScores: React.FC = () => {
  const [active, setActive] = useState(SCORES[0].title);

  const pick = (title: string) => {
    if (title !== active) blip(600, 50);
    setActive(title);
  };

  return (
    <section className="section scores wrap" id="scores" aria-labelledby="scores-title">
      <div className="board">
        <Teeth color="#050505" />
        <div className="board__sheet" data-reveal>
          <h2 id="scores-title">HIGH SCORES</h2>
          <p className="board__note">Awards, numbers and the run so far. Every figure here is on the record.</p>
          <div className="board__tabs" aria-label="Score groups">
            {SCORES.map(group => (
              <button
                key={group.title}
                type="button"
                aria-pressed={group.title === active}
                aria-controls={`scores-${group.title.toLowerCase()}`}
                onClick={() => pick(group.title)}
              >
                {group.title}
              </button>
            ))}
          </div>
          <div className="board__groups">
            {SCORES.map(group => (
              <div
                key={group.title}
                id={`scores-${group.title.toLowerCase()}`}
                className={group.title === active ? 'board__group is-active' : 'board__group'}
              >
                <h3>{group.title.toUpperCase()}</h3>
                <dl>
                  {group.rows.map(row => (
                    <div className="board__row" key={row.name}>
                      <dt>{row.name}</dt>
                      <dd>{row.value}</dd>
                      {row.note && <small>{row.note}</small>}
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="board__foot">Playing from Cape Town, GMT+2.<br />Open to remote work anywhere.</p>
        </div>
        <Teeth color="#050505" />
      </div>
    </section>
  );
};
