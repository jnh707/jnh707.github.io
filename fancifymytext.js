// Function to display an alert when the Bigger button is clicked
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Function to apply styles based on radio button selection
function applyStyle() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyRadio").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringRadio").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform text and add "-Moo" to the last word of each sentence
function addMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim()) {
            var words = sentences[i].trim().split(" ");
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}