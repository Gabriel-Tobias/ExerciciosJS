function adicionarJogador(){
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value

  const confirmation = confirm('escalar ' + name + ' como ' + position + ' ?')

  if(confirmation){
    const time = document.getElementById('time')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ': ' + name + '(' + number + ')'
    time.appendChild(playerItem)

    document.documentElement('positon').value = ''
    document.documentElement('name').value = ''
    document.documentElement('number').value = ''
  }
}

function removerJogador(){
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm('remover o jogador ' + playerToRemove.innerText + ' ?')

    if(confirmation){
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}