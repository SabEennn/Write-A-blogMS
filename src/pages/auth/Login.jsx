import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'
import statuses from '../../../globals/status/statuses'

const Login = () => {
  const {user,status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
 const handleLogin = (data)=>{
  dispatch(login(data))

 }

 useEffect(()=>{
  
  if(status === statuses.SUCCESS){
     navigate('/')
     dispatch(setStatus(null))
  }
 },[status])
  return (
  <Form type='Login' user={user} onSubmit={handleLogin} />
  )
}

export default Login