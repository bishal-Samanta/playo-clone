



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

displayUi(data);

function displayUi(data){
    document.querySelector("#container").innerHTML = "";
    document.querySelector("#selected-location").textContent = data[0].location
    data.map((el)=>{
       // console.log(el)

        //Destructuring ob objects
        let { name, imgUrl,location ,rating , filter_by} = el;
       
        let iconLink = "https://playo-website.gumlet.net/icons/sh.jpeg?auto=compress,format&q=90";


        //Function for votes
        let votesCount = Math.floor(100 + Math.random() * 900);

        //Create Html Template
        let mainDiv = document.createElement("div");
        let mainImg = document.createElement("img");
        let nameDiv = document.createElement("div");
        let locationDiv = document.createElement("div");
        let playDiv = document.createElement("div");
        let lastDiv = document.createElement("div");
        let BookableDiv = document.createElement("div");
        let CovidDiv = document.createElement("div");
        let safeImg = document.createElement("img");
        let safeDiv = document.createElement("div");
        let ratingDiv = document.createElement("div");
        let votesDiv = document.createElement("div");

        //Set values for all div+
        mainImg.src = imgUrl;
        nameDiv.textContent = name;
        locationDiv.textContent = location;
        playDiv.textContent = filter_by[0];
        BookableDiv.textContent = "BOOKABLE";
        safeImg.src = iconLink;
        safeDiv.textContent = "Safe & Hygiene";
        ratingDiv.textContent = rating;
        votesDiv.textContent = `${votesCount} votes`

        //Append Properly
        CovidDiv.append(safeImg, safeDiv);
        lastDiv.append(BookableDiv, CovidDiv);
        mainDiv.append(mainImg, nameDiv, locationDiv, playDiv, lastDiv, ratingDiv, votesDiv);
        document.querySelector("#container").append(mainDiv);

        mainDiv.addEventListener("click", ()=>{
            window.location.href = "venueDetail.html";
            localStorage.setItem("singleVenueDetails", JSON.stringify(el));
            localStorage.setItem("votes", votesCount)
        })
        



    })
}




//Codr for filter function 

    //Selecting
    let div = document.querySelector(".change-color");
    let text = document.querySelector(".text");
    let applyBtn = document.querySelector("#apply-btn");
    let resetBtn = document.querySelector("#reset-btn");
    //var filter_value = "";

    //Code for reset button
    resetBtn.addEventListener("click", ()=>{
        displayUi(data);
        document.querySelector(".filterbox").style.visibility = "hidden";
    })



    //Code For badminton section
    document.querySelector("#badminton").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#badminton");
        let selectText = document.querySelector("#badminton")
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            let filter_value = "Badminton";
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })
   

    //Code For football section
    document.querySelector("#football").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#football");
        let selectText = document.querySelector("#text2")
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            let filter_value = "Football";
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })

    //Code For cRIcket
    document.querySelector("#cricket").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#cricket");
        let selectText = document.querySelector("#text3")
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            let filter_value = "Cricket";
            console.log(filter_value)
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })

    //Code For tennis
    document.querySelector("#tennis").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#tennis");
        let selectText = document.querySelector("#text4");
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            filter_value = "Tennis";
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })

     //Code For table tennis
     document.querySelector("#tabletennis").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#tabletennis");
        let selectText = document.querySelector("#text5");
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            filter_value = "Tabletennis";
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })

    //Basket Ball
    document.querySelector("#basketball").addEventListener("click", ()=>{
        let selectdiv = document.querySelector("#basketball");
        let selectText = document.querySelector("#text6");
        selectdiv.style.border = "2px solid #FE8D3F";
        selectText.style.color = "#FE8D3F";
        applyBtn.addEventListener("click", ()=>{
            filter_value = "Basketball";
            filterFunction(filter_value, selectdiv, selectText);
        })
        
    })











    //Main Function for filter
    function filterFunction(value, div, text){
        console.log(value);
        let filter_array = data.filter((el)=>{
            let array_value = el.filter_by[0];
            //console.log(array_value)
            if(array_value == value){
                return el;
            }
        })
        
        if(filter_array == undefined || filter_array == [] || filter_array.length == 0){
            document.querySelector(".filterbox").style.visibility = "hidden";
            div.style.border = "2px solid transparent";
            text.style.color = "black";
            let myData = [];
            displayUi(myData)
            return
        }


        console.log(filter_array)

        displayUi(filter_array)
        document.querySelector(".filterbox").style.visibility = "hidden";
        div.style.border = "2px solid transparent";
        text.style.color = "black";
    }

//Codr for filter function 