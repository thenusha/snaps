import { use, useState } from 'react'
import "./App.scss";
import PhotoCard from './components/photoCard/photoCard';
import Footer from './components/Footer/Footer';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import Mission from './components/Mission/Mission';
import FilterList from './components/FilterList/FilterList';
import filters from "../src/data/tags.json";


function App() {

const [page, setPage] = useState("noshow");
const toggleSort = () => {
  setPage(page === "noshow" ? "show" : "noshow");
};

const [selectTag, setselectTag] = useState(null);


  return (
    <main className='App'>
      <div className='App__header'>
        <h1 className='App__title'>Snaps</h1>
        <FilterDrawer handleClick={toggleSort}/>
      </div>
      <div>
        {page === "show" &&
        <FilterList selectTag={selectTag} setselectTag={setselectTag}/>
        } 
      </div>
      <Mission />
      <div>
        <PhotoCard selectTag={selectTag} />
      </div>
      <div>
       <Footer />
    </div>
    </main>
  );
}

export default App
