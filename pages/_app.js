import { Provider } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/globals.css';
import store from '../store';
import '../plugins/react-i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  );
}
