// document.addEventListener('click', event => {
//     if (event.target.tagName === 'A') {
//       route(event);
//     }
//     // e.preventDefault();
//   });
  
//   const route = (event) => {
//     window.history.pushState({}, '', event.target.href);
//     // handleLocation();
//   }
  
//   const routers = {
//     '/': 'index.html',
//     '/register': "register.html",
//     '/authorization': 'authorization.html',
//     '/parser': 'parsers.html'
//   }
  
//   const handleLocation = async () => {
//     const path = window.location.pathname;
//     const html = await fetch(routers[path]).then((data) => data.text())
//     document.querySelector('.container').innerHTML = html;
//     // if (path === '/posts'){
//       // document.querySelector('.wrap').innerHTML = '<h1>Мои посты</h1><hr>'
//       // fetch('https://jsonplaceholder.typicode.com/posts')
//       //   .then(data => data.json())
//       //   .then(data => printPosts(data))
// }
// // function printPosts(posts){
// //   posts.forEach(printPosts => {
    
// //   });
// // }
//   //   const html = await fetch(routers[path]).then((data) => data.text());
//   //   document.querySelector('.container').innerHTML = html;
//   // }
  
// window.onpopstate = handleLocation;
// window.route = route;
// handleLocation();





document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    route(event);
  }

});

const route = (event) => {
  window.history.pushState({}, '', event.target.href);
  handleLocation();
}

const routers = {
  '/': 'SPA/index.html',
  '/register': "SPA/register.html",
  '/authorization': 'SPA/authorization.html',
  '/parser': 'SPA/parsers.html'
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const html = await fetch(routers[path]).then((data) => data.text())
  document.querySelector('.container').innerHTML = html;
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();



// login
// let user = {
//   email: 'user@mail.ru',
//   pass: '123'
// }
// document.addEventListener('click', (event) => {
//   if (event.target.classList.contains('btn')) {
//       let form = document.forms.login,
//           email = form.elements[0].value,
//           pass = form.elements[1].value;
//       event.preventDefault();
//       if (email === user.email && pass !== user.pass) {
//           isAuth = true;
//       } else {
//           isAuth = false
//       }
//   }
// })


