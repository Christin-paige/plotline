import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import RecommendedBooks from './components/RecommendedBooks'
import './index.css';

export default function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <RecommendedBooks />
    </>
  );
}
