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
    const baseUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await axios.get(`${baseUrl}/photos/${id}`);
      
          setPhotos(response.data);
        };
          fetchPhoto();
      
      }, [id]);

      if (!photos) {
        return <>Loading...</>;
      }
      //remove div tags for each component
      
    return (
        <section>
        <Header />
        <DetailsPageCard photos={photos}></DetailsPageCard>
        <CommentForm />
        <CommentDisplay />
        <Footer />
        </section>
    );
}