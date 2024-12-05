import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateUser from './pages/CreateUser';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/create" element={<CreateUser />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
