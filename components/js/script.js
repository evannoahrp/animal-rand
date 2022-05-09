var url = 'https://zoo-animal-api.herokuapp.com/animals/rand'
var requestOptions = {
  method: 'GET',
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

fetch(url, requestOptions)
  .then((response) => response.json())
  .then((response) => {
    const animal = response
    const animalContainer = document.querySelector('.animal-container')
    animalContainer.innerHTML = show(animal)
  })

function show(animal) {
//   return `<div class="col-md-4 my-3">
//             <div class="card">
//               <img src="${animal.image_link}" class="card-img-top">
//               <div class="card-body">
//                 <h5 class="card-title">${animal.name}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${animal.latin_name}</h6>
//                 <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${animal.id}">See Detail</a>
//               </div>
//             </div>
//           </div>`
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${animal.image_link}" class="img-fluid">
              </div>
              <div class="col-md-8">
                <ul class="list-group">
                  <li class="list-group-item"><h3>${animal.name}</h3></li>
                  <li class="list-group-item">Latin Name : ${animal.latin_name}</li>
                  <li class="list-group-item">Animal Type : ${animal.animal_type}</li>
                  <li class="list-group-item">Active Time : ${animal.active_time}</li>
                  <li class="list-group-item">Lifespan : ${animal.lifespan} years</li>
                  <li class="list-group-item">Habitat : ${animal.habitat}</li>
                  <li class="list-group-item">Geo Range : ${animal.geo_range}</li>
                </ul>
              </div>
            </div>
          </div>`
}