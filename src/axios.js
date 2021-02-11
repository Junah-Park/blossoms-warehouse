import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-blossoms-warehouse.cloudfunctions.net/api"
    // THE API (cloud function) URL
    // http://localhost:5001/blossoms-warehouse/us-central1/api
})

export default instance;