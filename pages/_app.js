import '../styles/globals.css'

export default function App({
  Component,
  pageProps: {  ...pageProps },
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
      <Component {...pageProps} />
  
  )
}

