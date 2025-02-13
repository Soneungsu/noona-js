{
  type Test = string;
  const name: Test = "eungsu";
  console.log(name);

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  //로그인

  type Id = string;
  type Password = number | string;
  type KeyValue = number;
  const users: {
    key: KeyValue;
    members: {
      id: Id;
      password: Password | Id;
    }[];
  }[] = [];
  function addGroup(key: KeyValue) {
    users.push({ key, members: [] });
  }

  function addUserToGroup(key: KeyValue, id: Id, password: Password) {
    const findKey = users.find((keyValue) => keyValue.key === key);
    if (findKey) {
      return findKey.members.push({ id, password });
    } else {
      console.log("해당 키값이 없습니다.");
    }
  }

  function Login(id: Id, password: Password) {
    for (let user of users) {
      const foundUser = user.members.find(
        (user) => user.id === id && user.password === password
      );
      if (foundUser) {
        return `${id}님 반갑습니다.`;
      } else {
        return `${id} 또는 ${password}를 다시 확인해주세요`;
      }
    }
  }
  addGroup(1);
  addUserToGroup(1, "eungsu", "dkdltm123@");
  console.log(Login("eungsu", "dkdltm123@"));
  //   users.forEach((user) => console.log(user));
  //   function user(Id: Id, Password: Password) {}
}
