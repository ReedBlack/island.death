var playerUrl = './instructors.json'
var situationUrl = './situation.json'
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
    var h1 = document.createElement('h1')

    h1.textContent = 
    document.getElementById('newSitch').addEventListener('click', function(event) {
      if (Math.floor(Math.random() * 2) == 0) {

      } else {
        document.getElementById('liveDied').textContent = 'Ya dead, sry'
      }
    })
  })
}

populatePlayers()
