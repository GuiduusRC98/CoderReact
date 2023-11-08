import './itemdetails.css'

const ItemDetail = ({ itemSelected }) => {
    return (
        <div>
            <h6 className="card-title">{itemSelected?.title}</h6>
            <img src={itemSelected?.image} alt={itemSelected?.title} width={70}/>
            <div className="card-description">
                <p>{itemSelected?.description}</p>
                <p>${itemSelected?.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail; 