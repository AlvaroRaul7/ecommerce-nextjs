import axios from "axios";

const getProducts = async () => {

    try{
        const response = await axios.get("http://3.82.145.167:49160/product");
        console.log(response.data)
        return response.data;


    }catch(err){
        console.log(err);
    }
}

// const getProductById = async (id) => {

//     try
// }

export default getProducts;