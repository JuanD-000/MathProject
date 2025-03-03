document.getElementById("create-lobby").addEventListener("click", function() {
    alert("Lobby Created! (Multiplayer feature coming soon!)");
});

document.getElementById("join-lobby").addEventListener("click", function() {
    let code = document.getElementById("room-code").value;
    alert("Joining lobby: " + code);
});
