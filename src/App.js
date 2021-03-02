import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, MondalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';
import UserTable from './Tables/UserTable';
import AddUserForm from './Forms/AddUserForm';
import EditUserForm from './Forms/EditUserForm';





const App = () => {
  //Datos de usuario
  const usersData = [
    { id: 1, name: 'Raul', userName: 'have' },
    { id: 2, name: 'Pedro', userName: 'Sering' },
    { id: 3, name: 'Ben', userName: 'benis' },
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar usuario
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

//Eliminar Usuario
  const deleteUser = (id) => {
    setEditing (false)
    setUsers(users.filter((user) => user.id !== id))
    
  }

  //Editar usuario
  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }

  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = (user) => {
    
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
    //actualizar usuario 
    const updateUser = (id, updatedUser) => {
      setEditing(false)
    
      setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    
  }


    return (
      
      <div className="container">
        <h1 className="text-center mb-5">CRUD App with Hooks</h1>

        <div className="row col-md-12 text-center">
            
          <div className="col-md-6">
          {editing ? (
            <div>
            <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                
              />
            </div>
          ) : (
            <div>
            <h2>Agregar Usuario</h2>
            <AddUserForm addUser={addUser} />
            </div>
          )}
          </div>

          <div className="col-md-6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
          </div>

        </div>
      </div>
    )
  }






export default App;
