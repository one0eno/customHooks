
import React, { useState } from "react";


export default function useForm({initialState = {}}){

    //const [formValues, setFormValues ] = useState(initialState)
    const [formValues, setFormValues ] = useState(initialState)
    const reset = () => {
      
        setFormValues({description:''})
    }

    const handleInputChange = ({target}) =>{

        setFormValues({
            ...formValues,
            [target.name] : target.value
           
        })
    }

    return [formValues, handleInputChange, reset]
}