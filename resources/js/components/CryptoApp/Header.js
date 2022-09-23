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
                <h4>$1.13T</h4>
            </div>
            <div>
                <h6>EXCHANGE VOL</h6>
                <h4>$68.88B</h4>
            </div>
            <div>
                <h6>ASSETS</h6>
                <h4>2,296</h4>
            </div>
            <div>
                <h6>EXCHANGES</h6>
                <h4>73</h4>
            </div>
            <div>
                <h6>MARKETS</h6>
                <h4>14,064</h4>
            </div>
            <div>
                <h6>BTC DOM INDEX</h6>
                <h4>31.0%</h4>
            </div>
        </section>
    </>
  )
}

export default Header