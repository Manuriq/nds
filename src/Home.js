import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Home() {

    const [data, setData] = useState([])
    
    useEffect(() => {

        axios.get('http://localhost:8081/api/get/')
        .then(res => {
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/api/delete/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


  return (
    <div className='d-flex justify-content-center align-items-center p-4'>
        <div className='bg-white rounded w-50'>
            <h2 className='text-center'>Note de services</h2>
            <Link to="/create" className='btn btn-success'>Ajouter</Link>
            <table className='table'>

                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Date</th>
                        <th>Service</th>
                        <th>Objet</th>
                    </tr>
                </thead>

                <tbody>
                     {data.map((item, index) => {

                        const date = new Date(parseInt(item.date))
                        const years = date.getFullYear()
                        const dateFormated = date.toLocaleString("fr-FR")

                        return (
                            <tr key={index}>
                                <td>{years}/{item.id}</td>
                                <td>{dateFormated}</td>
                                <td>{item.service}</td>
                                <td>{item.objet}</td>
                                <td>
                                    <Link to={`/update/${item.id}`} className='btn btn-primary mr-1'>Editer</Link>
                                    <button onClick={e => handleDelete(item.id)} className='btn btn-danger'>Supprimer</button>
                                </td>
                                
                            </tr>
                        )
                     }
                    )}
                </tbody>

            </table>
        </div>
        
    </div>
  )
}

export default Home