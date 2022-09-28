import { useEffect } from 'react'
import { useCrypto } from './Context/CryptoContext'

import Header from './Header'

const MainContainer = () => {

  const { assets, fetchAssets } = useCrypto()

  useEffect(() => {
    fetchAssets()
  },[])

  return (
    <>
        <Header />
          <div className='crypto-app-header-extended-grey-box'></div>
          <section className='crypto-app-body-container'>
            <table className='crypto-app-body-table'>
              <thead>
                <tr>
                  <th className='mobile-fild-hide'>Rank</th>
                  <th>Name</th>
                  <th></th>
                  <th>Price</th>
                  <th className='mobile-fild-hide'>Market Cap</th>
                  <th className='mobile-fild-hide tablet-fild-hide'>VWAP(24Hr)</th>
                  <th className='mobile-fild-hide tablet-fild-hide'>Supply</th>
                  <th className='mobile-fild-hide'>Volume (24Hr)</th>
                  <th>Change (24Hr)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                      1
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element'>
                      <img 
                        className='crypto-app-body-table-row-logo'
                        src="https://assets.coincap.io/assets/icons/btc@2x.png" 
                      />
                    </td>
                    <td className='crypto-app-body-table-top-row'>
                      Bitcoin
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element'>
                      Price
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                      Market Cap
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide tablet-fild-hide'>
                      VWAP(24Hr)
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide tablet-fild-hide'>
                      Supply
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                      Volume (24Hr)
                    </td>
                    <td rowSpan={2} className='crypto-app-body-table-row-span-element crypto-app-hourly-change-rate'>
                      0.73%
                    </td>
                </tr>
                <tr>
                    <td className='crypto-app-body-table-bottom-row'>
                      BTX
                    </td>
                </tr>
              </tbody>
            </table>
          </section>
    </>
  )
}

export default MainContainer