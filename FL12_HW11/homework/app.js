const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');
function func(array, node) {
  let ul = document.createElement('ul');
  ul.setAttribute('class', 'tree');
  node.appendChild(ul);
  for (let i = 0; i < array.length; ++i) {
    let span = document.createElement('span');
    let div = document.createElement('div');
    let li = document.createElement('li');
    span.innerText = array[i].title;
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
    if (array[i].folder) {
      li.setAttribute('class', 'lifolder');
      ul.setAttribute('class', 'ulfolder');
      div.setAttribute('class', 'divfolder');
      ul.classList.toggle('closefolder');
    }
    if (array[i].children === false || array[i].children === null) {
      let divempty = document.createElement('div');
      divempty.innerText = 'Folder is empty';
      li.appendChild(divempty);
      divempty.classList.toggle('closefolder');
      divempty.setAttribute('id', 'zero');
    }
    if (array[i].children) {
      func(array[i].children, li);
    }
  }
}
func(structure, rootNode);

let liarray = document.getElementsByClassName('lifolder');
let ularray = document.getElementsByClassName('ulfolder');
ularray[0].classList.toggle('closefolder');

for (let i = 0; i < liarray.length; i++) {
  liarray[i].querySelector('div').addEventListener('click', function () {
    liarray[i].querySelector('ul, #zero').classList.toggle('closefolder');
    liarray[i].querySelector('ul, #zero').classList.toggle('openfolder');

  });
}











