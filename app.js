eventListener();

function eventListener() {
  document
    .getElementById("translate-form")
    .addEventListener("submit", translateWord);
  document.getElementById("language").onchange = function () {
    console.log("Event");
    ui.changeUI();
  };
}

const translate = new Translate(
  document.getElementById("word").value,
  document.getElementById("language").value
);
const ui = new UI();

function translateWord(e) {
  translate.changeParameters(
    document.getElementById("word").value,
    document.getElementById("language").value
  );
  translate.translateWord(function (err, response) {
    if (err) {
      console.log(err);
    } else {
      ui.displayTranslate(response);
    }
  });

  e.preventDefault();
}
