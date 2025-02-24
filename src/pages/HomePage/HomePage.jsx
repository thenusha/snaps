import PhotoCard from '../../components/photoCard/photoCard';
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

const url = "https://unit-3-project-c5faaab51857.herokuapp.com/photos/?api_key=d940a9b4-7fcd-488f-93f0-8014b99d31e0"
//{"api_key":"d940a9b4-7fcd-488f-93f0-8014b99d31e0"}
const urlFilter = "https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=d940a9b4-7fcd-488f-93f0-8014b99d31e0"

useEffect(() => {
  const fetchPhoto = async () => {
    const response = await axios.get(url);
    console.log(response.data);

    setPhotos(response.data);
  };
    fetchPhoto();

}, []);

useEffect(() => {
  const fetchFilter = async () => {
    const filterResponse = await axios.get(urlFilter);
    //console.log(filterResponse.data);

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
      <div>
        <PhotoCard photos={photos} selectTag={selectTag} />
      </div>
      <div>
       <Footer />
    </div>
        </main>
    );
}