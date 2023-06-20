export const createUser = (data) => {
    return axios.put("https://covid19.devtest.ge/api/create" + data)
}