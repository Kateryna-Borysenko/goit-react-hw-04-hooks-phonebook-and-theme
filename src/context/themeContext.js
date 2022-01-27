import { createContext } from 'react';

const themes = {
  light: 'light',
  dark: 'dark',
};

const ThemeContext = createContext({
  theme: themes.light, //cостояние - какая тема сейчас ?
  toggleTheme: () => { }, //метод который будет это состояние менять
});

export { ThemeContext, themes };
