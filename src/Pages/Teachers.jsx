import React from 'react';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const teachers = [
    { id: 1, name: 'Sir Ali' },
    { id: 2, name: 'Miss Sara' },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Teachers</h1>
      <ul className="space-y-2">
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <Link
              to={`/teachers/${teacher.id}`}
              className="text-blue-600 hover:underline"
            >
              {teacher.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teachers;
