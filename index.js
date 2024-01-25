
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
    // console.log(that.computerChoice,choice.choice)
    $('#computer').attr('src',choice.url)
}
var playGame=function (choice){
    var that=this 
    // var player=$('.options')
    // var computer=$(that.computerRound())
    // var playerScore=$(".counterP")
    // var computerScore=$(".counterC")
    var player=$('.counterP') 
    var computer=$('.counterC') 


    // console.log(this);


    // console.log("computerscore",that.computerScore)
      if(choice=== that.computerChoice){
        alert("draw")
        
  
    } 
    else if(choice==='rock'&&that.computerChoice==='paper'){
       that.computerScore=that.computerScore+1
       computer.html(that.computerScore)
     alert(that.computerScore)
    }else if (choice==='paper'&&that.computerChoice==='rock'){
        that.playerScore= that.playerScore+1
        player.html(that.playerScore)
     alert( that.playerScore)
    } else if(choice==='rock'&&that.computerChoice==='scissor'){
        that.playerScore= that.playerScore+1
        player.html(that.playerScore)
        alert( that.playerScore)
    
    }
    else if(that.computerChoice==='rock'&&choice==='scissor'){
        that.computerScore=that.computerScore+1
       computer.html(that.computerScore)

        alert( that.computerScore)
    
    }
    else if(that.computerChoice==='scissor'&&choice==='paper'){
        that.computerScore=that.computerScore+1
       computer.html(that.computerScore)

        alert( that.computerScore)
    
    }
    else if(that.computerChoice==='paper'&&choice==='scissor'){
        that.playerScore= that.playerScore+1
       player.html(that.playerScore)

        alert(  that.playerScore)
    
    }else{
        alert("somthing wrong")
    }
    if(that.playerScore===5||that.computerScore===5){
        if(that.playerScore>that.computerScore){
            alert("player win")
            that.computerScore=0
           that.playerScore=0 
        }
        if(that.playerScore<that.computerScore){
            alert("computer win")
            that.computerScore=0
        that.playerScore=0
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


// $("#rock,#paper,#scisor").on('click',function(){
//     $('#rock').text('rock')
// })

// $("#scissor").on('click', function(){
//   $('#player').attr('src',"./photo/scissor.png")
// })

//  $("#rock").on('click',function(){
//     $('#player').attr('src',"./photo/rock.png")
//  })

//  $("#paper").on('click',function(){
//     $('#player').attr('src',"./photo/paper.png")
//  })