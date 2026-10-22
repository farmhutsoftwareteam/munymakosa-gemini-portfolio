import React from 'react';
import { SCORES } from '../constants';
import { Teeth } from './Pixel';

// The arcade high-score table, printed as one sheet.
export const HighScores: React.FC = () => (
  <section className="section scores wrap" id="scores" aria-labelledby="scores-title">
    <div className="board">
      <Teeth color="#050505" />
      <div className="board__sheet" data-reveal>
        <h2 id="scores-title">HIGH SCORES</h2>
        <p className="board__note">Awards, numbers and the run so far. Every figure here is on the record.</p>
        <div className="board__groups">
          {SCORES.map(group => (
            <div key={group.title}>
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
