import "./Feed.scss";
import News from "./News/News";

const Feed = ({ innerPage }) => {
    return (
        <div className="feed-container">
            {!innerPage && <div className="sec-heading">Feed</div>}
            <div className="feed">
                <News />
            </div>
        </div>
    
    );
};

export default Feed;