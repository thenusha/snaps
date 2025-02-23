import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './PhotoDetailsPage.scss';
import { useState, useEffect } from "react";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentDisplay from "../../components/CommentDisplay/CommentDisplay";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import DetailsPageCard from "../../components/DetailsPageCard/DetailsPageCard";




export default function PhotoDetailsPage() {
    const { id } = useParams();
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            const url = `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=d940a9b4-7fcd-488f-93f0-8014b99d31e0`
            const response = await axios.get(url);
            console.log(response.data);
      
          setPhotos(response.data);
        };
          fetchPhoto();
      
      }, [id]);

      if (!photos) {
        return <>Loading...</>;
      }

    return (
        <div>
        <Header></Header>
        <div>
            <DetailsPageCard photos={photos}></DetailsPageCard>
        </div>
        <div>
            <CommentForm></CommentForm>
        </div>
        <div>
            <CommentDisplay></CommentDisplay>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </div>
    );
}