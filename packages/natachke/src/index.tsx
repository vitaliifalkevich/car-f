import 'react-app-polyfill/stable'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as React from 'react'
import { Provider } from 'react-redux'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styles/theme/ThemeProvider'
import { MediaQueriesProvider } from './MediaQueriesProvider'
import { sizes } from './styles/media'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import reportWebVitals from './reportWebVitals'
import config from 'config'

import 'sanitize.css/sanitize.css'
// Initialize languages
import './locales/i18n'

import App from './pages/App'

import { configureAppStore } from 'store/configureStore'
import { SocketProvider } from './websockets/SocketProvider'

const { recaptchaPublicKey } = config

export const { store, persistor } = configureAppStore()
const MOUNT_NODE = document.getElementById('root') as HTMLElement

interface Props {
  Component: typeof App
}

const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <SocketProvider>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <React.StrictMode>
            <MediaQueriesProvider queries={sizes}>
              <GoogleReCaptchaProvider reCaptchaKey={recaptchaPublicKey}>
                <BrowserRouter>
                  <React.Suspense fallback={false}>
                    <Component />
                  </React.Suspense>
                </BrowserRouter>
              </GoogleReCaptchaProvider>
            </MediaQueriesProvider>
          </React.StrictMode>
        </ThemeProvider>
      </PersistGate>
    </SocketProvider>
  </Provider>
)

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE)
}

render(App)

reportWebVitals()
