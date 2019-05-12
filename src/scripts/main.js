import Boilerplate from "./views/boilerplate";

class Main {
  constructor() {
    new Boilerplate();
  }
}

window.onload = function() {
  new Main();
};