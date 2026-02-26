import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const GestionUsersUseEffect = () => {
    const [loading,setLoading]=useState(true)
    const [users,setUsers]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=> {
            setUsers(data);
            setLoading(false);
            
        })
        
    },[])
  return (
    <div className='container mt-5'>
       <h1 className='text-center text-primary'>Liste des Users</h1>
       {loading ? <h2>Chargement des users En Cours ....</h2>:(
       <table className='table table-dark table-striped table-bordered'>
           <thead>
               <tr>
                   <th>Id</th>
                   <th>Nom</th>
                   <th>Prénom</th>
                   <th>Email</th>
                   <th>Ville</th>
               </tr>
               </thead>
               <tbody>
                {
                    users.map(user=>(
                        <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>                        
                        </tr>
                    ))
                }
               
               </tbody>
           
       </table>
        
       )}      
        <div className="alert alert-danger">
           <h2>Le nombre des Users : {users.length} </h2>
       </div>
    </div>
  )
}

export default GestionUsersUseEffect