// Tiny 8-bit sound effects. Off until the visitor turns them on.

const KEY = 'munya-sound';
let ctx: AudioContext | null = null;
let enabled = readPreference();

function readPreference(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

export function isSoundOn() {
  return enabled;
}

export function setSound(on: boolean) {
  enabled = on;
  try {
    localStorage.setItem(KEY, on ? '1' : '0');
  } catch {
    /* storage blocked: the setting lasts for this visit only */
  }
}

export function blip(freq = 660, ms = 70) {
  if (!enabled) return;
  try {
    ctx ??= new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t = ctx.currentTime;
    osc.type = 'square';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.05, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + ms / 1000);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + ms / 1000);
  } catch {
    /* no audio available */
  }
}

export function coin() {
  blip(988, 80);
  setTimeout(() => blip(1319, 240), 80);
}
