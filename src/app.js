import { http } from './http';
import { ui } from './ui';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete post
document.querySelector('#posts').addEventListener('click',deletePost);


// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel update button
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  const data = {
        title,
        body
  }

// Validate input fields
  if(title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    // Check for presence of ID in hidden ID field
    if(id === '') {
      // Create post
      http.post('http://localhost:3000/posts', data)
      .then(data => {
          ui.showAlert('Post Added', 'alert alert-success');
          ui.clearFields();
          getPosts();
      })
      .catch(err => console.log(err));

    } else {
      // Update post
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
          ui.showAlert('Post Updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
      })
      .catch(err => console.log(err));
    }


  }
}

//Delete post
function deletePost(e){
 if(e.target.parentElement.classList.contains('delete')){
 const id = e.target.parentElement.dataset.id;
 console.log(id);
 http.delete(`http://localhost:3000/posts/${id}`)
 .then( message => {
 ui.showAlert(message,'alert alert-danger');
 getPosts();
 })
 .catch(err => console.log(err));

 }
}



// Enable Edit State
function enableEdit(e) {
  // console.log(e.target.parentNode);
  if(e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const data = {
      id,
      title,
      body
    }

    // Fill form with current post
    ui.fillForm(data);

  }

  e.preventDefault();
}

// Cancel Edit State
function cancelEdit(e) {
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}