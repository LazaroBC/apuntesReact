import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


export const MemoHook = () => {


    const { counter, increment } = useCounter(2000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (

        <div className="container">
            <h1>
                Memo Hook
            </h1>
            <hr />
            <p> {memoProcesoPesado}</p>
            <h3>
                Counter:  <small>{counter}</small>
            </h3>
            <hr />
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show / Hide {JSON.stringify(show)}
            </button>
        </div>
    );
};
