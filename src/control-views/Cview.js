import React from 'react'
import Banggia from '../site/banggia'
import Lienhe from '../site/lichkham'
import Trangchu from '../site/trangchu'
import Login from '../site/Login'
const Cview = ({ authRoute }) => {
    return (
        <>
            {
                authRoute === 'banggia' && <Banggia />
            }
            {
                authRoute === 'lichkham' && <Lienhe />
            }
            {
                authRoute === 'login' && <Login />
            }
        </>
    )
}
export default Cview
