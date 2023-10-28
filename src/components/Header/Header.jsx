import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Cart from "../Cart/Cart";

import "./Header.scss";
import React from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = ()=>{
        const offset = window.scrollY
        if(offset>60){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    }, [])
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <header className={`main-header ${scrolled? 'sticky-header' : ''}` }>
                <div className="header-content">
                    <ul className="left">
                        <li><Link to="/" className="router-link">Home</Link></li>
                        <li><Link to="/" className="router-link">Posts</Link></li>
                        <li><Link to="/recommendation" className="router-link">Recommendation</Link></li>
                    </ul>
                    <div className="center"><Link to="/" className="router-link">Twitter</Link></div>
                    <div className="right">
                        <span 
                            className="cart-icon" 
                            onClick={()=>setShowCart(true)}
                        >
                            Search
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
        </>
    );
};

export default Header;