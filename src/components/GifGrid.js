import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem'
// import getGifs from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const {data:images , loading} = useFetchGifs( category )

    // useEffect(() => {
    //     getGifs( category ).then(setImages)
    // }, []) // con esto se consigue que se ejecute la funcion getgifs solamente la primera vez que se renderiza



    return (
        <Fragment>
            <h3>{category}</h3>

           {loading && <p>loading</p>}

            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        {...img} />
                ))
            }

        </Fragment>
    )
}

export default GifGrid