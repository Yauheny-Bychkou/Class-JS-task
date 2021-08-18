"use strict";

class First {
  constructor(message) {
    this.message = message;
  }
  hello() {
    console.log(this.message);
  }
}
class Second extends First {
  constructor(message) {
    super(message);
  }
  hello() {
    super.hello();
    console.log("А я наследуемый метод!");
  }
}

const child = new Second("Привет я метод родителя!");
child.hello();
