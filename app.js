/* notes*/
const noteElement = document.getElementById('note')
const addElement = document.getElementById('btn-add')
const listElement = document.getElementById('list')

addElement.onclick = function () {
    if (noteElement.value.length === 0) {
        return
    }
    listElement.insertAdjacentHTML( 'beforeend', 
     `
     <li id="list-item">
      <span> ${noteElement.value}  </span>
     </li>
    `
    )
    noteElement.value = ''
}

