{
    var todos_1 = [];
    //   const ff: Array<string> = [];
    var inputValue_1 = document.querySelector("#input-Value");
    var addBtn = document.querySelector(".add-todolist");
    var todolistWrap_1 = document.querySelector(".todolist-wrap");
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
    addBtn.addEventListener("click", function () {
        if (inputValue_1.value.trim() !== "") {
            todos_1.push({ text: inputValue_1.value, completed: false });
            inputValue_1.value = "";
            render();
        }
    });
    function render() {
        var newsHtml = todos_1
            .map(function (item, index) {
            return "<div class=\"todolist-items ".concat(item.completed ? "change-color" : "", "\">\n            <div class=\"item\">\n              <p class=\"").concat(item.completed ? "active" : "", "\">").concat(index + 1, ".").concat(item.text, "</p>\n            </div>\n            <div class=\"done-delete-btn\">\n              <button class=\"check-btn\"><i class=\"fa-solid fa-check\"></i></button>\n              <button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button>\n            </div>\n        </div>");
        })
            .join("");
        todolistWrap_1.innerHTML = newsHtml;
    }
}
