import React, { Fragment, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

export const Contador = () =>{
    const [conteo, setConteo] = useState(0);

    const handleCuenta = () => {
        setConteo(conteo + 1);
    };

    return(
        <>
            <h1>Contador</h1>
            <Button 
                color="primary" 
                onClick={handleCuenta}
                variant="contained"
            > 
                Haz click acá
            </Button>
            <p> Has clickeado {conteo} veces</p>
        </>

    );

}