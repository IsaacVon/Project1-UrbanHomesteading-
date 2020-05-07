document.getElementById('plantByNameSearchBtn').addEventListener('click', event => {
    event.preventDefault()
    console.log(document.getElementById('plantByNameInput').value)
  
    fetch(` https://yacdn.org/proxy/https://trefle.io/api/plants?q=${document.getElementById('plantByNameInput').value}&token=R2hvZ1N3MldqS2orb1JCQlRSYzJFUT09`)
      .then(r => r.json())
      .then(pData => {
        console.log(pData)
        let plantByNameElem = document.createElement('div')
        plantByNameElem.className = 'card'
        plantByNameElem.style = 'width: 18rem;'
        plantByNameElem.innerHTML = `
              <div class="card-body">
                <h4 class="card-title">
                  ${pData[0].common_name}
                </h4>
                <h6 class="card-title">
                 ${pData[0].scientific_name}
                </h6>
               <div class="card-body">
                <h5 class="card-title">
                </h5>
                  ${pData[0].link}
                </div>
            `
  
  
        document.getElementById('plantByNameDataview').append(plantByNameElem)
  
      })
      .catch(e => console.log(e))
  })