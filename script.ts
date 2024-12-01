interface StyleDictionary {
    [key: string]: string;
}

interface AppState {
    currentStyleName: string;
    currentStyleFile: string;
    availableStyles: StyleDictionary;
}

// Inicjalizacja stanu aplikacji
const appState: AppState = {
    currentStyleName: 'default',
    currentStyleFile: 'styles/page1.css',
    availableStyles: {
        'Styl1': 'styles/page1.css',
        'Styl2': 'styles/page2.css',
        'Styl3': 'styles/page3.css',
        'Styl4': 'styles/page4.css',
    }
};

// zmiana stylu
function changeStyle(styleName: string) {
    const styleFile = appState.availableStyles[styleName]; // zapisanie stylu
    const linkElement = document.getElementById('stylesheet') as HTMLLinkElement;
    linkElement.href = styleFile;
    appState.currentStyleName = styleName;
    appState.currentStyleFile = styleFile;
}

// Dodanie przycisków do menu
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    Object.keys(appState.availableStyles).forEach(styleName => {
        const link = document.createElement('a');
        link.textContent = styleName;
        link.href = '#';
        link.onclick = (event) => {
            event.preventDefault(); // zapobieganie domyślnej akcji 
            changeStyle(styleName);
        };
        // @ts-ignore
        menu.appendChild(link);
    });
});