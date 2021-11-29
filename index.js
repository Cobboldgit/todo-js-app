let input = document.querySelector("#todo-input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

//create a function to add up to our Todos

const addUpTodos = () => {
  let todoTxt = input.value;
  if (todoTxt === "") {
    alert("Enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoTxt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = "";
  }
};

btn.addEventListener("click", addUpTodos);

// lets create a function to check finished todos
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

