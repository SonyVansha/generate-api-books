// AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Books from '../views/Books';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default AppRoutes;