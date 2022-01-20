




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
        ratingDiv.textContent = rating;
        votesDiv.textContent = `${votesCount} votes`

        //Append Properly
        CovidDiv.append(safeImg, safeDiv);
        lastDiv.append(BookableDiv, CovidDiv);
        mainDiv.append(mainImg, nameDiv, locationDiv, playDiv, lastDiv, ratingDiv, votesDiv);
        document.querySelector("#container").append(mainDiv);
        



    })
}



