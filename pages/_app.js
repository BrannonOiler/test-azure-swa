// import { Configuration, PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';

import '../styles/reset.css';
import '../styles/main.css';

/** MSAL configuration */
/** TODO: Remove hardcoded clientID */
// const MSAL_CONFIG = {
//   auth: { clientId: '1cd0b97d-8e26-439e-8dba-06eb1b55804e' },
// };

// const publicClientApplication = new PublicClientApplication(MSAL_CONFIG);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <MsalProvider instance={publicClientApplication}> */}
        <Component {...pageProps} />
      {/* </MsalProvider> */}
    </div>
  );
}
