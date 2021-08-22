var randomNumber = Math.floor(Math.random() * 6)+1;
var randomDice = "dice"+randomNumber+'.png';
var query = document.querySelectorAll("img")[0];
query.setAttribute("src",randomDice);

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice1 = "dice"+randomNumber1+'.png';
var query1 = document.querySelectorAll("img")[1];
query1.setAttribute("src",randomDice1);

if (randomNumber > randomNumber1)
{
    document.querySelector('h1').textContent="🚩 Player1 won the match!"

}
else if (randomNumber < randomNumber1)
{
    document.querySelector('h1').textContent="Player2 won the match 🚩"
}
else
{
    document.querySelector('h1').textContent='Draw!'
}