interface IWords {
  [key: string]: string;
}

export class Dict {
  constructor(public dictionary: IWords) {}
}

interface IUser {
  name: string;
}

class User {
  constructor(public name: string) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

let user = new User("a");
user.sayHi();

