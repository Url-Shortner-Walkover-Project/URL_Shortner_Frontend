import React, { useContext } from 'react'

import Table from './Table'

const Home = (props) => {

    const {showAlert}= props


    return (



        <Table showAlert={showAlert} />



    )
}

export default Home
