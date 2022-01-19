

//Filtering array of objects from the data base start (With Debouncing Feature)

//=======================================================================>

    //Selectiong Html Content

    let inputTag = document.querySelector("#search");
    let showDiv = document.querySelector("#show-results-div");


    // //Adding Event Listener
    // inputTag.addEventListener("input", ()=>{
    //     //Getting the value of input 
    //     let value = inputTag.value;

    //     //Dont Implement anything if length is less than equal to 2
    //     if(value.length <= 2){
    //         return false;
    //     }

    //     //Run Search Function
    //     searchLocation();

    // })


    //Search Function Code 
    async function searchLocation(){
        //Getting the value again
        var search_value = inputTag.value;


        if(search_value.length <= 2 || search_value == ""){
            return false;
        }


        let response = await fetch("../database/bookvenue.json");
        let data = await response.json();
        //console.log(data);

        //Writing Function for filter data based on search results

        let filterData = data.filter((el)=>{
            let regex = new RegExp(`^${search_value}`, "gi" );
            return el.location.match(regex) || el.name.match(regex);
        })

        console.log(filterData);
    }


  //===========================================================================>

  let id;

  //Creating Debouncing Function
  function debouncingFunction(fetchFunction , delay){

    if(id){
        clearTimeout(id);
    }

    id = setTimeout(()=>{
        fetchFunction()

    }, delay)

  }

  //Creating fetch Function
  async function fetchFunction(){
      
    
    searchLocation();

  }


//Filtering array of objects from the data base End (With Debouncing Feature)
