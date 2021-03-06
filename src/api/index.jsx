/*
Esta é a configuração de uma instancia axios,
para uso da API.
*/

import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-ss-devops.cloudfunctions.net",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;