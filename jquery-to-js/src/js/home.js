console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('Se acabó el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('Se acabó el tiempo');
  }, 3000)
})

// getUser
//   .then(function() {
//     console.log('Todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

Promise.all([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message)
})
.catch(function(message) {
  console.log(message)
})



// $.ajax('https://randomuser.me/api/', {
//   method: 'GET',
//   success: function(data) {
//     console.log(data)
//   }
// })


// fetch('https://randomuser.me/api/dsfdsfsd')
//   .then(function (response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (user) {
//     console.log('user', user.results[0].name.first)
//   })
//   .catch(function() {
//     console.log('algo falló')
//   });


// (async function load() {
//   // await
//   // action
//   // terror
//   // animation
//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }

//   const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
//   const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
//   const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
//   console.log(actionList, dramaList, animationList)


//   const $actionContainer = document.querySelector('#action');
//   const $dramaContainer = document.getElementById('#drama');
//   const $animationContainer = document.getElementById('#animation');


//   const $featuringContainer = document.getElementById('#featuring');
//   const $form = document.getElementById('#form');
//   const $home = document.getElementById('#home');


//   // const $home = $('.home .list #item');
//   const $modal = document.getElementById('modal');
//   const $overlay = document.getElementById('overlay');
//   const $hideModal = document.getElementById('hide-modal');

//   const $modalTitle = $modal.querySelector('h1');
//   const $modalImage = $modal.querySelector('img');
//   const $modalDescription = $modal.querySelector('p');

// })()
