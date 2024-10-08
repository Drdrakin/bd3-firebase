const listBook = document.querySelector('#book-list')

function renderList(doc){

    let li = document.createElement('li');
    let autor = document.createElement('span');
    let titulo = document.createElement('span');

    autor.textContent = doc.autor;
    titulo.textContent = doc.titulo;

    li.appendChild(titulo);
    li.appendChild(autor);

    listBook.appendChild(li);
}

db.collection("libri-collection")
    .get()
    .then((snapshot) => {
        snapshot.docs.forEach(
            doc => {
                renderList(doc.data())
            }
        )
    })

const form = document.querySelector('#add-book-form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    alert('Formulário show')
});