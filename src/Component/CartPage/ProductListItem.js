import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductListItem({ key, product, handleRemove, handleInput, handleAddMinus }) {


    return (
        <li className="productcart__listitem">
            <div className="productcart__title">
                <div className="productcart__image">
                    <img src={product.image} alt="" />
                </div>
                <Link to={`../product/${product.id}`}>
                    <div className="productcart__name">{product.title}</div>
                </Link>
            </div>

            <span className="productcart__quantity">
                <button onClick={() => handleAddMinus("+")}>
                    <FontAwesomeIcon icon="plus" />
                </button>
                <input id={key} value={product.quantity} type="number" onChange={handleInput} />
                <button onClick={() => handleAddMinus("-")}>
                    <FontAwesomeIcon icon="minus" />
                </button>
            </span>
            <span className="productcart__price">${product.price}</span>
            <span className="productcart__button">
                <button onClick={handleRemove}>
                    <FontAwesomeIcon icon="times" />
                </button>
            </span>
        </li>
    );
}
