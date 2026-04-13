import {
  sampleRUM,
  loadBlocks,
  decorateMain,
  waitForLCP,
  loadCSS,
} from './aem.js';

const LCP_BLOCKS = ['hero'];

/**
 * Decorates the page.
 */
async function loadPage() {
  const main = document.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
    await loadBlocks(main);
  }

  // post-LCP
  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  sampleRUM('lazy');
  sampleRUM.observe(main?.querySelectorAll('div[data-block-name]'));
}

loadPage();
