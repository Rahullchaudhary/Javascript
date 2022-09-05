const URL="https://jsonplaceholder.typicode.com/posts";
fetch(URL)
.then(response=>{
    // console.log(response)
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("Something went wrong")
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("inside catch!!")
    console.log(error)
})