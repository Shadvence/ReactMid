import "./Home.scss";

import Feed from "../Feed/Feed";
// import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="banner">
            <div className="main-content">
                <div className="layout">
                    <Feed />
                </div>
            </div>
        </div>
    );
};

export default Home;