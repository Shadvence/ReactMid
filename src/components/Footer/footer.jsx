import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <hr></hr>
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Here, in Twitter you can see last memes and news.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contacts</div>
                    <div className="c-item">
                        <div className="text">
                            Some random location in USA
                        </div>
                    </div>
                    <div className="c-item">
                        <div className="text">
                            Phone: +7 777 777 88 88
                        </div>
                    </div>
                    <div className="c-item">
                        <div className="text">
                            Email: muchasGraciasAficion@gmail.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">Posts</span>
                    <span className="text">Recommendation</span>
                    <span className="text">Contact Us</span>
                </div>
                <br></br>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            Some random facts about Twitter asjkd hsjkdfh as hfjksadfjkahsdkjfh ksajdh fkjsadhfk j
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;