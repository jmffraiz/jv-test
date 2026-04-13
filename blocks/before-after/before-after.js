export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.classList.add('before-after-container');

  rows.forEach((row, index) => {
    const cols = [...row.children];
    const slide = document.createElement('div');
    slide.classList.add('before-after-slide');
    if (index > 0) slide.classList.add('hidden');

    if (cols.length >= 2) {
      const beforeDiv = document.createElement('div');
      beforeDiv.classList.add('before-after-before');
      beforeDiv.innerHTML = `<span class="label">Voor</span>`;
      beforeDiv.append(...cols[0].children);

      const afterDiv = document.createElement('div');
      afterDiv.classList.add('before-after-after');
      afterDiv.innerHTML = `<span class="label">Na</span>`;
      afterDiv.append(...cols[1].children);

      slide.append(beforeDiv, afterDiv);
    }
    container.append(slide);
    row.remove();
  });

  // Navigation dots
  if (rows.length > 1) {
    const dots = document.createElement('div');
    dots.classList.add('before-after-dots');
    rows.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        container.querySelectorAll('.before-after-slide').forEach((s, j) => {
          s.classList.toggle('hidden', j !== i);
        });
        dots.querySelectorAll('.dot').forEach((d, j) => {
          d.classList.toggle('active', j === i);
        });
      });
      dots.append(dot);
    });
    block.append(container, dots);
  } else {
    block.append(container);
  }
}
