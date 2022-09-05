// XHR = XML HTTP REQUEST
const URL="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);
// step 1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange=function(){
//     // console.log(xhr.readyState);
//     if(xhr,this.readyState===4){
//         console.log(xhr);
//         (response);
//         // console.log(data)
//     }
// }
xhr.onload=function(){
    // console.log(xhr.readyState)
    const response=xhr.response;
    const data=JSON.parse(response);
    console.log(data);
}
xhr.send();