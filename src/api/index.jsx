import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-centrall-ss-devops.cloudfunctions.net",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

///rand?min=1&max=300