import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
// Para obligar a poner los componentes en <AddCategory />
import PropTypes from 'prop-types'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories );

    // const handleAdd = () => {
    //     setCategories(['1ºHunterXHunter', ...categories, '2ºHunterXHunter']);
    //     // setCategories(cats=>[...cats,'NuevoPersonaje']);
    // }

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>



        </>
    )



}

// Para obligar a poner los componentes en <AddCategory />
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default GifExpertApp;