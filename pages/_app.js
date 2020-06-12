import MainLayout from '../components/MainLayout';

import '../styles/app.scss';

function App({ Component, pageProps, router }) {
  return (
    <MainLayout route={router.route} >
      <Component {...pageProps} key={router.route} />
    </MainLayout>
  );
}

export default App;
