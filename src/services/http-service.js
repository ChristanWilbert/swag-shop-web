import 'whatwg-fetch';

class HttpService{
    getProducts = () => {
        fetch('http://localhost:3000/')
        .then(response=>{
            console.log(response.json());
        });
    }
}

export default HttpService;