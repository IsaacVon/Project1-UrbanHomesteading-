
// Input: Zip Code HTML id=zipInput

// Output: 
    // USDA Hardiness Zone id="zone"

    // Plant names HTML id="plantInfo"
        // We can easily display more than just names
    

        let zip;
        document.getElementById('submit').addEventListener('click', function(){

        // Input: Zip Code
        // Output: `tempMin`, `tempMax`, Hardiness Zone `zone`
            zip = document.getElementById('zipInput').value;
        
            let url = 'https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode='+zip;
            
            fetch(url)
                .then(response => response.json())
                .then( data => {

                let tempMin = JSON.parse(data.rangemin)
                let tempMax = JSON.parse(data.rangemax)

                // Title
                document.getElementById("zipcode").innerHTML = data.zipcode + " Zone Information";
                // Zone
                document.getElementById("zone").innerHTML = "Plant Hardiness Zone " + data.zone;


    

        // Input: tempMin and tempMax
        // Output: Plant Names
                    // We can output whatever we need! having issues seeing all the info on the console log tho

            let tempCheck = tempMin;

            while (tempCheck <= tempMax) {

                // Check each degree within the tempature range
                console.log("temp check " + tempCheck)

                tempCheck++;
                let url = 'https://yacdn.org/proxy/https://trefle.io/api/plants?temperature_minimum_deg_f=' 
                + tempCheck
                + '&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09';

                fetch(url)
                    .then(response => response.json())
                    .then( plantData => {

                    // Display each plant name within the array
                    let i = 0;
                    while (i < plantData.length) {

                    // Console Log to test
                    console.log(plantData[i])

                    document.getElementById("plantInfo").textContent += plantData[i].common_name + ", ";
                    
                    i++;
                    }
                    })
                    .catch(e => console.log(e))



            }

            })   
                    .catch(e => console.log(e))
        })


