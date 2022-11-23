// 1. Compare two JSON have same properties without order?
    var obj1 = {name:"Person 1", age:5};
    var obj2 = {age:5, name:"Person 1"};

// code
// Lodash has been implemented to check the JSON objects
    console.log(_.isEqual(obj1,obj2));

// output
    // true

// Note: Source script has been included in the HTML File.


// 2.Use the rest countries API to display the URL of the countries flag.
// code

    // create a new XMLHttpRequest
    let xhr=new XMLHttpRequest();

        // open the XML document with the help of GET method
    xhr.open("GET","https://restcountries.com/v3.1/all");

        // load the required the data from the array
    xhr.onload=function(){
            let data=JSON.parse(this.response);
            console.log(data);

            for(let i=0; i<data.length; i++){
                let user=data[i];
                console.log(`
                FlagPNGUrl : ${user.flags.png}
                FlagSVGUrl : ${user.flags.svg}
                `)
            }
        
    }
        // send the request to the server
    xhr.send();


// output
//  output for the first object only provided here since this array has 250 objects 
            // FlagPNGUrl : https://flagcdn.com/w320/mr.png
            // FlagSVGUrl : https://flagcdn.com/mr.svg


// 3.Use the same rest countries API and print all countries names,regions,sub-regions and populations.

// code

    // create a new XMLHttpRequest
    let xhr=new XMLHttpRequest();

    // open the XML document with the help of GET method
    xhr.open("GET","https://restcountries.com/v3.1/all");

    // load the required the data from the array
    xhr.onload=function(){
        let data=JSON.parse(this.response);
        console.log(data);

        for(let i=0; i<data.length; i++){
            let user=data[i];
            console.log(`
            Name : ${user.name.official}
            Region : ${user.region}
            Sub-region : ${user.subregion}
            Population : ${user.population}

            `)
        }
    
}
    // send the request to the server
    xhr.send();

// Output
//  output for the first object only provided here since this array has 250 objects 
            // Name : Islamic Republic of Mauritania
            // Region : Africa
            // Sub-region : Western Africa
            // Population : 4649660