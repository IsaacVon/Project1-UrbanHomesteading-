
// Input: Zip Code HTML id=zipInput

// Output: 
// USDA Hardiness Zone id="zone"

// Plant names HTML id="plantInfo"
// We can easily display more than just names

let zip;
document.getElementById('submit').addEventListener('click', function () {

  // Clear Previous Search
  document.getElementById("plantInfo").innerHTML = ' ';




  // Input: Zip Code
  // Output: `tempMin`, `tempMax`, Hardiness Zone `zone`
  zip = document.getElementById('zipInput').value;

  let url = 'https://c0bra.api.stdlib.com/zipcode-to-hardiness-zone/?zipcode=' + zip;

  fetch(url)
    .then(response => response.json())
    .then(data => {

      let tempMin = JSON.parse(data.rangemin)
      let tempMax = JSON.parse(data.rangemax)

      // Title
      document.getElementById("zipcode").innerHTML = data.zipcode + " ";
      // Zone
      document.getElementById("zone").innerHTML = " " + data.zone;




      // Input: tempMin and tempMax
      // Output: Plant Names
      // We can output whatever we need! having issues seeing all the info on the console log tho

      document.getElementById('zipInput').value = '';

      let tempCheck = tempMin;

      while (tempCheck <= tempMax) {

        // Check each degree within the tempature range
        console.log("temp check " + tempCheck)

        tempCheck++;
        let url = 'https://yacdn.org/proxy/https://trefle.io/api/plants?temperature_minimum_deg_f=' +
          tempCheck +
          '&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09';

        fetch(url)
          .then(response => response.json())
          .then(plantData => {

            // Display each plant name within the array
            let i = 0;
            while (i < plantData.length) {

              // get plant ID and show info
              let plantIdUrl = 'https://yacdn.org/proxy/https://trefle.io/api/plants/' +
                plantData[i].id +
                '?&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09';



              fetch(plantIdUrl)
                .then(response => response.json())
                .then(plantIdData => {


                  // Final Output Display
                  
                  console.log(plantIdData)

                  let createLm = document.createElement("li")
                  document.getElementById("plantInfo").appendChild(createLm);
                  createLm.setAttribute("id", `plant${i}` );

                  createLm.innerHTML = 
                    `${plantIdData.common_name} / ${plantIdData.scientific_name}`
                })


              i++;

            }


          })
          .catch(e => console.log(e))

      }
    })
    .catch(e => console.log(e))
})

