import '../styles/globals.css'
import GithubCorner from 'react-github-corner'
import Layout from './components/Layout'
export default function App({ Component, pageProps }) {
  return(
  <Layout>

    <Component {...pageProps} />
  </Layout>
  )
}
