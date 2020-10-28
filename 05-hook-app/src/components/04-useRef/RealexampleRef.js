import React, { useState } from 'react'
import { MultipleCustomHoks } from '../03-examples/MultipleCustomHoks'

export const RealexampleRef = () => {


    const [show, setShow] = useState(false)
    return (
        <div className="container">
            <h1>Real Example Ref</h1>
            <hr />

            {show && <MultipleCustomHoks />}

            <button
                className="btn btn-primary mt-5"
                onClick= {() => {
                    setShow(!show);
                }}
                >
                    Mostrar / Ocultar
            </button>
        </div>
    )
}
