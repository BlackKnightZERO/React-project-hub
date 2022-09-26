import { useState } from 'react';

import { Button, Collapse } from 'react-bootstrap'

const Header = () => {
    const [headerCollapse, setHeaderCollapse] = useState(false);
  return (
    <>
        <section className='crypto-app-header-mobile-screen'>
        <Button
            variant='secondary'
            onClick={() => setHeaderCollapse(!headerCollapse)}
            aria-controls="example-collapse-text"
            aria-expanded={headerCollapse}
            style={{ width: '100%', borderRadius: '0px', textAlign: 'left', padding: '.5rem', margin: '0px', backgroundColor: '#424242' }}
            className='crypto-app-header-mobile-screen-collapse-btn'
        >
            Market Snapshot
        </Button>
        <Collapse in={headerCollapse}>
            <div id="example-collapse-text" className='crypto-app-header-mobile-screen-collapse-field'>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
                <div className='crypto-app-header-mobile-screen-collapse-field-children'>
                    <div>
                        Left
                    </div>
                    <div>
                        Right
                    </div>
                </div>
            </div>
        </Collapse>
        </section>
        <section className='crypto-app-header'>
            <div>
                <h6>MARCET CAP</h6>
                <h3>$1.13T</h3>
            </div>
            <div>
                <h6>EXCHANGE VOL</h6>
                <h3>$68.88B</h3>
            </div>
            <div>
                <h6>ASSETS</h6>
                <h3>2,296</h3>
            </div>
            <div>
                <h6>EXCHANGES</h6>
                <h3>73</h3>
            </div>
            <div>
                <h6>MARKETS</h6>
                <h3>14,064</h3>
            </div>
            <div>
                <h6>BTC DOM INDEX</h6>
                <h3>31.0%</h3>
            </div>
        </section>
    </>
  )
}

export default Header