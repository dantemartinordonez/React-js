
export const getData = (url) => 
    fetch(url)
    .then(Response => Response.json())
    .then (data =>  data)
    .catch (error => console.log(error))