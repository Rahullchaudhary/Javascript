const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.onload=function(){
    // console.log(xhr.readyState)
    if(xhr.status>=200 && xhr.status<300){
        const response=xhr.response;
        const data=JSON.parse(response);
        console.log(data);
    }
    else{
        console.log("Something went wrong!!")
    }
    
}
xhr.onerror=()=>{
    console.log("Network error")
}
xhr.send();