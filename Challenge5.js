// for(var i=1;i<10;i+=2)
// {
//     console.log(i);
// }

// for(var i=1;i<12;i++)
// {
//     if(i%2!=0)
//     {
//     console.log(i);
//     }
// }

const object ={ a:1,b:2,c:3}

for(var key in object)
{
    console.log(key+':'+object[key]);
}

for(var key in object)
{
    console.log(object[key]);
}