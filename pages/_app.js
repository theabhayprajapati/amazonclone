import '../styles/globals.css'

// pages/_app.js
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // const store = createStore(store)
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}
