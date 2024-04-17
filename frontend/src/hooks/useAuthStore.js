import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice'
import axios from 'axios'
import { useNavigate } from 'react-router'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.authState);

  const dispatch = useDispatch()

  const navigateTo =useNavigate();

  const startLogin = async ({ email, contraseña }) => {

    dispatch(onChecking())
    console.log('startLogin')
    
    console.log( 'estado inicial:  ', status, user, errorMessage);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        contraseña
      })

      console.log(data)

      const timeToExpire = new Date()

      // d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
      timeToExpire.setTime(timeToExpire.getTime() + 1000 * 60 * 60 * 12)

      let expires = 'expires=' + timeToExpire.toUTCString()

      document.cookie = `token=${data.token}; ${expires};`

      localStorage.setItem('token', data.token)
      console.log(data.token)

      localStorage.setItem('token-init-date', new Date().getTime())

      localStorage.setItem('user', JSON.stringify(data.user))
      console.log(data.user)
      dispatch(onLogin(data.user))
      Swal.fire({
        title: "<strong>Bienvenido</strong>",
        icon: "info",
        html: `
          <h2>${data.user.firstName}  ${data.user.lastName}</h2>
        `,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Aceptar
        `,
        confirmButtonAriaLabel: "Aceptar",
       
      });
      
      if(data?.user?.rol =='CLIENT'){
        navigateTo(`/homeclient`)
      }
    } catch (error) {
      console.log(error) 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email o contraseña invalidos'
      })
      console.log('Error en la autenticación', error.response.data?.details, 'error')
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
      console.log(error)
      console.log( 'estado :  ', status, user, errorMessage);

    }
  }

  const checkAuthToken = async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.log('Token no encontrado. Ejecutando onLogout...');
        dispatch(onLogout());
      } else {
        console.log('Token encontrado. Ejecutando lógica adicional...');
        // Lógica adicional si es necesario cuando hay un token
        // ...
      }
    } catch (error) {
      // Manejar cualquier error aquí
      console.error('Error al verificar el token:', error);
    }
  };
  return {
    status,
    user,
    errorMessage,
    checkAuthToken,
    startLogin,
  }
}
