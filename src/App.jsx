import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Students from './Pages/Students';
import Teachers from './Pages/Teachers';
import Dashboard from './Pages/Dashboard';
import Courses from './Pages/Courses';
import Reports from './Pages/Reports';
import TeacherDetail from './Components/TeacherDetail';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
<Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="courses" element={<Courses />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
