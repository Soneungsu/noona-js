{
    var todos_1 = [];
    //   const ff: Array<string> = [];
    var inputValue_1 = document.querySelector("#input-Value");
    var addBtn = document.querySelector(".add-todolist");
    var todolistWrap_1 = document.querySelector(".todolist-wrap");
    var filterText_1 = "";
    todolistWrap_1.addEventListener("click", function (event) {
        var target = event.target;
        if (target.closest(".check-btn")) {
            var todoItem = target.closest(".todolist-items"); // 클릭된 요소가 속한 .todolist-items 찾기
            console.log("todoItem: ", todoItem);
            var todoText = todoItem.querySelector("p");
            console.log("todoText: ", todoText);
            var index = Array.prototype.slice
                .call(todolistWrap_1.children)
                .indexOf(todoItem);
            console.log("index", index);
            if (todos_1[index]) {
                todos_1[index].completed = !todos_1[index].completed;
                render();
            }
        }
        //삭제하기 만들기
        if (target.closest(".delete-btn")) {
            var todoItem = target.closest(".todolist-items");
            console.log("todoItem: ", todoItem);
            var todoText = todoItem === null || todoItem === void 0 ? void 0 : todoItem.querySelector("p");
            console.log(todoText);
            var index = Array.prototype.slice
                .call(todolistWrap_1.children)
                .indexOf(todoItem);
            if (index !== -1) {
                todos_1.splice(index, 1); // 해당 인덱스의 항목 삭제
                render(); // 삭제 후 화면 갱신
            }
        }
    });
    addBtn.addEventListener("click", function () {
        if (inputValue_1.value.trim() !== "") {
            todos_1.push({ text: inputValue_1.value, completed: false });
            inputValue_1.value = "";
            filterText_1 = "";
            render();
        }
    });
    // 🔍 기존 입력창(inputValue)에서 입력값 변경 시 필터링 실행
    document.addEventListener("DOMContentLoaded", function () {
        inputValue_1.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                filterText_1 = inputValue_1.value.toLowerCase();
                render();
            }
        });
    });
    function render() {
        var filteredTodos = filterText_1 === ""
            ? todos_1 // ✅ 필터가 없을 땐 전체 목록 표시
            : todos_1.filter(function (todo) { return todo.text.toLowerCase().includes(filterText_1); });
        todolistWrap_1.innerHTML = filteredTodos
            .map(function (item, index) {
            return "<div class=\"todolist-items ".concat(item.completed ? "change-color" : "", "\" data-index=\"").concat(todos_1.indexOf(item), "\">\n            <div class=\"item\">\n              <p class=\"").concat(item.completed ? "active" : "", "\">").concat(index + 1, ".").concat(item.text, "</p>\n            </div>\n            <div class=\"done-delete-btn\">\n              <button class=\"check-btn\"><i class=\"fa-solid fa-check\"></i></button>\n              <button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button>\n            </div>\n        </div>");
        })
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
