import React, { useState } from 'react';
import { EMAIL } from '../constants';
import { blip } from '../sound';
import { Perforation, Teeth } from './Pixel';

const PAPER = '#eaffe4';
const HOLE = '#050505';

export const Letter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      blip(1046, 90);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="section letter-scene" id="about" aria-labelledby="about-title">
      <img
        className="letter-scene__photo"
        src="/media/sonder/s14.jpg"
        alt=""
        width={1600}
        height={900}
        loading="lazy"
      />
      <div className="wrap">
        <article className="sheet" data-reveal>
          <div className="sheet__paper">
            <div className="sheet__top">
              <img src="/avatar.png" alt="" width={64} height={64} />
              <h2 id="about-title">ABOUT PLAYER ONE</h2>
            </div>
            <p>
              I grew up in Zimbabwe and studied chemical engineering at NUST in Bulawayo. Then I started
              writing software, and I never really stopped.
            </p>
            <p>
              In 2019 I co-founded Farmhut Africa, a marketplace that put rural farmers in touch with buyers
              over WhatsApp, because that is what their phones could run. It won the{' '}
              <mark>$100,000 Hult Prize</mark> in 2021 and made me an Anzisha Prize Fellow.
            </p>
            <p>
              Since then I’ve built for clients worldwide as a Top Rated Plus freelancer on Upwork, and co-founded Studio 82, where we put four
              apps on the App Store.
            </p>
            <p>
              Now I build with agents every day, and I build for them: Atelier, a Mac workspace for
              Claude Code and Codex; Skillshed, a vetted skills marketplace; and an MCP server that lets Claude
              produce in Ableton.
            </p>
            <p>
              I work from Cape Town. When the laptop closes I fly a drone over the city at dusk and play
              Afro-house sets.
            </p>
            <p>If you have something that needs to ship, I’d like to hear about it.</p>
            <div className="sheet__sign">
              <strong>Munya</strong>
              <span>Product architect, Cape Town</span>
            </div>
          </div>
          <div>
            <Perforation paper={PAPER} hole={HOLE} />
            <div className="stub">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button className="btn btn--dark" type="button" onClick={copy}>
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
            <Teeth color={PAPER} />
          </div>
        </article>
      </div>
    </section>
  );
};
