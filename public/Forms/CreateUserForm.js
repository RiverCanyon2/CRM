import {FormControl, TextField, Typography, InputAdornment, Container, InputLabel, Select, MenuItem, Box} from '@mui/material'
import { IconButton, Visibility, VisibilityOff } from '@mui/icons-material'
import SubmitButton from '../Components/SubmitButton'
import { useState } from 'react'

const CreateUserForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserInfo({
      first: '',
      last: '',
      email: '',
      profile: '',
      tempPw: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInfo(userInfo => ({
      ...userInfo,
      [name]: value
    }))
  }

  const [ showPassword, setShowPassword ] = useState(false)
  const [ userInfo, setUserInfo ] = useState({
    first: '',
    last: '',
    email: '',
    profile: '',
    tempPw: ''
  })

  return (
    <Container maxWidth="xl">
      <Typography variant={'h3'} align='center' sx={{mt: 2}}>
        Create New User
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete='off'
        sx={{width: '80vw', mx: 'auto'}}
        onSubmit={handleSubmit}
      >
          <TextField 
            label="First Name" 
            variant="outlined" 
            sx={{m: 2}} 
            fullWidth 
            value={ userInfo.first }
            name='first'
            onChange={handleChange}
            />
          <TextField 
            label="Last Name" 
            variant="outlined" 
            sx={{m: 2}} 
            fullWidth
            value={ userInfo.last}
            onChange={handleChange}
            name='last'
            />
          <TextField 
            label="Email" 
            type="email" 
            variant="outlined" 
            sx={{m: 2}} 
            fullWidth
            value={userInfo.email}
            onChange={handleChange}
            name='email'
            />
          <FormControl 
            sx={{m: 2}} 
            fullWidth
          >
            <InputLabel>Profile</InputLabel>
            <Select
              value={userInfo.profile}
              name='profile'
              label="profile" 
              onChange={handleChange}
            >
              <MenuItem value={"Admin"} >Admin</MenuItem>
              <MenuItem value={"Standard"} >Standard</MenuItem>
            </Select>
          </FormControl>
          <TextField 
            label="Temporary Password" 
            type="password" 
            variant="outlined" 
            sx={{m: 2}} 
            fullWidth
            value={userInfo.tempPw}
            onChange={handleChange}
            name='tempPw'
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={e => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
          <SubmitButton />
      </Box>
    </Container>
  )
}

export default CreateUserForm