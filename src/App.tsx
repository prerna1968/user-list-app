// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import { ThemeProvider } from '@mui/material/styles';
import theme from './thems';
import UserDetail from './pages/UserDetails';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
