import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
            ' Client-ID ed9cb5e90652b5e1836848b8726819c792dc70da3baf0f752f757ab9582daa98'
    }
});