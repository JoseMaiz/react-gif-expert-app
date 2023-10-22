import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ "Drangon ball"]);

  const onAddCategory = (newCategory)=>{
    
    const validarCategories = categories.includes(newCategory);
    if (validarCategories) return;

    //* Primera solucción
    // setCategories(categories.concat("Valorant"));
    // *Segunda solucción
    setCategories([ newCategory ,...categories ]);
  }


  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        // *Manera importando la funcion del useState set setCategories 
        // setCategories = {setCategories}

        // * Manera importando una funcion normal que haga toda la modificacion del useState setCategories en el parent component
        onNewCategory = {(value) => onAddCategory(value)}
      />

      {categories.map(category =>(
          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }

    </>
  )
}


