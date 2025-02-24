import "./CommentDisplay.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function CommentDisplay() {

    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const urlComments = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=d940a9b4-7fcd-488f-93f0-8014b99d31e0`;

            const commentResponse = await axios.get(urlComments);
            setComments(commentResponse.data);
        };
        getComments();
    }, [id]);

    return (
        <section className="comments">
            <div className="comments__count">
                {comments.length} Comment{comments.length === 1 ? "" : "s"}
            </div>
            <div>
               {comments.map((comment) => {
                return (
                    <div className="comments__parent" key={comment.id}>
                        <div className="comments__info">
                            <div className="comments__info--name">{comment.name}</div>
                            <div className="comments__info--date">{new Date(comment.timestamp).toLocaleDateString()}</div>
                        </div>
                        {comment.comment}
                    </div>
                );
               })} 
            </div>
        </section>
    );
}