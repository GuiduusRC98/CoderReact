import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import ItemDetail from '../Item/ItemDetail';
import {useParams} from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/ConfigFirebase';


const ItemDetailContainer = () => {
    const [details, setDetails] = useState()
    const {id} = useParams()
    
    useEffect(() => {
        const products = doc(db, "products", `${id}`);
        getDoc(products).then((snapshot) => {
          if (snapshot.exists()) {
            setDetails({
                id: snapshot.id,
                ...snapshot.data(),
              })
        }
        });
    }, [])

  return (
    <div>
        {!details ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : <ItemDetail details={details}/>
        }
    </div>
  )
}

export default ItemDetailContainer