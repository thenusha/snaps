import { useState, useEffect } from "react";
import "./CommentForm.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function CommentForm() {
const [commentName, setCommentName] = useState("");
const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);
const { id } = useParams();

const handleNameChange = (e) => {
    setCommentName(e.target.value);
};

const handleCommentChange = (e) => {
    setComment(e.target.value);
};

const handleSubmit = async (e) => {
    e.preventDefault()

    if (commentName.length < 1 && comment.length < 1) {
        console.log("cannot submit, please enter valid input");
    }

    const postUrl = ` https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=d940a9b4-7fcd-488f-93f0-8014b99d31e0`

    const response = await axios.post(postUrl,
        { name: commentName, comment: comment },
        { "Content-Type": "application/json" }
    );
    setCommentName("");
    setComment("");
    setComments([response.data, ...comments]);
}


return (
    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="form__name">Name</label>
        <input className="form__name" type="text" id="form__name" name="name" value={commentName} onChange={handleNameChange} />
        <label htmlFor="form__comment">Comment</label>
        <input className="form__comment" type="text" name="comment" id="form__comment" value={comment} onChange={handleCommentChange} />
        <button>Submit</button>

    </form>
);
}