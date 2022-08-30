import KeepCard from './KeepCard'
import { Col } from 'react-bootstrap';

const KeepCardCollection = ({ keepData, placeHolder, activePlaceHolder }) => {

  return (
    <>
      {
        activePlaceHolder ? 
          (
            <>
              {
                placeHolder.map( 
                  (keep) => (
                    <Col key={keep.id} xs={12} sm={6} md={4} className="mb-4">
                        <div className="keep-app-sticker-div" >
                            <KeepCard
                                id={keep.id}
                                title={keep.title}
                                keepItems={keep.keepItems}
                                dismissed
                            />
                        </div>
                    </Col>
                  ) 
                )
              }
            </>
          ) : (
            <>
            {
              keepData.length ? (
                <>
                  {
                    keepData.map( 
                      (keep) => (
                        <Col key={keep.id} xs={12} sm={6} md={4} className="mb-4">
                            <div className="keep-app-sticker-div" >
                                <KeepCard
                                    id={keep.id}
                                    title={keep.title}
                                    keepItems={keep.keepItems}
                                />
                            </div>
                        </Col>
                      ) 
                    )
                  }
                </>
              ) : (
                <>
                  <h4>No Items Found</h4>
                </>
              )
            }
            </>
          ) 
      }
    </>
  )
}

KeepCardCollection.defaultProps = {
  placeHolder : [
    {
        id: -1,
        title: 'Keep',
        keepItems:[
            {id:-11, title:'Eggs', status: 1},
            {id:-12, title:'Onions', status: 1},
            {id:-13, title:'Suger', status: 0},
            {id:-14, title:'Salt', status: 1},
        ]
    },
    {
        id: -2,
        title: 'Notes',
        keepItems:[
            {id:-15, title:'Pencil', status: 1},
            {id:-16, title:'Pen X 4', status: 0},
            {id:-17, title:'Paper', status: 1},
        ]
    },
    {
        id: -3,
        title: 'Organized',
        keepItems:[
            {id:-18, title:'Learn Italian cooking', status: 0},
            {id:-19, title:'Meditation', status: 1},
            {id:-20, title:'Call a frield', status: 1},
        ]
    },
  ]
}

export default KeepCardCollection