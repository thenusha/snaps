import { use, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.scss";
import PhotoCard from './components/photoCard/photoCard';
import Footer from './components/Footer/Footer';
import FilterDrawer from './components/FilterDrawer/FilterDrawer';
import Mission from './components/Mission/Mission';
import FilterList from './components/FilterList/FilterList';
import filters from "../src/data/tags.json";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {

const [page, setPage] = useState("noshow");
const toggleSort = () => {
  setPage(page === "noshow" ? "show" : "noshow");
};

const [selectTag, setselectTag] = useState(null);
// const toggleSelect = () => {
//   setselectTag(selectTag === null ? filters.tag : null);
// };

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
