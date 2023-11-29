import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const restar = () => {

        count > initial && setCount(count - 1);
    };

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };


    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>

            <div>
                <Button variant="primary" className="add-btn" onClick={() => onAdd(count)}>
                    Añadir al carrito
                </Button>
            </div>
        </div>
    );
};

export default ItemCount;
