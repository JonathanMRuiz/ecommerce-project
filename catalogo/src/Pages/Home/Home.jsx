import React from 'react'
import Announcement from '../../Components/Announcement/Announcement'
import Categories from '../../Components/Categories/Categories'
import Navbar from '../../Components/Navbar/Navbar'
import Products from '../../Components/Products/Products'
import Sliders from '../../Components/Sliders/Sliders'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Sliders/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home


