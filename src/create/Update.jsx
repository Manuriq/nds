import axios from 'axios'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {
    const [service, setService] = React.useState('')
    const [objet, setObjet] = React.useState('')

    const { id } = useParams()
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        axios.put(`http://localhost:8081/api/update/${id}`, {
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
                <h1 className='mb-3'>Modifier une note de service</h1>
                <div className='mb-3'>
                    <label htmlFor='service' className='form-label'>Service</label>
                    <input type='text' className='form-control' id='service' onChange={e => setService(e.target.value) } />
                </div>
                <div className='mb-3'>
                    <label htmlFor='objet' className='form-label'>Objet</label>
                    <input type='text' className='form-control' id='objet' onChange={e => setObjet(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary'>Editer</button>
                <Link to='/' className='btn btn-danger ms-3'>Annuler</Link>
            </form>
        </div>
    </div>
  )
}

export default Update