import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Product Applications Strategist</title>
        <meta property="og:title" content="Product Applications Strategist" />
      </Helmet>
    </div>
  )
}

export default Home
