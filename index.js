
function StartGame(){
   var obj={}
   obj.playerScore=0
   obj.computerScore=0
   obj.computerChoice=null
   obj.playerChoice=null

    obj.playerRound=playerRound
    obj.computerRound=computerRound
   obj.playGame=playGame
   return obj
}
var playerRound=function(){
var that =this
 
}
var computerRound=function(){
    var that =this
    var arr=[{url:"./photo/paper.png",choice:"paper"},{url:"./photo/rock.png",choice:"rock"},{url:"./photo/scissor.png",choice:"scissor"}]
    var choice=arr[Math.floor(Math.random()*3)]
    
    that.computerChoice=choice.choice
  
    $('#computer').attr('src',choice.url)
}
var playGame=function (choice){
    var that=this 
   
    var player=$('.counterP') 
    var computer=$('.counterC') 
  
      if(choice=== that.computerChoice){
        alert("draw")
        
  
    } 
    else if(choice==='rock'&&that.computerChoice==='paper'){
       that.computerScore=that.computerScore+1
       computer.html(that.computerScore)
     alert('computer won'+' '+that.computerScore)
    }else if (choice==='paper'&&that.computerChoice==='rock'){
        that.playerScore= that.playerScore+1
        player.html(that.playerScore)
     alert('player won'+' '+ that.playerScore)
    } else if(choice==='rock'&&that.computerChoice==='scissor'){
        that.playerScore= that.playerScore+1
        player.html(that.playerScore)
        alert('player won'+' '+ that.playerScore)
    
    }
    else if(that.computerChoice==='rock'&&choice==='scissor'){
        that.computerScore=that.computerScore+1
       computer.html(that.computerScore)

        alert('computer won'+' '+ that.computerScore)
    
    }
    else if(that.computerChoice==='scissor'&&choice==='paper'){
        that.computerScore=that.computerScore+1
       computer.html(that.computerScore)

        alert('computer won'+' '+ that.computerScore)
    
    }
    else if(that.computerChoice==='paper'&&choice==='scissor'){
        that.playerScore= that.playerScore+1
       player.html(that.playerScore)

        alert('player won'+' '+  that.playerScore)
    
    }else{
        alert("somthing wrong")
    }
    if(that.playerScore===5||that.computerScore===5){
        if(that.playerScore>that.computerScore){
            alert("congratulation player win"+' '+that.playerScore,that.computerScore)
       
      
        }
        if(that.playerScore<that.computerScore){
            alert("computer win! try again "+' '+that.computerScore,that.playerScore)
      
      
        }
        
    }
  
    
}
var game =StartGame()


$("#scissor").on('click', function(){
    game.computerRound()
    game.playGame("scissor")
    $('#player').attr('src',"./photo/scissor.png")



  })
  
   $("#rock").on('click',function(){
       game.computerRound()
       game.playGame("rock")
      $('#player').attr('src',"./photo/rock.png")

   })
  
   $("#paper").on('click',function(){
       game.computerRound()
       game.playGame("paper")
      $('#player').attr('src',"./photo/paper.png")
   })

// $(document).ready(function(){
//     $("again").click(function(){
//       return "0";
//     });
//     $("again").click(function(event){
//       $("counterC").html(event.result);
//     });  
//   });


// $("#again").on('click',function(){
    
//    $('#again').attr(that.computerScore=0)
//    $('#again').attr(that.playerScore=0)

// })