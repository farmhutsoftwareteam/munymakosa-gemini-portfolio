import React, { useState } from 'react';
import { EMAIL } from '../constants';
import { coin } from '../sound';

// The coupon: fill it in and it opens your email app with everything written out. There is no backend.
export const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const from = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const budget = String(data.get('budget') || '').trim();

    const subject = `New project${name ? ` from ${name}` : ''}`;
    const body = [
      'Hi Munya,',
      '',
      project || 'I have a project I’d like to talk about.',
      '',
      budget && `Budget / timeline: ${budget}`,
      from && `Reply to: ${from}`,
      name && `— ${name}`,
    ].filter(line => line !== '').join('\n');

    coin();
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section wrap" id="contact" aria-labelledby="contact-title">
      <div className="coupon" data-reveal>
        <div className="coupon__pitch">
          <h2 id="contact-title">INSERT COIN TO START</h2>
          <p>
            Tell me what you’re building. This opens your email app with everything filled in, so it goes
            straight to me.
          </p>
        </div>
        <form className="coupon__form" onSubmit={onSubmit}>
          <label className="sr-only" htmlFor="c-name">Your name</label>
          <input id="c-name" name="name" autoComplete="name" placeholder="Your name" required />
          <label className="sr-only" htmlFor="c-email">Your email</label>
          <input id="c-email" name="email" type="email" autoComplete="email" placeholder="Your email" required />
          <label className="sr-only" htmlFor="c-project">What are you building?</label>
          <textarea id="c-project" name="project" placeholder="What are you building?" required />
          <label className="sr-only" htmlFor="c-budget">Budget or timeline</label>
          <input id="c-budget" name="budget" placeholder="Budget or timeline (optional)" />
          <button className="btn btn--dark" type="submit">Send to Munya</button>
          <p className="coupon__sent" role="status">
            {sent ? `Your email app should open now. If it didn’t, write to ${EMAIL}.` : ''}
          </p>
        </form>
      </div>
      <div className="contact__alt">
        <a className="textlink" href="https://www.upwork.com/freelancers/~018e86cb6f5afe5cdf?mp_source=share" target="_blank" rel="noreferrer">
          Hire me on Upwork
        </a>
        <a className="textlink" href="https://www.linkedin.com/in/makosa-munya/" target="_blank" rel="noreferrer">
          Connect on LinkedIn
        </a>
        <a className="textlink" href="/cv.html">Read the CV</a>
      </div>
    </section>
  );
};
