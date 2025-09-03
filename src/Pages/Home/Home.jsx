import React from 'react'
import { Button } from '@mui/material'
import { useAuth } from '../../Auth/useAuth'

const Home = () => {
  const [show,setShow] = React.useState(false)
  const {isAuthenticated}=useAuth()


  return (
 <>

 </>
  )
}

export default Home