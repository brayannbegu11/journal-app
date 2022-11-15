import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'
import AuthLayout from '../layout/AuthLayout'

const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe tener más de 6 caracteres'],
  displayName: [(value) => value.length >= 5, 'El nombre es obligatorio'],
}

function RegisterPage() {
  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    console.log(!isFormValid)
    if(!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formState))
    console.log(formState)
  }
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error = {!!displayNameValid && formSubmitted}
              helperText = {displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error = {!!emailValid && formSubmitted}
              helperText = {emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error = {!!passwordValid && formSubmitted}
              helperText = {passwordValid}
            />
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={!!errorMessage ? '':'none'}>
                <Alert severity='error'>
                  {errorMessage}
                </Alert>
              </Grid>
              <Grid item xs={12}>
                <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
