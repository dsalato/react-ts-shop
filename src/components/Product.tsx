import {IProduct} from "../models";
import React from "react";

interface productProps {
    product: IProduct
    viewModal: (product: IProduct) => void
}

const Product: React.FC<productProps> = ({product, viewModal}) => {
    return (
        <div onClick={() => viewModal(product)} className="border py-2 px-4 rounded flex flex-col items-center mb-2 cursor-pointer">
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <h5>{product.title}</h5>
            <p className='font-bold'>{product.price}</p>
        </div>
    )
}

export default Product;