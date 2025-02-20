"use strict";
{
    const todos = [];
    //   const ff: Array<string> = [];
    const inputValue = document.querySelector("#input-Value");
    const addBtn = document.querySelector(".add-todolist");
    const todolistWrap = document.querySelector(".todolist-wrap");
    const tabBtn = document.querySelectorAll(".tab-btn button");
    let filterStatus = "all";
    tabBtn[0].classList.add("move");
    tabBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            tabBtn.forEach((b) => b.classList.remove("move"));
            this.classList.add("move"); // 클릭된 버튼에 추가
            filterStatus = this.id;
            render(); // 필터링된 목록을 다시 렌더링
        });
    });
    let filterText = "";
    inputValue.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && inputValue.value.trim() !== "") {
            todos.push({ text: inputValue.value, completed: false });
            inputValue.value = ""; // 입력 값 초기화
            filterText = ""; // 필터 초기화
            render();
        }
    });
    todolistWrap.addEventListener("click", (event) => {
        const target = event.target;
        if (target.closest(".check-btn")) {
            const todoItem = target.closest(".todolist-items"); // 클릭된 요소가 속한 .todolist-items 찾기
            console.log("todoItem: ", todoItem);
            const todoText = todoItem.querySelector("p");
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
    function render() {
        let filteredTodos = todos;
        // ✅ 현재 필터링 상태에 따라 분기 처리
        if (filterStatus === "ing") {
            filteredTodos = todos.filter((todo) => !todo.completed);
        }
        else if (filterStatus === "done") {
            filteredTodos = todos.filter((todo) => todo.completed);
        }
        todolistWrap.innerHTML = filteredTodos
            .map((item, index) => `<div class="todolist-items ${item.completed ? "change-color" : ""}" data-index="${todos.indexOf(item)}">
            <div class="item">
              <p class="${item.completed ? "active" : ""}">${index + 1}.${item.text}</p>
            </div>
            <div class="done-delete-btn">
              <button class="check-btn"><i class="fa-solid fa-check"></i></button>
              <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`)
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
