import React, { useRef, useState } from 'react';
import { DISCIPLINES, PROJECTS } from '../constants';
import { Discipline } from '../types';
import { blip } from '../sound';

// Level select: every project is a cartridge on the shelf. Pull one out and it loads in the slot below.
export const Shelf: React.FC = () => {
  const [selectedId, setSelectedId] = useState(PROJECTS[0].id);
  const spines = useRef<(HTMLButtonElement | null)[]>([]);
  const index = PROJECTS.findIndex(p => p.id === selectedId);
  const project = PROJECTS[index];

  const select = (i: number, focus = false) => {
    const next = PROJECTS[(i + PROJECTS.length) % PROJECTS.length];
    if (next.id !== selectedId) blip(420 + ((i * 37) % 300), 50);
    setSelectedId(next.id);
    if (focus) spines.current[(i + PROJECTS.length) % PROJECTS.length]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); select(index + 1, true); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); select(index - 1, true); }
  };

  const meta = [DISCIPLINES[project.discipline], project.role, project.when, project.status].filter(Boolean);

  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <div className="head" data-reveal>
        <h2 id="work-title">LEVEL SELECT</h2>
        <p>{PROJECTS.length} games I’ve shipped, run or am still playing, agent tools first. Pull a cartridge off the shelf to load it.</p>
      </div>

      <ul className="legend" aria-label="Colour key" data-reveal>
        {(Object.keys(DISCIPLINES) as Discipline[]).map(d => (
          <li key={d} className={`d-${d}`}>
            <i style={{ background: 'var(--c)' }} aria-hidden="true" />
            {DISCIPLINES[d]}
          </li>
        ))}
      </ul>

      <div className="shelf" role="group" aria-label="Projects" onKeyDown={onKeyDown} data-reveal>
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            ref={el => { spines.current[i] = el; }}
            type="button"
            className={`spine d-${p.discipline}`}
            style={{ '--n': i } as React.CSSProperties}
            aria-pressed={p.id === selectedId}
            aria-controls="slot"
            tabIndex={p.id === selectedId ? 0 : -1}
            onClick={() => select(i)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <div className="slot swap" id="slot" key={project.id} aria-live="polite">
        <div className={`slot__art d-${project.discipline}`}>
          {project.image ? (
            <img src={project.image} alt={`${project.title}: screenshot`} width={1200} height={900} loading="lazy" />
          ) : (
            <div className="label-art" aria-hidden="true">
              <p className="label-art__title">{project.title.toUpperCase()}</p>
              <p className="label-art__boss">{DISCIPLINES[project.discipline]}, {project.role.toLowerCase()}</p>
            </div>
          )}
        </div>
        <div className="slot__text">
          <h3>{project.title}</h3>
          <ul className="slot__meta">
            {meta.map(m => <li key={m}>{m}</li>)}
          </ul>
          <p className="slot__desc">{project.description}</p>
          <p className="boss"><b>BOSS FIGHT</b><span>{project.bossFight}</span></p>
          <p className="slot__stack">Built with {project.techStack.join(', ')}</p>
          {project.link ? (
            <a className="btn slot__play" href={project.link} target="_blank" rel="noreferrer">
              Play {project.title}
            </a>
          ) : (
            <p className="slot__hint">
              {project.status === 'Building'
                ? 'Still in development. Ask me for an early look.'
                : 'Not public. Ask me for a walkthrough.'}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
