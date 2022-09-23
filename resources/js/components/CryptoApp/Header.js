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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </section>
    </>
  )
}

export default Header