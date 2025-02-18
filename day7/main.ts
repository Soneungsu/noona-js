{
  const todos: string[] = [];

  const inputValue = document.querySelector<HTMLInputElement>("#input-Value")!;
  const addBtn = document.querySelector<HTMLButtonElement>(".add-todolist")!;
  const todolistWrap =
    document.querySelector<HTMLDivElement>(".todolist-wrap")!;

  todolistWrap.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.closest(".check-btn")) {
      const todoItem = target.closest(".todolist-items"); // 클릭된 요소가 속한 .todolist-items 찾기
      const todoText = todoItem?.querySelector("p"); // 해당 항목의 텍스트(p)를 찾음

      if (todoText) {
        todoText.classList.toggle("active");
      }
    }
    if (target.closest(".delete-btn")) {
      const todoItem = target.closest(".todolist-items");
      if (todoItem) {
        const todoText = todoItem?.querySelector("p")?.textContent;
        const findIndex = todos.indexOf(todoText || "");
        // console.log(findIndex);
      }
    }
  });
  addBtn.addEventListener("click", () => {
    if (inputValue.value.trim() !== "") {
      todos.push(inputValue.value);
      inputValue.value = "";
      render();
    }
  });

  function render(): void {
    let newsHtml: string = todos
      .map(
        (item, index) =>
          `<div class="todolist-items">
            <div class="item">
              <p>${index + 1}. ${item}</p>
            </div>
            <div class="done-delete-btn">
              <button class="check-btn"><i class="fa-solid fa-check"></i></button>
              <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`
      )
      .join("");

    todolistWrap.innerHTML = newsHtml;
  }
}
