import '../styles/globals.css';
import  {useEffect, createContext} from 'react';
import Cookies from 'js-cookie';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
 
  return( 
    
    <Component {...pageProps} />
    
  );

}

export default MyApp

