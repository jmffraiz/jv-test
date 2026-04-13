export default function decorate(block) {
  const rows = [...block.children];
  const tabList = document.createElement('div');
  tabList.classList.add('tabs-list');
  tabList.setAttribute('role', 'tablist');

  const tabPanels = document.createElement('div');
  tabPanels.classList.add('tabs-panels');

  rows.forEach((row, index) => {
    const cols = [...row.children];
    const label = cols[0]?.textContent?.trim() || `Tab ${index + 1}`;
    const content = cols[1] || cols[0];

    const tab = document.createElement('button');
    tab.classList.add('tabs-tab');
    tab.setAttribute('role', 'tab');
    tab.textContent = label;
    if (index === 0) tab.classList.add('active');

    const panel = document.createElement('div');
    panel.classList.add('tabs-panel');
    panel.setAttribute('role', 'tabpanel');
    if (index > 0) panel.classList.add('hidden');
    if (content) panel.append(...content.cloneNode(true).children);

    tab.addEventListener('click', () => {
      tabList.querySelectorAll('.tabs-tab').forEach((t) => t.classList.remove('active'));
      tabPanels.querySelectorAll('.tabs-panel').forEach((p) => p.classList.add('hidden'));
      tab.classList.add('active');
      panel.classList.remove('hidden');
    });

    tabList.append(tab);
    tabPanels.append(panel);
    row.remove();
  });

  block.append(tabList, tabPanels);
}
