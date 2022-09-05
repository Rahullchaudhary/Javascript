const URL="https://jsonplaceholder.typicode.com/posts";
async function getpost(){
  const response=  await fetch(URL);
 const data= await response.json()
    console.log(data)
}
getpost()
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})
// 


// fetch(URL)
// .then(response=> response.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch!!")
//     console.log(error)
// })