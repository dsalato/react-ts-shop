import React, {useEffect, useState} from 'react';
import Product from "./components/Product";
import ProductModal from "./components/ProductModal";
import {IProduct} from "./models";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [product, setProduct] = useState<IProduct>()
    const [modal, setModal] = useState(false);

    const viewModal = (product: IProduct) => {
        setModal(!modal);
        setProduct(product);
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const {data} = await axios.get<IProduct[]>(`https://fakestoreapi.com/products`);
                setProducts(data);

            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
    }, [])

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {products?.map((el) => (
                <Product viewModal={viewModal} product={el} key={el.id}/>
            ))}
            {modal && product && <ProductModal setModal={setModal} product={product}/>}

        </div>
    );
}

export default App;
