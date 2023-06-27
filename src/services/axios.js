import axios from "axios";

export const createUser = (data) => {
    return axios.post("https://covid19.devtest.ge/api/create", data);
};