import react from "react";
import faker from "faker";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.image()} />
      </a>
      <div className="content">
        <a className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{props.text}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
