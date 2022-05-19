
//setTimeout + closure


const boardingPassengers = (n,wait) => {
    const peopleperGroup = n/3;

    setTimeout(() => {
        console.log(`boarding ${n} number of passengers`);
        console.log(`boarding ${peopleperGroup} people pre value`);
        console.log("boarding in secs", wait);
    }, wait*1000);
};


boardingPassengers(180,2);


//Jquery -Js library which provides effective method for doing something in frontend and gives essential features like DOM manipulation, AJAX interaction and so on.....

$("button").click(function(){
    // $("p").hide();
    // $("p").toggle();
    // $("#learn").toggle();
     // $("#learn").hide();
    // $(".touch").toggle();
    $(".touch").hide();

})

// $("#hide").click(function(){
//     $("#learn").hide();
// })