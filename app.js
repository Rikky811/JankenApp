function janken(choice)  {
    //html内の要素をjs内の変数に充てはめる
    let resultElement = document.getElementById("ResultMessage");
    let PlayersChoiceElement = document.getElementById("PlayersChoice");
    //プレイヤーが選んだ数字をシンボルに変換
    PlayersChoiceElement.innerHTML = Num2Synbol(choice);
    let PCsChoiceElemennt = document.getElementById("PCsChoice");
    let PCsChoiceNumber = Math.floor(Math.random() * 3) + 1;
    //PCが選んだ数字をシンボルに変換
    PCsChoiceElemennt.innerHTML = Num2Synbol(PCsChoiceNumber);
    //勝ち負けの判定をする関数
    resultElement.innerHTML = Judgement(choice, PCsChoiceNumber);
}

function Num2Synbol(choice)
{   //からの文字列で初期化
    let symbol = "";

    switch (choice) {
        case 1:
            symbol = "✊🏻";
            break;

        case 2:
            symbol = "✌🏻";
            break;

        default:
            symbol = "🖐🏻";
            break;
    }

    return symbol;
}

function Judgement(PlayersChoice, PCsChoice)
{
    let resultMsg = "";
    let constPlayerWin = "プレイヤーの勝ち";
    let constPCWin = "コンピューターの勝ち";
    let constDraw = "あいこ";

    if (PlayersChoice == PCsChoice) {
        resultMsg = constDraw;
    }else{
        if(PlayersChoice == 1){ // Gu
            if (PCsChoice == 2){ // Choki
                resultMsg = constPlayerWin;
            }else {
                resultMsg = constPCWin;
            }
        }else{
            if(PlayersChoice == 2) { // Choki
                if (PCsChoice == 1) { // Gu
                    resultMsg = constPCWin;
                }else { // Pa
                    resultMsg = constPlayerWin
                }
            }else{//Pa
                if(PCsChoice == 1) {//Gu
                    resultMsg = constPlayerWin;
                }else{
                    resultMsg = constPCWin;
                }
            }
        }
    }

    return resultMsg;

}
