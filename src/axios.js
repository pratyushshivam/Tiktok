import axios from "axios"
const instance = axios.create({
    baseURL:"https://ejarvis.herokuapp.com/"
});
export default instance;