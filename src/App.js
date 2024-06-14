import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Box } from '@mui/material';
import './App.css';

const API_URL = 'https://api.fake-rest.refine.dev/users';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        const activeUsers = response.data.filter(user => user.status);
        setUsers(activeUsers);
      })
      .catch(error => {
        console.error("Error obteniendo los datos", error);
      });
  }, []);

  const addUser = (user) => {
    axios.post(API_URL, user)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.error("Error añadiendo el usuario", error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error eliminando el usuario", error);
      });
  };

  const editUser = (updatedUser) => {
    axios.put(`${API_URL}/${updatedUser.id}`, updatedUser)
      .then(() => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
      })
      .catch(error => {
        console.error("Error editando el usuario", error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Box mt={2} mb={10}>
          <AddUserForm addUser={addUser} />
          <center>
          <br></br>
          <h2>Lista de usuarios activos</h2>
          </center>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default App;
