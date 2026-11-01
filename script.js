const appTitle = document.getElementById('app-title');
const appStatus = document.getElementById('app-status');

const titleText = 'The Atabeis Empire';
appTitle.textContent = titleText;

const button = document.getElementById('launch-button');
button.addEventListener('click', () => {
  appStatus.textContent = 'Project scaffold ready. Start building your empire.';
});
