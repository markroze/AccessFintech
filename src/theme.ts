type ThemeType = {
  colors: {
    black100: string;
    black200: string;
    black300: string;
    black400: string;
    black500: string;
    black600: string;
    white100: string;
    white200: string;
    blue100: string;
    blue200: string;
    blue300: string;
    blue400: string;
  };
};

const Theme: ThemeType = {
  colors: {
    black100: ' hsla(225, 14%, 12%, 1)',
    black200: ' hsla(225, 14%, 14%, 1)',
    black300: ' hsla(225, 14%, 16%, 1)',
    black400: ' hsla(225, 14%, 18%, 1)',
    black500: ' hsla(225, 14%, 20%, 1)',
    black600: ' hsla(225, 14%, 22%, 1)',
    white100: ' hsla(225, 14%, 100%, 1)',
    white200: ' hsla(225, 14%, 100%, 0.8)',
    blue100: 'hsla(210, 100%, 37%, 1)',
    blue200: 'hsla(210, 100%, 33%, 1)',
    blue300: 'hsla(210, 100%, 35%, 1)',
    blue400: 'hsla(210, 100%, 33%, 0.5)',
  },
};

export default Theme;
