import Login from './Login.tsx';
import MainPage from './MainPage.tsx';
import Signup from './Signup.tsx';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

function App(){
  const location = useLocation();

  return(
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App