export default function decorate(block) {
  block.classList.add('references-container');
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('references-list');
  });
}
