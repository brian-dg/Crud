import React from 'react'



const UserTable = (props) => (
<div class="position-relative form-row mt-2">
                                            <div class="table-responsive">
                                                <table class="table table-striped table-hover table-bordered col-md-12">
                                                    <thead>
                                                    
                                                        <tr>
                                                            <th class="text-center ">Name</th>
                                                            <th class="text-center ">UserName</th>
                                                            <th class="text-center ">Acciones</th>
                                                        </tr>
                                                        
                                                    </thead>
                                                    <tbody>
                                                    {props.users.length > 0 ? (props.users.map((user) => (                               
                                                            <tr >
                                                                <td class="text-center ">{user.name}</td>
                                                                <td class="text-center "> {user.userName} </td>
                                                                <td class="text-center ">

                                                                    
                                                                    <a href="#"><button onClick={() => props.editRow(user)} type="button" class="btn mr-2 btn-sm btn-warning">Editar</button></a>

                                                                
                                                                    <a href="#"><button onClick={() => props.deleteUser (user.id)} type="button" class="btn btn-sm mr-2 btn-danger">Eliminar</button></a>
                                                                </td>
                                                            </tr>
                                                            ))
                                                            ) : (
                                                            
                                                                <tr>
                                                                <td colSpan={3}>No users</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                        </table>
                                                    
                                                
                                            </div>
                                        </div>

)
export default UserTable