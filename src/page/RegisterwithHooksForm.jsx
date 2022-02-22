import React,{useState} from 'react'
import ServiceRegister from '../service/ServiceRegister'
import { useForm,ErrorMessage } from 'react-hook-form'

const RegisterWithForm =() =>{

    const {handleSubmit, register, errors} = useForm()
    const [registed,setRegisted] = useState(false)
    const [isSubmitting,setIsSubmitting] =useState(false)

     const  onSubmit =(values) =>{
        setIsSubmitting(true)
        ServiceRegister(values).then(() =>{
            setIsSubmitting(false)
            setRegisted(true)
        })

     }
     if(registed){
         return <h1>congrulations you ve been seccessfull y registered</h1>
     }
    return (
        <div>
            <h1>register</h1>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input
                className={errors.username ? 'error' : ''}
                name="username"
                placeholder="Put here the username"
                ref={register({ required: 'This is required',
                    min:4
                 })}
              
            />
               <ErrorMessage errors={errors} name='username' />
            <input
                className={errors.password ? 'error' : ''}
                name="password"
                placeholder="Put here the password"
                ref={register({ required: 'This is required' })}
                type='password'
            />
        

        <button className="btn" disabled={isSubmitting}>
          Registrarse
        </button>
      </form>
        </div>
    )
}

export default RegisterWithForm