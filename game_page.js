playername1 = localStorage.getItem("player1");
playername2 = localStorage.getItem("player2");

document.getElementById("username1").innerHTML = playername1 + " : ";
document.getElementById("username2").innerHTML = playername2 + " : ";

score_player1 = 0;
score_player2 = 0;

document.getElementById("score1").innerHTML = score_player1;
document.getElementById("score2").innerHTML = score_player2;

document.getElementById("question_turn").innerHTML = playername1;
document.getElementById("answer_turn").innerHTML = playername2;

function submit() {
    get_word = document.getElementById("word_input").value;
    word = get_word.toLowerCase();
    console.log("word = " + word);

    //we are going to create 3 variables to get the 3 letters from the word sent by the player.
    first_letter = word.charAt(1);
    console.log("first_letter = " + first_letter);

    middle_letter = Math.floor(word.length / 2);
    second_letter = word.charAt(middle_letter);
    console.log("second_letter" + second_letter);


    last_letter = word.length - 1;
    third_letter = word.charAt(last_letter);
    console.log("third_letter = " + third_letter);

    //we will create 3 more variables to replace all the 3 above letters with a blank.
    remove_1 = word.replace(first_letter, "_");
    console.log(remove_1);
    remove_2 = remove_1.replace(second_letter, "_");
    console.log(remove_2);
    remove_3 = remove_2.replace(third_letter, "_");
    console.log("the final word sent is " + remove_3);

    document.getElementById("word_input").value = "";

    question_word = "<h4 id='word_display'> Q. " + remove_3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button; document.getElementById("output").innerHTML = row;
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer.toLowerCase = " + answer);

    if (answer == word) {
        if (answer_turn == "player2") {
            score_player2 = score_player2 + 1;
            document.getElementById("score2").innerHTML = score_player2;
        }
        else {
                score_player1 = score_player1 + 1;
                document.getElementById("score1").innerHTML = score_player1;
            }
        }

        if (question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("question_turn").innerHTML = playername2;
        }
        else {
            question_turn = "player1";
            document.getElementById("question_turn").innerHTML = playername1;
        }

        if (answer_turn == "player1") {
            answer_turn = "player2";
            document.getElementById("answer_turn").innerHTML = playername2;
        }
        else {
            answer_turn = "player1";
            document.getElementById("answer_turn").innerHTML = playername1;
        }

        document.getElementById("output").innerHTML = "";
}