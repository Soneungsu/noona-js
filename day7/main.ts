{
  const todos: { text: string; completed: boolean }[] = [];
  //   const ff: Array<string> = [];
  const inputValue = document.querySelector<HTMLInputElement>("#input-Value")!;
  const addBtn = document.querySelector<HTMLButtonElement>(".add-todolist")!;
  const todolistWrap =
    document.querySelector<HTMLDivElement>(".todolist-wrap")!;
  let filterText = "";
  todolistWrap.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.closest(".check-btn")) {
      const todoItem = target.closest(".todolist-items")!; // 클릭된 요소가 속한 .todolist-items 찾기
      console.log("todoItem: ", todoItem);

      const todoText = todoItem.querySelector("p")!;
      console.log("todoText: ", todoText);

      const index = Array.prototype.slice
        .call(todolistWrap.children)
        .indexOf(todoItem);
      console.log("index", index);

      if (todos[index]) {
        todos[index].completed = !todos[index].completed;
        render();
      }
    }

    //삭제하기 만들기
    if (target.closest(".delete-btn")) {
      const todoItem = target.closest(".todolist-items");
      console.log("todoItem: ", todoItem);

      const todoText = todoItem?.querySelector("p");
      console.log(todoText);
      const index = Array.prototype.slice
        .call(todolistWrap.children)
        .indexOf(todoItem);
      if (index !== -1) {
        todos.splice(index, 1); // 해당 인덱스의 항목 삭제
        render(); // 삭제 후 화면 갱신
      }
    }
  });
  addBtn.addEventListener("click", () => {
    if (inputValue.value.trim() !== "") {
      todos.push({ text: inputValue.value, completed: false });
      inputValue.value = "";
      filterText = "";
      render();
    }
  });

  // 🔍 기존 입력창(inputValue)에서 입력값 변경 시 필터링 실행
  document.addEventListener("DOMContentLoaded", function () {
    inputValue.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        filterText = inputValue.value.toLowerCase();
        render();
      }
    });
  });

  function render(): void {
    const filteredTodos =
      filterText === ""
        ? todos // ✅ 필터가 없을 땐 전체 목록 표시
        : todos.filter((todo) => todo.text.toLowerCase().includes(filterText));

    todolistWrap.innerHTML = filteredTodos
      .map(
        (item, index) =>
          `<div class="todolist-items ${
            item.completed ? "change-color" : ""
          }" data-index="${todos.indexOf(item)}">
            <div class="item">
              <p class="${item.completed ? "active" : ""}">${index + 1}.${
            item.text
          }</p>
            </div>
            <div class="done-delete-btn">
              <button class="check-btn"><i class="fa-solid fa-check"></i></button>
              <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`
      )
      .join("");
  }
}

//   function render(): void {
//     let newsHtml: string = todos
//       .map(
//         (item, index) =>
//           `<div class="todolist-items ${item.completed ? "change-color" : ""}">
//             <div class="item">
//               <p class="${item.completed ? "active" : ""}">${index + 1}.${
//             item.text
//           }</p>
//             </div>
//             <div class="done-delete-btn">
//               <button class="check-btn"><i class="fa-solid fa-check"></i></button>
//               <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
//             </div>
//         </div>`
//       )
//       .join("");

//     todolistWrap.innerHTML = newsHtml;
//   }
