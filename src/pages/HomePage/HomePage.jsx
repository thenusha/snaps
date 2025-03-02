import PhotoCard from '../../components/PhotoCard/PhotoCard';
import Footer from '../../components/Footer/Footer';
import FilterDrawer from '../../components/FilterDrawer/FilterDrawer';
import Mission from '../../components/Mission/Mission';
import FilterList from '../../components/FilterList/FilterList';
import { Link } from 'react-router-dom';
import { use, useEffect, useState } from 'react';
import "./Homepage.scss";

import axios from "axios";

export default function HomePage() {
    const [page, setPage] = useState("noshow");
    const toggleSort = () => {
    setPage(page === "noshow" ? "show" : "noshow");
    };

const [selectTag, setselectTag] = useState(null);

const [photos, setPhotos] = useState([]);

const [filters, setFilters] = useState([]);

const baseUrl = import.meta.env.VITE_API_URL;

useEffect(() => {
  const fetchPhoto = async () => {
    const response = await axios.get(`${baseUrl}/photos`);
    setPhotos(response.data);
  };
    fetchPhoto();

}, []);

useEffect(() => {
  const fetchFilter = async () => {
    const filterResponse = await axios.get(`${baseUrl}/tags`);
    setFilters(filterResponse.data);
  };
    fetchFilter();
})

if (!photos.length) {
  return <>Loading photos...</>;
}

    return (
        <main>
          <div className='home__header'>
            <Link to="/">
              <h1 className='home__title'>Snaps</h1>
            </Link>  
            <FilterDrawer handleClick={toggleSort}/>
          </div>
      <div>
        {page === "show" &&
        <FilterList filters={filters} selectTag={selectTag} setselectTag={setselectTag}/>
        } 
      </div>
      <Mission />
      <PhotoCard key={photos.id} photos={photos} selectTag={selectTag} />
       <Footer />
        </main>
    );
}