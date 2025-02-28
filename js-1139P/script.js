let team1 = document.getElementById("team1Name");

let team2 = document.getElementById("team2Name");

function team1ChangeName(){
    let team1Name = prompt("Takım1'in Adını Giriniz")
//     if(team1Name.trim() === ""){
//         team1.innerText = "Takım A";
//     }else{
//         team1.innerText = team1Name;
//  }

    team1Name.trim() === "" ? team1.innerText = "Takım A" : team1.innerText = team1Name;

}

function team2ChangeName(){
    let team2Name = prompt("Takım2'nin Adını Giriniz");
    // if(team2Name.trim() === ""){
    //     team2.innerText = "Takım B";
    // }else{
    //     team2.innerText = team2Name;
    // }

    team2Name.trim() === "" ? team2.innerText = "Takım B" : team2.innerText = team2Name;  
}


function team1ScoreUp(){
    let team1Score = document.getElementById("team1Score").textContent;
    team1Score++;
    document.getElementById("team1Score").textContent = team1Score;
}

function team1ScoreDown(){
    let team1Score = document.getElementById("team1Score").textContent;
    if(document.getElementById("team1Score").textContent >0 ){
        team1Score--;
        document.getElementById("team1Score").textContent = team1Score;
    }
    else{
        document.getElementById("team1Score").textContent = 0;
    }
}

function team2ScoreUp(){
    let team2Score = document.getElementById("team2Score").textContent;
    team2Score++;
    document.getElementById("team2Score").textContent = team2Score;
}

function team2ScoreDown(){
    let team2Score = document.getElementById("team2Score").textContent;
    if(document.getElementById("team2Score").textContent >0 ){
        team2Score--;
        document.getElementById("team2Score").textContent = team2Score;
    }
    else{
        document.getElementById("team2Score").textContent = 0;
    }
}

function team1ScoreWrite(){
    let team1ScoreWrite = parseInt(prompt("Takım için Skor Gir"));
    document.getElementById("team1Score").textContent = team1ScoreWrite;

}

function team2ScoreWrite(){
    let team2ScoreWrite = parseInt(prompt("Takım için Skor Gir"));
    document.getElementById("team2Score").textContent = team2ScoreWrite;
}