// R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09

// https:trefle.io/some-url?token=YOUR-TOKEN

document.getElementById('plantByNameSearchBtn').addEventListener('click', event => {
  event.preventDefault()

  console.log(document.getElementById('plantByNameInput').value)
  // ----------------------------------------------------------------
  localStorage.setItem('plantByNameInput', document.getElementById('plantByNameInput').value)
  // ----------------------------------------------------------------
  fetch(` https://yacdn.org/proxy/https://trefle.io/api/plants?q=${document.getElementById('plantByNameInput').value}&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09`)
    .then(r => r.json())
    .then(pData => {
      console.log(pData)

      let plantNames = pData.length;
      for (let i = 0; i < plantNames; i++) {
        console.log(pData[i]);


        // plant info fetch through  ID link from plantBYName search, object.

        fetch(`https://yacdn.org/proxy/https://trefle.io/api/plants/${pData[i].id}?&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09`)
          .then(r => r.json())
          .then(pById => {
            console.log(pById)

            let plantByNameElem = document.createElement('div')
            plantByNameElem.className = 'card'
            plantByNameElem.style = 'width: 40rem; background-color: rgba(255, 235, 205, 0.217);'
            plantByNameElem.innerHTML = `
            <div class="card-body">
              <p1 class="card-title">
                ${pData[i].common_name}
              </p1>
              <p1 class="card-title">
               ${pData[i].scientific_name}
              </p1>
             <div class="card-body">
                <p1 class="card-title">
                ${pById.family_common_name}
                </p1>
              </div>
              <div class="card-body">
                <p1 class="card-title">
                ${pById.main_species.duration}
                </p1>
              </div>
              <img src= ${pById.images[1].url} alt="plant image" width="200" height="200">
            
              `

            document.getElementById('plantByNameDataview').append(plantByNameElem)

          })

          .catch(e => console.log(e))
      }
    })

    .catch(e => console.log(e))

})

