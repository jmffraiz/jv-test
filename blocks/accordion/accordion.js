export default function decorate(block) {
  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length < 2) return;

    row.classList.add('accordion-item');
    const trigger = document.createElement('button');
    trigger.classList.add('accordion-trigger');
    trigger.innerHTML = cols[0].innerHTML;

    const content = document.createElement('div');
    content.classList.add('accordion-content');
    content.classList.add('hidden');
    content.innerHTML = cols[1].innerHTML;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      content.classList.toggle('hidden');
      trigger.classList.toggle('active', !isOpen);
    });

    row.innerHTML = '';
    row.append(trigger, content);
  });
}
