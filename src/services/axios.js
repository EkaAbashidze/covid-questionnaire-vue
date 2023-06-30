import axios from "axios";

export const createUser = (data) => {
    const filteredData = Object.entries(data).reduce((filteredObj, [key, value]) => {
        if (value !== '' && value !== null) {
            filteredObj[key] = value;
        }
        return filteredObj;
    }, {});

    return axios.post("https://covid19.devtest.ge/api/create", filteredData);
};