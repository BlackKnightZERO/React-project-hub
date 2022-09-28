import { CryptoProvider } from './Context/CryptoContext'

import Navigation from './Navigation'
import MainContainer from './MainContainer'
import Footer from './Footer'

const CryptoApp = () => {

  return (
    <>
        <CryptoProvider>
          <Navigation />
          <MainContainer />
          <Footer />
        </CryptoProvider>
    </>
  )
}

export default CryptoApp