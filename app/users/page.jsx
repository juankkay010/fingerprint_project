// app/users/page.jsx
"use client"

import { useEffect, useState } from 'react';

const UsersPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('/api/user');
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const data = await response.json();
        console.log("ssss")
        console.log(data)
        setUsuarios(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsuarios();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario._id}>
            {usuario.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
