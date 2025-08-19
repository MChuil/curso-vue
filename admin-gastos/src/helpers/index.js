export const formatearMoneda = (cantidad)=>{
    return  Number(cantidad).toLocaleString('es-US', {
        style:'currency',
        currency: "USD"
    });
}

