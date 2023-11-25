import React from "react";
import {IProduct} from "../models";

interface productProps {
    product: IProduct;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal: React.FC<productProps> = ({product, setModal}) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50'>
            <div className="w-1/2 bg-white p-4 rounded shadow-md relative">
                <span onClick={() => setModal(false)} className='absolute top-2 right-5 text-3xl cursor-pointer'>&#215;</span>
                <img className='w-1/6 mx-auto' src={product.image} alt={product.title}/>
                <div className='p-6'>
                    <h1>{product.title}</h1>
                    <span>{product.rating.rate}&#9733; - {product.rating.count} оценили</span>
                    <p className='py-2'>{product.price}&#8381;</p>
                    <p className='pb-5'>{product.description}</p>
                    <p>{product.category}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductModal;