const notes = document.querySelector(".card .notes");
const trash = document.getElementById("trash");
let note = document.querySelectorAll(".card .notes .note");
function showNotes() {
  notes.innerHTML = localStorage.getItem("notes");
}
showNotes();
function makeNote() {
  const p = document.createElement("P");
  const trash = document.createElement("i");
  const note = document.createElement("div");
  p.setAttribute("contenteditable","true")
p.classList.add("input-box");
  note.classList.add("note");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash");
  trash.setAttribute("id", "trash");
  note.appendChild(p);
  note.appendChild(trash);
  notes.appendChild(note);
}
notes.addEventListener("click", function (e) {
  if (e.target.id === "trash") {
    e.target.parentElement.remove();
    updateStorage();
  }
  if (e.target.tagName === "P") {
    note = document.querySelectorAll(".card .notes .note");
    note.forEach((nt) => {
      nt.oninput = function () {
        updateStorage();
      };});
  }
  if (e.target.id === "copy") {
    console.log("hello");

    note = document.querySelectorAll(".card .notes .note");
    console.log(note);
 e.target.parentElement.children[0].select();
 document.execCommand("copy");
  }
});
function updateStorage() {
  localStorage.setItem("notes", notes.innerHTML);
}
