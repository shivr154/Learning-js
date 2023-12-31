let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());// starts from 0(jan)
console.log(newDate.getDay());// starts from Monday

` ${newDate. getDay()} and the date`

newDate.toLocaleString('default',{
    // ctrl+space to get suggestions
    weekday :"long",
    // hour12 : 
})