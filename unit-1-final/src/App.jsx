import {BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import EventsPage from './components/EventsPage';
import UserProfile from './components/UserProfile';
import About from './components/About';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/eventspage" element={<EventsPage />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
