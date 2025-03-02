import { useState, useEffect } from "react";
import "./CommentForm.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function CommentForm() {
const [commentName, setCommentName] = useState("");
const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);
const { id } = useParams();
const baseUrl = import.meta.env.VITE_API_URL;


const handleNameChange = (e) => {
    setCommentName(e.target.value);
};

const handleCommentChange = (e) => {
    setComment(e.target.value);
};

const handleSubmit = async (e) => {
    e.preventDefault()

    if (commentName === "" || comment === "") {
        console.log("cannot submit, please enter valid input");
        return;
    }

    try {
    const response = await axios.post(`${baseUrl}/photos/${id}/comments`,
        { name: commentName, comment: comment },
        { "Content-Type": "application/json" }
    );
    console.log("new comment added", response.data);
    const newComment = {
        id: response.data.id,
        name: response.data.name,
        comment: response.data.comment,
        timestamp: response.data.timestamp
    }

    setCommentName("");
    setComment("");
    setComments((prevComments) => {
        const updatedComments = [newComment, ...prevComments];
        console.log("all the  Comments after update:", updatedComments);
        return updatedComments;
    });


    console.log(response.data);
    }
    catch (error){
    console.error("error submitting comment");
    }
}

useEffect(() => {
    console.log("Updated Comments:", comments);
}, [comments]); 

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