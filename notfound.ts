// The 404 page: an arcade "Continue?" countdown that respawns the visitor on the home page.
import './styles.css';
import { unlock } from './secrets';

const count = document.getElementById('count')!;
const hint = document.getElementById('hint')!;
let n = 9;

unlock('gameover');

const respawn = () => {
  hint.textContent = 'Respawning…';
  window.location.href = '/';
};

const tick = window.setInterval(() => {
  n -= 1;
  count.textContent = String(n);
  if (n <= 0) {
    window.clearInterval(tick);
    respawn();
  }
}, 1000);

window.addEventListener('keydown', e => {
  if (e.key === 'Tab' || e.metaKey || e.ctrlKey || e.altKey) return;
  window.clearInterval(tick);
  respawn();
});
