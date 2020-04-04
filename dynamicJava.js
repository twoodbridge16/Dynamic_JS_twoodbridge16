function loadFunction() {
var a = Math.floor(Math.random() * 10 + 1);
var guess = 1;



document.getElementById("enterGuess").onclick = function()
{
    var b = document.getElementById("guessArea").value;

    if(a == b)
    {
        alert("You guessed it! It only took you " + guess + " tries.");
    }

    else if(a < b)
    {
        guess++;
        alert("Go lower!");
		$("#table").append(`<tr><td>${b}</td></tr>`);
    }

    else if(a > b)
    {
        guess++;
    alert("Go higher!");
		$("#table").append(`<tr><td>${b}</td></tr>`);
    }
}
}
