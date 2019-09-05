'uses stric'

const loadPost = document.querySelector('#load').addEventListener('click', loadAPI)

function loadAPI() {
  // create object
  const xhr = new XMLHttpRequest()
  // open conection
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
  // load and read data
  xhr.onload = function() {
    if(this.status === 200) {
      const request = (JSON.parse(this.responseText))
      
      let content = ''
      request.forEach(function(post) {
        content += `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `
      })
      document.getElementById('list').innerHTML = content
    }
  }
  // send the conection 
  xhr.send()
}