function addUser() {
     player_1_username = document.getElementById("user1_input").value
     player_2_username = document.getElementById("user2_input").value
     localStorage.setItem("user1",player_1_username)
     localStorage.setItem("user2",player_2_username)
     window.location="game.html"
}