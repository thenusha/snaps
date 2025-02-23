import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './PhotoDetailsPage.scss';
import { useState, useEffect } from "react";




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
        return <>Loadinng...</>;
      }

    return (
        <div>
        <h2>photo deta</h2>
        <div>
            <img src={photos.photo} alt="" />
        </div>
        </div>
    );
}