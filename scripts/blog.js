

    //Import api call Function Components
    import apiCall from "../components/apicall.js";

    
    
//Working on quotes api call
    
    //let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
    fetch(quoteUrl, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
		"x-rapidapi-key": "a867a75115msh062cacb248defc3p1037f9jsnb868cbef939c"
	}
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
        let quote = document.querySelector("#quote");
        let value = res.quote;
        quote.textContent = value;
    })

//Done with quotes api quotes api call


