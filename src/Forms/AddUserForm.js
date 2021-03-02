import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', userName: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.name || !user.userName) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
        <div class="form-group">
      <label>Name</label>
      <input  class="form-control"
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleInputChange}
      />
      </div>
      <div className="col-md-12 mt-3">
      <label>Username</label>
      <input class="form-control"
        type="text"
        name="userName"
        placeholder="User Name"
        value={user.userName}
        onChange={handleInputChange}
      />
      </div>
      <button className="btn btn-primary mt-3">Add new user</button>
      
    </form>
  )
}

export default AddUserForm