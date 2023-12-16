export const control = (data, usuarios)=>{
    const { email, contraseña1, contraseña2 } = data;
    const tipos = [];
    usuarios.forEach(user =>{
        if(email === user.email){
            tipos.push('El mail ingresado ya esta en uso');
        }
    })
    if(contraseña1 !== contraseña2){
        tipos.push('Las contraseñas no coinciden')
    }
    if((contraseña1.length < 8 || contraseña1.length > 15) || (contraseña2.lenght < 8 || contraseña2.length > 15)){
        tipos.push('Contraseñas fuera de rango')
    }
    else{
        return true
    }
    return tipos
}


