export default function decorate(block) {
  const rows = [...block.children];
  const track = document.createElement('div');
  track.classList.add('carousel-track');

  rows.forEach((row) => {
    row.classList.add('carousel-slide');
    track.append(row);
  });

  const nav = document.createElement('div');
  nav.classList.add('carousel-nav');
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('carousel-prev');
  prevBtn.textContent = '‹';
  prevBtn.setAttribute('aria-label', 'Previous');
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('carousel-next');
  nextBtn.textContent = '›';
  nextBtn.setAttribute('aria-label', 'Next');

  prevBtn.addEventListener('click', () => { track.scrollBy({ left: -300, behavior: 'smooth' }); });
  nextBtn.addEventListener('click', () => { track.scrollBy({ left: 300, behavior: 'smooth' }); });

  nav.append(prevBtn, nextBtn);
  block.append(track, nav);
}
