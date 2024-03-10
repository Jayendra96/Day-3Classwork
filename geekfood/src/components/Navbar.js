import "./Navbar.css";
import Button from "./Button";
import logo from "../assest/logo/logo.svg";

function Navbar () {
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                {/* {Add Brand logo and Name} */}
                <img src= {logo} alt="loading"></img>
                <span className="logo-name">GeekFoods</span>
            </div>
            <div>
                <div className="nav-links">
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>
            </div>
            <div>
             <Button borderRadius="6px" backgroundColor="#1C4DE8" fontColor="#FFFFFF">Get Started</Button>
             {/* <Button borderRadius="8px" backgroundColor="#FFFFFF" fontColor="#FF0000">Know More</Button>
             <Button borderRadius="8px" backgroundColor="#FF0000" fontColor="#FFFFFF">Search Now</Button> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar;