import { Provider } from 'react-redux';
import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/globals.scss';
import store from '../store';
import '../plugins/react-i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Portolio - Kenneth Sumang</title>
      </Head>
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </div>
  );
}
