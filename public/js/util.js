console.log('Clientside script Executes')

fetch('http://localhost:8080/hello-world-bean', {mode: 'no-cors'}).then((response) => {
    response.json().then((data) => {
        console.log(data + 'hello')
    })
})

fetch('http://localhost:9080/json')
  .then(response => response.json())
  .then(data => console.log(data));

//  const myRequest = new Request('http://localhost:8080/hello-world-bean',{ 
//      mode: 'no-cors' 
//     });

//     fetch(myRequest).then(response => response.json())

//   fetch(myRequest).then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data)
//         }
//     })
// })