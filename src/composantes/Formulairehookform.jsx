import React from 'react'
import { useForm } from 'react-hook-form'

const Formulairehookform = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    } =useForm()
    const onSubmit=(data) => {
        console.log(data);

    }
  return (
    <div className='container mt-5 shadow p-3'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <input type="text" className="form-control" placeholder='Nom Complet'
            {...register("nom",{required :"Nom obligatoire"})}
            />
            {errors.nom &&  <p> {errors.nom.message} </p> }
           
            </div>
            
            <div className="mb-3">
            <input type="email" className="form-control" placeholder='Email' 
            {...register("email",{required :"Email obligatoire"})}
            />
             {errors.email &&  <p> {errors.email.message} </p> }
              
            </div>
            <div className="mb-3">
            <input type="password" className="form-control" placeholder='Mot de passe' 
            {...register("password",
            {
                required :"Mot de passe obligatoire",
                minLength :{
                    value:6,
                    message:"Minimum 6 caractères"
                }
        
        
             })}
            />
             {errors.password &&  <p> {errors.password.message} </p> }
              
            </div>
            <button type='submit' className="btn btn-primary w-100">
                Envoyer
            </button>
        </form>

    </div>
  )
}

export default Formulairehookform