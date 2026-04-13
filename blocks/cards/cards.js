export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('cards-card');
    const cols = [...row.children];
    if (cols.length >= 2) {
      cols[0].classList.add('cards-card-image');
      cols[1].classList.add('cards-card-body');
    } else if (cols.length === 1) {
      cols[0].classList.add('cards-card-body');
    }
  });
}
