import { MdClose } from "react-icons/md";

import "./Cart.scss";
const Cart =({setShowCart})=>{
    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Search bar</span>
                    <span 
                        className="close-btn" 
                        onClick={()=>setShowCart(false)}
                    >
                        <MdClose />
                        <span className="text">CLOSE</span>
                    </span>
                </div>   
                <div className="empty-cart">
                    <div className="searchbar">
                        <form className="search">
                            <label className="textofsearch">What do you want to find?</label>
                            <br></br>
                            <input type="text" value="memes" className="inputtxt" />
                        </form>
                    </div>
                    <button className="return-cta" onClick={()=>setShowCart(false)}>RETURN</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;