import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Menu from './Menu';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './Footer';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1
    },
    284: {
        items: 2,
        itemsFit: 'contain'
    },
    568: {
        items: 3,
        itemsFit: 'contain'
    },
    1024: {
        items: 4,
        itemsFit: 'contain'
    },
    1360: {
        items: 5,
        itemsFit: 'contain'
    },
};
const handleDragStart = (e) => e.preventDefault();
const items = [
    <img className="rounded" src="/src/assets/images/pdd.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pds.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pdtcc.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/petica.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pltt.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/posa.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/ppa.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/ppaml.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/ppamll.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pptcc.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pssi.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="rounded" src="/src/assets/images/pweb.png" onDragStart={handleDragStart} role="presentation" />,
];

function Home() {
    return (
        <div>
            <Menu />
            <div className="container-config">
                <div className="row carousel-bg">
                    <img src="/src/assets/images/ruth-header.png" alt="" />
                    <AliceCarousel
                        autoPlay
                        autoPlayInterval={1000}
                        animationDuration={1000}
                        animationType="fadeout"
                        mouseTracking
                        items={items}
                        responsive={responsive}
                        infinite
                        disableDotsControls
                        disableButtonsControls
                    />
                    <img src="/src/assets/images/sub-header.png" alt="" />
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home;