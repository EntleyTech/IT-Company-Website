// Theme Switcher
class ThemeSwitcher {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Apply saved theme
        this.applyTheme(this.theme);
        
        // Create toggle button
        this.createToggleButton();
        
        // Listen for system theme preference changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
                const newTheme = e.matches ? 'dark' : 'light';
                this.setTheme(newTheme);
            });
        }
    }

    createToggleButton() {
        // Check if button already exists
        if (document.getElementById('theme-toggle-btn')) {
            return;
        }

        const button = document.createElement('button');
        button.id = 'theme-toggle-btn';
        button.className = 'theme-toggle';
        button.setAttribute('title', 'Toggle dark/light mode');
        button.setAttribute('aria-label', 'Toggle dark/light mode');
        
        const icon = document.createElement('i');
        icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        button.appendChild(icon);
        button.addEventListener('click', () => this.toggleTheme());
        
        document.body.appendChild(button);
    }

    applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.updateToggleIcon('sun');
        } else {
            document.documentElement.removeAttribute('data-theme');
            this.updateToggleIcon('moon');
        }
    }

    updateToggleIcon(icon) {
        const button = document.getElementById('theme-toggle-btn');
        if (button && button.querySelector('i')) {
            const iconElement = button.querySelector('i');
            iconElement.className = icon === 'sun' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme(theme);
    }
}

// Initialize theme switcher when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ThemeSwitcher();
    });
} else {
    new ThemeSwitcher();
}
