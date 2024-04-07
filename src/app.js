/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The driver", "The teacher", "The gardener", "The pet"];
  let action = ["insult", "hit", "attack", "bite"];
  let what = ["the policeman", "the banner", "a tree", "my car"];
  let when = [
    "during the lunch",
    "this morning",
    "when i was at the gym",
    "before the class",
    "this evening"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  const generator = `Could you believe that.. ${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

  const titleElement = document.querySelector("#excuse");
  titleElement.innerHTML = generator;
  console.log(titleElement);
};
