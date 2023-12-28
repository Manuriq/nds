import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [service, setService] = React.useState('')
    const [objet, setObjet] = React.useState('')

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        axios.post('http://localhost:8081/api/create', {
            service,
            objet
        })
        .then(res => {
            console.log("navigate")
            navigate('/')
            setService('')
            setObjet('')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h1 className='mb-3'>Ajouter une note de service</h1>
                <div className='mb-3'>
                    <label htmlFor='service' className='form-label'>Service</label>
                    <input type='text' className='form-control' id='service' onChange={e => setService(e.target.value) } />
                </div>
                <div className='mb-3'>
                    <label htmlFor='objet' className='form-label'>Objet</label>
                    <input type='text' className='form-control' id='objet' onChange={e => setObjet(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Ajouter</button>
                <Link to='/' className='btn btn-danger ms-3'>Annuler</Link>
            </form>
        </div>
    </div>
  )
}

export default Create