import App from 'next/app';
import 'react-simple-flex-grid/lib/main.css';
import '../public/scss/main.scss';

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
