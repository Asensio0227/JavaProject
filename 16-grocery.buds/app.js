const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const list = document.querySelector('.grocery-list');
const container = document.querySelector('.grocery-container');
const sidebar = document.querySelector('.sidebar');
const alert = document.querySelector('.alert');

const clearBtn = document.querySelector('.clear-btn');
const submit = document.querySelector('.submit-btn');
const closeBtn = document.querySelector('.close-btn');
const navToggle = document.querySelector('.nav-toggle');

let editID = "";
let isEditing = false;
let editElement;

// ****** EventLIsten *******
navToggle.addEventListener('click', toggleBar);

closeBtn.addEventListener('click', closeBar);

form.addEventListener('submit', chlorine);

clearBtn.addEventListener('click', clearItems);

window.addEventListener('DOMContentLoaded', setupItems);
// ****** end of EventListen ******

// ****** Functions ********
function chlorine(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value&&!isEditing) {
    createlistItems(id, value);
    container.classList.add('show-container');
    addtolocalStorage(id, value);
    showAlert('item added to the list', 'success');
    setbacktodefault()
  }else if (value && isEditing) {
    editElement.innerHTML = value;
    editlocalStorage(editID, value);
    showAlert('item changed', 'success');
    setbacktodefault();
  } else {
    showAlert('please enter value', 'danger');
  }
}

// ********* Buttons *******
function toggleBar() {
  sidebar.classList.add('show-sidebar')
};

function closeBar() {
  sidebar.classList.remove('show-sidebar')
}; 

function deleteItems(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  showAlert('item removed from the list', 'danger');
  removefromlocalStorage(id);
  setbacktodefault();
};

function editItems(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  editID = element.dataset.id;
  isEditing = true;
  grocery.value = editElement.innerHTML;
  submit.textContent = "edit";
}

function clearItems() {
  let venom = document.querySelectorAll('.grocery-item');

  if (venom.length > 0) {
    venom.forEach((item) => {
      list.removeChild(item);
    })
  }
  container.classList.remove('show-container');
  showAlert('list empty', 'danger');
  localStorage.removeItem('list');
  setbacktodefault();
}

// ********* end of Buttons ******
function showAlert(text,action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
};

function setbacktodefault() {
  editID = "";
  submit.textContent = "submit";
  isEditing = false;
  grocery.value = "";
}

// ********* end fo function ******

// ******* localStorage ******
function getlocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
};

function addtolocalStorage(id,value) {
  const venom = { id, value };
  let tossie = getlocalStorage();
  tossie.push(venom);
  localStorage.setItem('list', JSON.stringify(tossie));
};

function removefromlocalStorage(id) {
  const items = getlocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  })
  localStorage.setItem('list', JSON.stringify(items));
};

function editlocalStorage(id, value) {
  const items = getlocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  })
  localStorage.setItem('list', JSON.stringify(items));
};

// ******* end of localStorage ******

// ******* SetupItems *********
function setupItems() {
  let items = getlocalStorage();

  if (items.length > 0) {
    items.map((item) => {
      createlistItems(item.id,item.value)
    })
    container.classList.add('show-container')
  };
};

function createlistItems(id,value) {
  const element = document.createElement('article');
    element.classList.add('grocery-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
          <button class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
        </div>`;
    list.appendChild(element);
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItems);
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItems);
}

// ******* end of SetupItems ******** 
