import ProfileImage from "./ProfileImage";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage imageSrc={tweet.user.image} />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{tweet.user.name}</span>
            <span className="handle">@{tweet.user.handle}</span>
          </span>

          <span className="timestamp">{tweet.timestamp}</span>
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i
            className="far fa-comment"
            data-testid="comment-icon"
          ></i>
          <i
            className="fas fa-retweet"
            data-testid="retweet-icon"
          ></i>
          <i
            className="far fa-heart"
            data-testid="heart-icon"
          ></i>
          <i
            className="fas fa-share"
            data-testid="share-icon"
          ></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
