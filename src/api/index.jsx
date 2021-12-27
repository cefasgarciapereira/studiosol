import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.random.org/integers",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

///rand?min=1&max=300