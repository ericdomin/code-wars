/*Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.*/
function divCon(x){
    return x.filter((nums)=>typeof nums =='number').reduce((a,b)=>a+b,0) - x.filter((str)=>typeof str=='string').map(Number).reduce((a,b)=>a+b,0)
    }