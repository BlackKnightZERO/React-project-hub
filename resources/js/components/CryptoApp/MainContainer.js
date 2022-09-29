import React, { useEffect } from 'react'
import { useCrypto } from './Context/CryptoContext'
import { currencyFormatter, formatCash } from './helper/utils'

import Header from './Header'

const MainContainer = () => {

  const { assets, fetchAssets, rowCount, setRowCount } = useCrypto()

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
                {
                  assets.slice(0, rowCount).map((asset, index) => (
                    <React.Fragment key={asset.id}>
                      <tr >
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                            {asset.rank}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element'>
                            <img 
                            className='crypto-app-body-table-row-logo'
                            src="https://assets.coincap.io/assets/icons/btc@2x.png" 
                            />
                        </td>
                        <td className='crypto-app-body-table-top-row'>
                          {asset.id}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element'>
                          {currencyFormatter.format(asset.priceUsd)}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                          {'$'}{formatCash(Number(asset.marketCapUsd))}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide tablet-fild-hide'>
                            {currencyFormatter.format(asset.vwap24Hr)}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide tablet-fild-hide'>
                            {formatCash(Number(asset.supply))}
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element mobile-fild-hide'>
                          {'$'}{ formatCash(Number(asset.volumeUsd24Hr)) }
                        </td>
                        <td rowSpan={2} className='crypto-app-body-table-row-span-element'
                          style={{ color : (!isNaN(asset.changePercent24Hr) && Number(asset.changePercent24Hr) > 0) ? '#2BBB83' : '#F44336' }}
                        >
                            {`${Number(asset.changePercent24Hr).toFixed(2)}%` }
                        </td>
                    </tr>
                    <tr>
                        <td className='crypto-app-body-table-bottom-row'>
                            {asset.symbol}
                        </td>
                    </tr>
                  </React.Fragment>
                  ))
                }
              </tbody>
            </table>
          </section>
    </>
  )
}

export default MainContainer