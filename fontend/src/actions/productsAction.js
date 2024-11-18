import axios from 'axios'
import { productsFail, productsRequests, productsSuccess } from '../slices/productsSlice'
import { productFail, productRequests, productSuccess } from '../slices/productSlice'
export const getProducts=(keyword,low,high)=>async(dispatch)=>{
    try {
        dispatch(productsRequests())
        let link='http://127.0.0.1:8000/praveen/products'
        if(keyword){
            link+=`?keyword=${keyword}`
        }
        if(low){
            link+=`?price[gte]=${low}&price[lte]=${high}`
        }
        const {data}=await axios.get(link)
        dispatch(productsSuccess(data))
    } catch (error) {
        dispatch(productsFail(error.response.data.message))
        
    }

}

export const allproducts=()=>async(dispatch)=>{
    try {
        dispatch(productsRequests())
        
        const {data}=await axios.get('http://127.0.0.1:8000/praveen/all')
        if(!data){
            console.log("not receievd")
        }
        dispatch(productsSuccess(data))
    } catch (error) {
        dispatch(productsFail(error.response.data.message))
        
    }

}



export const getProduct=id=>async(dispatch)=>{
    try {
        dispatch(productRequests())
        const {data}=await axios.get(`/praveen/product/${id}`)
        dispatch(productSuccess(data))
    } catch (error) {
        dispatch(productFail(error.response.data.message))
        
    }

}