import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // * Forma importando la funcion del useState setCategories del parent component
        // setCategories((categ)=> [inputValue,... categ])

        // *Forma importando una funcion que tenga todo el proceso ya realizado de la actualizacion del estado del useStade "setCategories" del parent component 
        onNewCategory(inputValue.trim());

        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
    )
}
