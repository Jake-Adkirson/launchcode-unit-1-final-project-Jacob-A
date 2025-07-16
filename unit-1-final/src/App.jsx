import {BrowserRouter, Route, Routes, Navigate } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import EventsPage from './components/EventsPage';
import UserProfile from './components/UserProfile';
import About from './components/About';
import CreateEvent from './components/CreateEvent';
import JoinEvent from './components/JoinEvent';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CurrentEvents from './components/CurrentEvents';
import TripPage from './components/TripPage';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/welcome/sign_in" element={<SignIn />} />
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/events_page" element={<EventsPage />} />
                <Route path="/events_page/create_event" element={<CreateEvent />} />
                <Route path="/events_page/current_events" element={<CurrentEvents />} />
              <Route path="/trip_page" element={<TripPage />} />
              <Route path="/join_event" element={<JoinEvent />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/about" element={<About />} />
            </Routes>
            </main>
          <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
