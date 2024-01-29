
export const useValidations =(user)=>{

  const validateRegister = () => {
    if (user.email === '') {
      throw new Error("¡No ingreso el email!");
    }
    if (user.pws === '') {
      throw new Error("¡No ingreso la contraseña!");
    }
    if (user.pwsConfirm === '') {
      throw new Error("¡No confirmo la contraseña!");
    }
    if (user.pwsConfirm !== user.pws) {
      throw new Error("¡Las contraseñas no coinciden!");
    }
    return {
      email: user.email,
      pws: user.pws
    }
  }
  const validateLogin =()=>{
    if (user.email === '') {
      throw new Error(`Falta ingresar el email.`)
    }
    if (user.pws === '') {
      throw new Error(`Falta ingresar la contraseña.`)
    }
    return{
      email:user.email,
      pws:user.pws
    }
  }
  return{
    validateRegister,
    validateLogin
  }
}