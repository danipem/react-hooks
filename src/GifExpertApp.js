import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['doraemon', 'nobita', 'cacota']
    const [categories, setCategories] = useState(['Doraemon']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'el cuarto de la fila'] );
    //     // setCategories( [ 'el primero de la fila', ...categories] );
    // }


    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            {/* <button onClick={handleAdd}>Añadir</button> */}

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>

        </div>
    )
}

export default GifExpertApp