function login() {
    username1 = document.getElementById("username_input1").value;

    username2 = document.getElementById("username_input2").value;

    localStorage.setItem("player1", username1);
    localStorage.setItem("player2", username2);

    window.location = "game_page.html";
}

//function stupidlyannoying() {
//this is stupidly annoying for some reason
//}