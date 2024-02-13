class DarkModeToggle {
  constructor(input) {
    this.input = input;
    this.init();
  }

  init = () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    this.input.checked = darkMode;
    if (darkMode) {
      this.toggleDarkMode();
    }
    this.input.addEventListener('change', this.toggleDarkMode);
  }

  toggleDarkMode = () => {
    const root = document.documentElement;
    if (this.input.checked) {
      root.style.setProperty('--BGCOLOR', '#1d1d1d');
    } else {
      root.style.setProperty('--BGCOLOR', 'WHITE');
    }
    localStorage.setItem('darkMode', this.input.checked);
  }
}

const action = new DarkModeToggle(document.querySelector('#dark-mode-box'));