const URL="https://jsonplaceholder.typicode.com/posts";
function sendRequest(method,url){
    return new Promise(function(resolve,reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response)
            }
            else{
                reject(new Error("Something went wrong"))
            }
        }
        xhr.onerror=function(){
            reject(new Error("Something went wrong"))
        }
        xhr.send();
    })
}
sendRequest("GET",URL)
.then(response =>{
    // console.log(response);
    const data=JSON.parse(response);
    // console.log(data);
    return data;
})
.then(data=>{
    const id=data[3].id;
    // console.log(id);
    return id;
})
.then(id=>{
    const url=`${URL}/${id}`;
    return sendRequest("GET",url);

})
.then(response=>{
    // console.log(response);

    const newData=JSON.parse(response);
    console.log(newData);
})
.catch(reject=>{
    console.log(reject);
})