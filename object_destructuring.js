const band={bandname:"led zeplin",famousSong:"stairway to heaven",
year:2000,
actor:"Rahul"};
// const {bandname,famousSong}=band;
const {bandname:var1,famousSong:var2,...rs}=band;

// console.log(bandname);
// console.log(famousSong);
console.log(rs);
console.log(var2);