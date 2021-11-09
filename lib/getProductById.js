
import axios from "axios";


const getProductById = async (id) => {

    try{
        const response = await axios.get("http://3.82.145.167:49160/product/" + id);
        console.log(response.data)
        return response.data;


    }catch(err){
        console.log(err);
    }
}