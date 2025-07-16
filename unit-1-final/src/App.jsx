import {BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import EventsPage from './components/EventsPage';

function App() {

  return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/eventspage" element={<EventsPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  )
}

export default App
