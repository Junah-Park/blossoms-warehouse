import React from 'react';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="home logo"
                />
            </div>
            <div className="home__row">
                <Product id={0} title="Casablanca" price={1000} image={`${process.env.PUBLIC_URL}/images/products/p1.jpg`} rating={5}/>
                <Product id={1} title="Sophia Tolli" price={1300} image={`${process.env.PUBLIC_URL}/images/products/p3.jpg`} rating={5}/>
                <Product id={2} title="Fuschia" price={400} image={`${process.env.PUBLIC_URL}/images/products/p4.jpg`} rating={5}/>
                <Product id={3} title="Jovani" price={450} image={`${process.env.PUBLIC_URL}/images/products/p2.jpg`} rating={4}/>
                <Product id={4} title="Terani" price={550} image={`${process.env.PUBLIC_URL}/images/products/p5.jpg`} rating={5}/>
                <Product id={5} title="Evenings" price={300} image={`${process.env.PUBLIC_URL}/images/products/p6.jpg`} rating={3}/>
            </div>
        </div>
    )
}

export default Home;
