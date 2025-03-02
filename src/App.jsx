import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PhotoDetailsPage from './pages/PhotoDetailsPage/PhotoDetailsPage';


function App() {

  return (
    <main className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="photo/:id" element={<PhotoDetailsPage />} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App
