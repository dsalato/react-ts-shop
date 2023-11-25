import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {IProduct} from "../../models";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const {data} = await axios.get<IProduct[]>(`https://fakestoreapi.com/products`);
        console.log(1);

        return data as IProduct[];
    }
)

interface ProductSliceState {
    products: IProduct[],
}

const initialState: ProductSliceState = {
    products: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
    },
})

// export const { } = productSlice.actions

export default productSlice.reducer