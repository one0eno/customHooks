
import React, { useEffect,useState,useRef } from "react";

export default function useFetch(url)
{
    const isMounted = useRef(true)
    const [dataset, setData] = useState({data:null, loading:true, error:null})

    useEffect(() => {
      return () => {
          isMounted.current = false
      }   
    }, []);

    useEffect(() => {

        setData({data:null, loading:true, error:null})
        
      
        fetch(url)
        .then(resp => resp.json())
        .then(data => {

            if (isMounted.current)
            {
                setData({
                    loading:false,
                    error:null,
                    data
                })
            }else{
                console.log('setData no se ha llamado no hay que montarlo ya que genera un error cuando el componente no está montaod')
            }
         
        })
    }, [url]);
 

    return dataset
}