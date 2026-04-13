export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    row.classList.add('columns-row');
    [...row.children].forEach((col, i) => {
      col.classList.add('columns-col');
      if (col.querySelector('img')) col.classList.add('columns-img-col');
    });
  });
}
