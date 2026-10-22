import React, { useEffect, useRef, useState } from 'react';
import { CHANNELS } from '../constants';
import { isGoldenHour, unlock } from '../secrets';
import { blip, coin } from '../sound';
import { Channel } from '../types';
import { FLAG, Stripe } from './Pixel';

const HOLD_MS = 7000;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Secret channel 00: only airs 20:04–20:10 Cape Town time, the minutes the Sonder frames were shot.
const GOLDEN: Channel = {
  id: 'golden',
  name: 'Golden hour',
  caption: 'You’re here at the exact minutes I had the drone up over Cape Town. This channel only airs 20:04 to 20:10.',
  image: '/media/sonder/s02.jpg',
  alt: "Lion's Head against a violet dusk at 20:04, the city bowl lit beneath it.",
  link: 'https://munyamakosa.pixieset.com/theconceptofsonder/',
};

function useGoldenHour() {
  const forced = import.meta.env.DEV && new URLSearchParams(window.location.search).has('goldenhour');
  const [golden, setGolden] = useState(() => forced || isGoldenHour());
  useEffect(() => {
    if (forced) return;
    const id = window.setInterval(() => setGolden(isGoldenHour()), 15000);
    return () => window.clearInterval(id);
  }, [forced]);
  useEffect(() => {
    if (golden) unlock('golden');
  }, [golden]);
  return golden;
}

// The CRT set: each channel is one of Munya's lives. It flicks on by itself and the visitor can change it.
const Crt: React.FC = () => {
  const golden = useGoldenHour();
  const channels = golden ? [GOLDEN, ...CHANNELS] : CHANNELS;
  const [channel, setChannel] = useState(0);
  const [turns, setTurns] = useState(0); // bumps on every manual change to restart the hold
  const paused = useRef(false);
  const current = channels[channel] ?? channels[0];
  const number = (i: number) => String(golden ? i : i + 1).padStart(2, '0');

  // Golden hour starting or ending retunes the set to its first channel.
  useEffect(() => setChannel(0), [golden]);

  useEffect(() => {
    if (prefersReducedMotion() || golden) return; // the golden channel holds while it airs
    const id = window.setInterval(() => {
      if (document.hidden || paused.current) return;
      setChannel(c => (c + 1) % channels.length);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, [turns, golden, channels.length]);

  const turn = (step: number) => {
    if (step === 0) return;
    setChannel(c => (c + step + channels.length) % channels.length);
    setTurns(t => t + 1);
    blip(step > 0 ? 740 : 520, 60);
  };

  return (
    <div
      className="crt"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="crt__screen" role="group" aria-roledescription="TV" aria-label="Channels: Munya's work, flights and mixes">
        {channels.map((c, i) => (
          <img
            key={c.id}
            src={c.image}
            alt={i === channel ? c.alt : ''}
            aria-hidden={i !== channel}
            className={i === channel ? 'is-on' : undefined}
            style={{ objectPosition: c.position ?? 'center' }}
            width={1200}
            height={900}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        ))}
        <p key={`${golden}-${channel}`} className={`crt__osd${turns || golden ? ' flash' : ''}${current.id === 'golden' ? ' crt__osd--gold' : ''}`} aria-hidden="true">
          CH {number(channel)}
        </p>
      </div>
      <div className="crt__controls">
        <div className="crt__now" aria-live="polite">
          <p className="crt__name">{current.name}</p>
          <p className="crt__caption">{current.caption}</p>
        </div>
        <div className="crt__buttons">
          <button className="knob" type="button" aria-label="Previous channel" onClick={() => turn(-1)}>CH-</button>
          <button className="knob" type="button" aria-label="Next channel" onClick={() => turn(1)}>CH+</button>
          {current.link && (
            <a className="knob knob--go" href={current.link} target="_blank" rel="noreferrer">
              Visit<span className="sr-only"> {current.name}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => (
  <section className="hero" id="top" aria-label="Introduction">
    <div className="marquee">
      <Stripe colors={[FLAG.gold, FLAG.red, FLAG.gold, FLAG.black]} />
      <div className="marquee__body">
        <img
          className="marquee__avatar"
          src="/avatar.png"
          alt="Pixel-art portrait of Munya in a green cap"
          width={132}
          height={132}
        />
        <h1>MUNYARADZI<br />MAKOSA</h1>
        <p className="marquee__lede">
          Product architect from Zimbabwe, based in Cape Town. I build AI products, and the agent tools I ship them with.
        </p>
        <a className="btn btn--dark marquee__cta" href="#contact" onClick={coin}>Start a project</a>
      </div>
      <ul className="marquee__links">
        <li><a className="textlink" href="#work">See the work</a></li>
        <li><a className="textlink" href="/cv.html">Read the CV</a></li>
        <li><a className="textlink" href="https://dj.munyamakosa.com" target="_blank" rel="noreferrer">Hear the mixes</a></li>
      </ul>
    </div>
    <Crt />
  </section>
);
