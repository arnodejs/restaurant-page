import homeTab from './tabs/home-tab.js';
import menuTab from './tabs/menu-tab.js';
import bookTableTab from './tabs/book-table-tab.js';
import './style.css';

const tabsEl = document.querySelectorAll('.button-tab');
const contentEl = document.getElementById('content');
contentEl.innerHTML = homeTab;

function switchTab(tab) {
  switch (tab) {
    case 'home':
      contentEl.innerHTML = homeTab;
      return;
    case 'menu':
      contentEl.innerHTML = menuTab;
      break;
    case 'book':
      contentEl.innerHTML = bookTableTab;
      break;
    default:
      return;
  }
}

function resetActive() {
  tabsEl.forEach((tab) => {
    tab.setAttribute('data-active', false);
    tab.classList.remove('active');
  });
}

tabsEl.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    resetActive();
    const activeTab = e.target;

    if (activeTab.dataset.active === 'true') return;
    activeTab.setAttribute('data-active', true);

    switchTab(activeTab.dataset.tab);
    activeTab.classList.add('active');
  });
});
