class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }


  // SHow all posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // Show alert message
  showAlert(msg, className) {
    this.clearAlert();

    // Create alert div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add textarea
    div.appendChild(document.createTextNode(msg));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get posts div
    const posts = document.querySelector('#posts');
    // insert alert div
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert(msg, classList) {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear all fields
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Clear hidden ID field
  clearIdInput() {
    this.idInput.value = '';
  }

  // Change the form state
  changeFormState(type) {
    if(type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // Create cancel button
      const button = document.createElement('button');

      // Add classes
      button.className = 'post-cancel btn btn-light btn-block';
      // Add textarea
      button.appendChild(document.createTextNode('Cancel Update'));
      // Get parent
      const cardForm = document.querySelector('.card-form');
      // Get element to insert before
      const formEnd = document.querySelector('.form-end');
      // insert button after Update Post button
      cardForm.insertBefore(button, formEnd);
    } else {
        this.postSubmit.textContent = 'Post It';
        this.postSubmit.className = 'post-submit btn btn-primary btn-block';

        // Remove cancel button if it is there
        if(document.querySelector('.post-cancel')) {
          document.querySelector('.post-cancel').remove();
        }

        // Clear ID from hidden field
        this.clearIdInput();

        // Clear text clearFields
        this.clearFields();



    }
  }
}

export const ui = new UI();