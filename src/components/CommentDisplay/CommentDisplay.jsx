import "./CommentDisplay.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function CommentDisplay() {

    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const getComments = async () => {

            try {
            const commentResponse = await axios.get(`${baseUrl}/photos/${id}/comments`);
            setComments(commentResponse.data.sort((a, b) => { return b.timestamp - a.timestamp }));
            }
            catch(error){
                console.error("error getting comments");
            }
        };
        getComments();
    }, [id]);

    

    return (
        <section className="comments">
            <div className="comments__count">
                {comments.length} Comment{comments.length === 1 ? "" : "s"}
            </div>
            <div>
               {comments.map((comment, key) => {
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