import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const TeacherDetail = () => {
  const { id } = useParams();               // Get dynamic ID from URL
  const location = useLocation();           // Get current URL info

  // 🔍 Logging details
  console.log("Teacher ID:", id);
  console.log("Current Pathname:", location.pathname);
  console.log("Is inside /teachers route:", location.pathname.startsWith("/teachers"));

  return (
    <div>
      <h2 className="text-xl font-semibold">Teacher Detail Page</h2>
      <p>You're viewing details for teacher ID: {id}</p>
    </div>
  );
};

export default TeacherDetail;
