import { GifItem } from "./GifItem";

import { useFetchGitfs } from "../hooks/useFetchGitfs";

export const GifGrid = ({category}) => {

    
    const {images, isLoading} = useFetchGitfs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                // * Manera mas corta del condicionante para que ponga cargando...
                isLoading && (<h2>Cargando...</h2>) 
            }
            <div className="card-grid">
                {images.map((image) =>(
                    
                    <GifItem 
                    
                        key={image.id}
                        {... image}

                    />
                ))}
            </div>
        </>
    )
}
