export const checker = (usuarios, usuario) =>{
    let bandera = false
    const {email, contraseña} = usuario
    usuarios.forEach((us)=>{
        if(us.email === email){
            if(us.contraseña1 === contraseña){
                bandera = {email: us.email, nombre: us.nombre, apellido: us.apellido, telefono: us.telefono}
            }
        }

    })
    return(bandera)
}
