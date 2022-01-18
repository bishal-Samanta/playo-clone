

   
    

    
    
//Working on quotes api call
    
    //let quoteUrl = "https://bodybuilding-quotes1.p.rapidapi.com/random-quote";
    // fetch(quoteUrl, {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-host": "bodybuilding-quotes1.p.rapidapi.com",
	// 	"x-rapidapi-key": "a867a75115msh062cacb248defc3p1037f9jsnb868cbef939c"
	// }
    // })
    // .then((res)=>{
    //     return res.json()
    // })
    // .then((res)=>{
    //     console.log(res);
    //     let quote = document.querySelector("#quote");
    //     let value = res.quote;
    //     quote.textContent = value;
    // })

//Done with quotes api quotes api call




// By Clicking static blog content
    document.querySelector("#first-blog").addEventListener("click", ()=>{
       
        window.open("https://blog.playo.co/humansofplayo-how-to-submit-a-story/" , '_blank');
    })

    document.querySelector("#sec-blog").addEventListener("click", ()=>{
        
        window.open("https://blog.playo.co/guidelines-to-playsafe-in-the-times-of-covid-19/" , '_blank');

    })


// By Clicking static blog content End


//Api call for news content start
    import appendNews from "../components/appendnews.js";
    import apiCall from "../components/apicall.js";

    //let bloglink = "https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=10&apiKey=b140754e118c4b63a8e580772d4446a1";
    let response = apiCall(bloglink);
    response.then((res)=>{
        console.log(res.articles);
        let appendlocation = document.querySelector(".dynamic-news");
        appendNews(res.articles, appendlocation);

    })
    .catch((e)=>{
        console.log(e);
    })








// Api call for news content end




