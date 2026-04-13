export default function decorate(block) {
  const rows = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.classList.add('clinic-finder-wrapper');

  rows.forEach((row) => {
    wrapper.append(...row.children);
    row.remove();
  });

  block.append(wrapper);
}
