import MainLayout from 'components/MainLayout';
import { AppProps } from 'next/app';

import '../styles/app.scss';

function App({ Component, pageProps, router }: AppProps) {
  return (
    <MainLayout route={router.route}>
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  );
}

export default App;
