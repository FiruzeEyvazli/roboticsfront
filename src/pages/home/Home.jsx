import React from 'react'
import Header from '../../components/common/header/Header'
import FirstSection from './components/firstSection/FirstSection'
import ThreeSection from './components/threeSection/ThreeSection'
import TwoSection from './components/twoSection/TwoSection'
import ProductSection from './components/productSection/ProductSection'

const Home = () => {
  return (
    <>
    <Header/> 
    <FirstSection/>
    <TwoSection/>
    <ThreeSection/>
    <ProductSection/>
    </>
  )
}

export default Home