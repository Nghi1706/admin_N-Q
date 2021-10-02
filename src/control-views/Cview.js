import React from 'react'
import Banggia from '../site/banggia'
import Lienhe from '../site/lichkham'
import Trangchu from '../site/trangchu'
const Cview = ({ authRoute }) => {
    return (
        <>
            {
                authRoute === 'trangchu' && <Trangchu />
            }
            {
                authRoute === 'banggia' && <Banggia />
            }
            {
                authRoute === 'lichkham' && <Lienhe />
            }
        </>
    )
}
export default Cview
