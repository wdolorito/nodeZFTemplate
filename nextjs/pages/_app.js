import '../styles/globals.css'
import MainLayout from '../layout/main_layout'
import { SampleProvider } from '../context/sample_context'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <SampleProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SampleProvider>
  )
}

export default MyApp
