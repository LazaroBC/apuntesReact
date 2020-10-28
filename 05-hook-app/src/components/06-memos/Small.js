import React from 'react'

// El memo se utiliza para evitar que se vuelva a llamar una función al volver a renderizar el componente
export const Small = React.memo(({ value }) => {
    console.log('Me volví a llamar ;(')
    return (
        <small>
            {value}
        </small>
    )
}
);
