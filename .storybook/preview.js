import '../public/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/styles/font-awesome.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
