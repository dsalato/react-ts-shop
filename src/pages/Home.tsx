import React, {useEffect, useState} from 'react';
import Product from "../components/Product";
import ProductModal from "../components/ProductModal";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {IProduct} from "../models";
import {fetchProducts} from "../redux/slices/productSlice";

const Home: React.FC = () => {
    const {products} = useAppSelector((state) => state.product);
    const dispatch = useAppDispatch();

    const [product, setProduct] = useState<IProduct>();
    const [modal, setModal] = useState(false);

    const viewModal = (product: IProduct) => {
        setModal(!modal);
        setProduct(product);
    }

    const getProducts = async () => {
        dispatch(fetchProducts());
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {products?.map((el) => (
                <Product viewModal={viewModal} product={el} key={el.id}/>
            ))}
            {modal && product && <ProductModal setModal={setModal} product={product}/>}

        </div>
    );
};

export default Home;
