export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length === 0) return;

  // First row is the background image
  const imgRow = rows[0];
  const img = imgRow.querySelector('img');
  if (img) {
    block.style.backgroundImage = `url(${img.src})`;
    block.style.backgroundSize = 'cover';
    block.style.backgroundPosition = 'center';
    imgRow.remove();
  }

  // Remaining rows are overlay content
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-content');
  [...block.children].forEach((row) => {
    contentWrapper.append(...row.children);
    row.remove();
  });
  block.append(contentWrapper);
}
