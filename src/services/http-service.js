import 'whatwg-fetch';

class HttpService{
    
    getProducts = () => {
        var promise = new Promise((resolve,error)=>{

        
        fetch('http://localhost:3000/')
        .then(response=>{
            resolve(response.json());
        });
    })
    return promise;
    }
}

export default HttpService;