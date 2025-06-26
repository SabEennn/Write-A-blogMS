import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'
import statuses from '../../../globals/status/statuses'
import toast from 'react-hot-toast'

const Login = () => {
  const {user,status,token} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
 const handleLogin = (data)=>{
  dispatch(login(data))

 }

 useEffect(()=>{
  
  if(status === statuses.SUCCESS){
    localStorage.setItem('jwt',token)
    toast.success('login successful')
    navigate('/')
    dispatch(setStatus(null))
  }
  if(status === statuses.ERROR){
    toast.error('Either mail or passoword is incorrect')
  }
 },[status])
  return (
  <Form type='login' user={user} onSubmit={handleLogin} />
  )
}

export default Login