function Translate(word, language) {
  this.apikey = your_apıkey;
  this.word = word;
  this.language = language;

  this.xhr = new XMLHttpRequest();
}
Translate.prototype.translateWord = function () {
  const endpoint = `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${this.apikey}&lang=${this.language}&text=${this.word}`;

  this.xhr.open("GET", endpoint);

  this.xhr.onload = () => {
    if (this.xhr.status === 200) {
      const json = JSON.parse(this.xhr.responseText);
      const text = json.text[0];

      callback(null, text);
    } else {
      callback("Bir hata oluştu", null);
    }
  };
  this.xhr.send();
};

Translate.prototype.changeParameters = function (newWord, newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
};
