{
    var todos_1 = [];
    var inputValue_1 = document.querySelector("#input-Value");
    var addBtn = document.querySelector(".add-todolist");
    var todolistWrap_1 = document.querySelector(".todolist-wrap");
    todolistWrap_1.addEventListener("click", function (event) {
        var _a;
        var target = event.target;
        if (target.closest(".check-btn")) {
            var todoItem = target.closest(".todolist-items"); // 클릭된 요소가 속한 .todolist-items 찾기
            var todoText = todoItem === null || todoItem === void 0 ? void 0 : todoItem.querySelector("p"); // 해당 항목의 텍스트(p)를 찾음
            if (todoText) {
                todoText.classList.toggle("active");
            }
        }
        if (target.closest(".delete-btn")) {
            var todoItem = target.closest(".todolist-items");
            if (todoItem) {
                var todoText = (_a = todoItem === null || todoItem === void 0 ? void 0 : todoItem.querySelector("p")) === null || _a === void 0 ? void 0 : _a.textContent;
                var findIndex = todos_1.indexOf(todoText || "");
                // console.log(findIndex);
            }
        }
    });
    addBtn.addEventListener("click", function () {
        if (inputValue_1.value.trim() !== "") {
            todos_1.push(inputValue_1.value);
            inputValue_1.value = "";
            render();
        }
    });
    function render() {
        var newsHtml = todos_1
            .map(function (item, index) {
            return "<div class=\"todolist-items\">\n            <div class=\"item\">\n              <p>".concat(index + 1, ". ").concat(item, "</p>\n            </div>\n            <div class=\"done-delete-btn\">\n              <button class=\"check-btn\"><i class=\"fa-solid fa-check\"></i></button>\n              <button class=\"delete-btn\"><i class=\"fa-solid fa-trash\"></i></button>\n            </div>\n        </div>");
        })
            .join("");
        todolistWrap_1.innerHTML = newsHtml;
    }
}
