




//Filter Products

//On clicking appear an reappear of div
document.querySelector(".filterbox").style.visibility = "hidden";
document.querySelector(".filter").addEventListener("click", first);

function first(){
    document.querySelector(".filterbox").style.visibility = "visible";
    this.removeEventListener("click", first);

    document.querySelector(".filter").addEventListener("click", ()=>{
        document.querySelector(".filterbox").style.visibility = "hidden";
        
        document.querySelector(".filter").addEventListener("click", first);

    })
}

//On clicking appear an reappear of div



//Append with the data
let data = JSON.parse(localStorage.getItem("venueDetails"))
console.log(data)

//displayUi(data);

function displayUi(data){
    data.map((el)=>{
       // console.log(el)

        //Destructuring ob objects
        let { name, } = el;



    })
}



