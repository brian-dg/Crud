import React, { useState, useEffect } from 'react'


const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })

  
    
    
    }

return (
    <form
    onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id,user)
        
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

        <button className="button btn btn-warning mt-4 mr-3">Editar</button>
        <button
        onClick={() => props.setEditing(false)}
        className="button muted-button btn btn-danger mt-4 mr-3"
    >Cancelar</button>
    
    </form>
)
}

export default EditUserForm;