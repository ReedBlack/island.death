var playerUrl = './instructors.json'
var situationUrl = './events.json'
var situationsArray;

function populatePlayers() {
  fetch(playerUrl)
  .then(res => res.json())
  .then(function(players) {
    console.log(players);
    players.map(function(player) {
      var li = document.createElement('li');
      var img = document.createElement('img');
      var span = document.createElement('span');
      var p = document.createElement('p');
      var a = document.createElement('a');

      img.src = player.image;
      span.textContent = `${player.name}`;
      p.textContent = `${player.description}`;
      a.href = `${player.name}`;

      li.appendChild(img);
      li.appendChild(span);
      li.appendChild(p);
      li.appendChild(a);
      li.id = player.name
      li.classList.add('person')
      document.getElementById('characters').appendChild(li);
    })
  })
  .catch(error => {
    return console.error(error)
  })
}

function addSituationListener() {
  fetch(situationUrl)
  .then(res => res.json())
  .then(function(situations) {
    console.log(situations)
    situationsArray = situations
    // randomSitch(situations)
    document.getElementById('newSitch').addEventListener('click', function(event) {
      randomSitch(situations)
    })
  })
}

function randomSitch(situations) {
  var num = Math.floor(Math.random() * 10) + 1
  document.getElementById('header').textContent = situations[num].type
  document.getElementById('description').textContent = situations[num].description
  document.getElementById('descriptionIMG').src = situations[num].imageURL
  killPeople(situations[num].bodyCount)
}

function killPeople(num) {
  var people = 0
  while (people < num) {
    var id = Math.floor(Math.random() * document.getElementsByClassName('person').length)
    var personToDie = document.getElementsByClassName('person')[id]
    console.log(personToDie.getElementsByTagName('img')[0].src)
    // document.getElementById('characters').removeChild(personToDie)
    people += 1
  }
}

populatePlayers()
addSituationListener()
