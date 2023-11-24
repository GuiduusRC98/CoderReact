

const ItemCount = ({ stock, setCount, count}) => {
    const add = () => {
        if (count === stock) return;
        setCount(count + 1);
        
    }
    const rest = () => {
        if (count === 0) return;
        setCount(count - 1)
    }
    return (
        <div>
        <button onClick={rest}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
    );
};

export default ItemCount;