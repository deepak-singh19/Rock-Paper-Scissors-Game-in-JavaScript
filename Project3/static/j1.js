function game(m)
{
console.log(m.id)
var hChoice= m.id;
var bchoice= Choice(bot())
//alert(bchoice)
result = winner(hChoice,bchoice);
console.log(result)
message = mssg(result);
//console.log("your Choice"+ m.id)
//console.log("botcoice"+bchoice)
console.log(message)

finalfront(hChoice, bchoice,message);

}
function mssg([yourScore, compScore])
{
    if( yourScore === 1){
        return {'message': 'YOU Won!', 'colour': 'green'};
        
    }
    else if( yourScore === 0.5){
        return {'message': 'TIED', 'colour': 'yellow'};
        
    }
    else{
        return {'message': 'YOU LOST!', 'colour': 'red'};
    }
}


function winner(i,j)
{
    var data =
    {
        'rock': {'scissors':1, 'rock':0.5, 'paper':0},
        'paper': {'scissors':0, 'rock':1, 'paper':0.5},
        'scissors': {'scissors':0.5, 'rock':0, 'paper':1}
    }
     var yourScore =data[i][j];
     var compScore = data[j][i];

     return [yourScore, compScore]
}

function bot()
{
    return Math.floor(Math.random()*3)
}

function Choice(n)
{
    return ["rock", "paper", "scissors"][n]
}

function finalfront(huChoice, bochoice, fmessage)
{
    var imgdata = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }


    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    var hdiv = document.createElement('div');
    var bdiv = document.createElement('div');
    var mdiv = document.createElement('div');

    hdiv.innerHTML = "<img src='" + imgdata[huChoice]+"' height=350 width=250  style = 'box-shadow:  0px 10px 50px rgba(40, 57, 233,1)'>"
    document.getElementById("Dee").appendChild(hdiv);

    mdiv.innerHTML= " <h1 style ='color : "+fmessage['colour']+"; font-size 190px; padding: 30px;'>"+fmessage['message']+ "</h1>  "
    document.getElementById("Dee").appendChild(mdiv);

    bdiv.innerHTML= "<img src='" + imgdata[bochoice]+"' height=350 width=250  style = 'box-shadow:  0px 10px 50px rgba(40, 57, 233,1)'>"
    document.getElementById("Dee").appendChild(bdiv);
    
    


}