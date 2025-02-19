{
  const todos: { text: string; completed: boolean }[] = [];
  //   const ff: Array<string> = [];
  const inputValue = document.querySelector<HTMLInputElement>("#input-Value")!;
  const addBtn = document.querySelector<HTMLButtonElement>(".add-todolist")!;
  const todolistWrap =
    document.querySelector<HTMLDivElement>(".todolist-wrap")!;

  todolistWrap.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.closest(".check-btn")) {
      const todoItem = target.closest(".todolist-items")!; // 클릭된 요소가 속한 .todolist-items 찾기
      console.log(todoItem);
      const todoText = todoItem?.querySelector<HTMLElement>("p")!;
      console.log(todoText);
      const index = Array.prototype.slice
        .call(todolistWrap.children)
        .indexOf(todoItem);
      //   console.log("index", index);
      if (todoText) {
        todoText.classList.toggle("active");
      }
      if (todos[index]) {
        todos[index].completed = !todos[index].completed;
        render();
      }
    }
    // if (target.closest(".delete-btn")) {
    //   const todoItem = target.closest(".todolist-items");
    //   //   console.log("ggg");
    //   if (todoItem) {
    //     const todoText = todoItem
    //       ?.querySelector("p")
    //       ?.textContent?.split(".")[1];
    //     const findIndex = todos.indexOf(todoText || "");
    //     console.log(findIndex);
    //     console.log("hhh");

    //     if (findIndex !== -1) {
    //       todos.splice(findIndex, 1);
    //       render();
    //     }
    //   }
    // }
  });
  addBtn.addEventListener("click", () => {
    if (inputValue.value.trim() !== "") {
      todos.push({ text: inputValue.value, completed: false });
      inputValue.value = "";
      render();
    }
  });

  function render(): void {
    let newsHtml: string = todos
      .map(
        (item, index) =>
          `<div class="todolist-items ${
            todos[index].completed ? "change-color" : ""
          }">
            <div class="item">
              <p>${index + 1}.${item}</p>
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
