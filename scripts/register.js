//obj literal
let salon = {
    name:"The fashion pet",
    address:{
        street:"Palm",
        number:"262",
        zip:"22117"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[
        {
            name:"Scooby",
            age:70
        },
        {
            name:"Scrappy",
            age:60
        }
    ]
}

//creating the funtion
function dislpayInfo(){
    document.getElementById("pets").innerHTML=`Welcome to ${salon.name} ..... close at ${salon.hours.close}`;
}
//call/run/execute
dislpayInfo();

function displayPetNames(){
    console.log(salon.pets[0].name);
    console.log(salon.pets[1].name);
}
displayPetNames();