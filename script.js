function verschluesseln() {
    var inputText = document.getElementById("input-text").value.toUpperCase();
    var password = document.getElementById("password").value.toUpperCase();
    var alphabet = document.getElementById("alphabet").value.toUpperCase();
    var outputText = "";
    var passwordIndex = 0;
    for (var i = 0; i < inputText.length; i++) {
        var inputCharCode = inputText.charCodeAt(i);
        if (inputCharCode >= 65 && inputCharCode <= 90) {
            var passwordCharCode = password.charCodeAt(passwordIndex % password.length);
            var outputCharCode = (inputCharCode + passwordCharCode - 2 * 65) % 26 + 65;
            outputText += alphabet.charAt(outputCharCode - 65);
            passwordIndex++;
        } else {
            outputText += inputText.charAt(i);
        }
    }
    document.getElementById("output-text").value = outputText;
}

function kopieren() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
    alert("Der Text wurde kopiert: " + outputText.value);
}