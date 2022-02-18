import { navigate } from '@reach/router'
import React, { useEffect, useState } from 'react'
import UseUsers from '../hooks/UseUsers'
import {Formik,Form,Field,ErrorMessage} from 'formik' 
import ServiceRegister from '../service/ServiceRegister'


const validFiled = (values) =>{
      
        const errors = {};

        if(!values.username){
            errors.username ='requerido'
        }

        if(values.password.length <3){
            errors.password ='min length 3'
        }

        return errors
       
}   


    const initialvalues = {
         username: '', password: '' 
        }



const Register =() =>{
    //const [username,setUsername] = useState()
    //const [password,setPassword] = useState()
    //const {isLoginLoading,isLoginError} = UseUsers()
    
    //const isValid =  username  !=null && username.trim().length>0

    const [register,setRegister] = useState(false)

    if(register) return <h1>congrulation register </h1>
    return (
        <>  
        <Formik
            initialValues={initialvalues}
            validate={validFiled}
            onSubmit={(values,{ setFieldError,setSubmitting}) => {
            ServiceRegister(values).then(index=>{
                 setSubmitting(true)
                 setRegister(true)
                console.log(index)
            }) .catch(() =>{
                setFieldError('username','is valid')
                console.error('no esta aqui')
                setTimeout(() =>{
                    setSubmitting(false)
                },4000)
            })
      
      }
    }>

                 {({values,errors,isSubmitting}) => (
                <Form>
                    <Field
                        className={errors.username ? 'error' :''}
                        name="username"
                        value={values.username}
                    />
                    <ErrorMessage name='username' component='small' />

                    <Field
                        className={errors.password? 'error' :''}
                        name="password"
                        value={values.password}
                    />
                     <ErrorMessage name='password'  component='small'  />
                    <button type='submit' disabled={isSubmitting}>register </button>
                </Form>
        )}
     </Formik>  
    </>
    )
}

export default Register