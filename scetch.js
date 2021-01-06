var nextscreen = function(oldscreen, newscreen) {
	document.getElementById(oldscreen).style.display = "none";
	document.getElementById(newscreen).style.display = "block";
}

var player1 = "Player 1"; 
var player2 = "Player 2"; 

   
    
         
  
    // Function to change the player name 
    function editNames() { 
        player1 = prompt("Change Player1 name"); 
        player2 = prompt("Change player2 name"); 
  
        document.querySelector("p.Player1").innerHTML = player1; 
        document.querySelector("p.Player2").innerHTML = player2; 
    } 
  
    // canvas + creating grid
    var squares = new Array();

        var canvas = document.getElementById("board");
        var context = canvas.getContext("2d");
        var contextText = canvas.getContext("2d");
        var squareSize = canvas.height / 10;
           
        var _currentPos = 0;
        
        RenderSquareBoard();
        RenderSnakeAndLadders();      

        function RenderSquareBoard() 
        {        
            var colorA = "#c2e0bc";
            var colorB = "#726d15";

            var initRow = 1; var totalRows = 10; var initcolumn = 1; var totalColumns = 10;

            var x = 0; var y = canvas.height - squareSize;

            var columnNr = 1; var leftToRight = true;
            for (var row = initRow; row <= totalRows; row++) 
            {
                if (leftToRight) 
                {
                    x = 0;
                }
                else 
                {
                    x = canvas.width - squareSize;
                }

                for (var column = initcolumn; column <= totalColumns; column++) 
                {
                    if (columnNr % 2 == 0) 
                    {
                        context.fillStyle = colorA;
                    }
                    else 
                    {
                        context.fillStyle = colorB;
                    }

                    context.fillRect(x, y, squareSize, squareSize);

                    squares[columnNr] = x.toString() + ',' + y.toString();

                    contextText.font = "15px tahoma";
                    contextText.fillStyle = "black";
                    
                    contextText.fillText(columnNr, x, y + squareSize);

                    var x1, y1
                    if (leftToRight) 
                    {
                        x += squareSize;

                        x1 = x + (squareSize / 2);
                    }
                    else 
                    {
                        x -= squareSize;
                        x1 = x - (squareSize / 2);
                    }

                    y1 = y - (squareSize / 2);

                    columnNr++;
                }

                y -= squareSize;
                leftToRight = !leftToRight;
            }
        }

        function RenderSnakeAndLadders()
        {
            
            var img = new Image();
            img.onload = function () 
            {
            context.drawImage(img, 66, 10); // 99 - 84
            };
            img.src = "img/snakes/ludoSnake5.png";
            
            var img1 = new Image();
            img1.onload = function () 
            {
            context.drawImage(img1, 66, 175);
            };
            img1.src = "img/snakes/ludoSnake7.png"; // 59 - 44
            
            var img2 = new Image();
            img2.onload = function () 
            {
            context.drawImage(img2, 275, 150);
            };
            img2.src = "img/snakes/ludoSnake10.png"; // 67- 31

            var img3 = new Image();
            img3.onload = function () 
            {
            context.drawImage(img3, 262, 280);
            };
            img3.src = "img/snakes/ludoSnake12.png"; // 34 - 7

            var img4 = new Image();
            img4.onload = function () 
            {
            context.drawImage(img4, 72, 50);
<<<<<<< HEAD
            };
            img4.src = "img/snakes/ludoSnake13.png"; // 86 - 39

            var img5 = new Image();
            img5.onload = function () {
                context.drawImage(img5, 50, 215);
            };
            img5.src = "img/ladders/ladder14.png"; // 22 - 44

            var img6 = new Image();
            img6.onload = function () 
            {
                context.drawImage(img6, 105, 90);
            };
            img6.src = "img/ladders/ladder15.png"; // 64 - 78 

            var img7 = new Image();
            img7.onload = function () 
            {
                context.drawImage(img7, 182, 270);
            };
            img7.src = "img/ladders/ladder2.png"; // 5- 35   

            var img8 = new Image();
            img8.onload = function () 
            {
                context.drawImage(img8, 350, 20);
            };
            img8.src = "img/ladders/ladder7.png";  // 72 - 92 

            var img9 = new Image();
            img9.onload = function () 
            {
                context.drawImage(img9, 269, 175);
            };
=======
            };
            img4.src = "img/snakes/ludoSnake13.png"; // 86 - 39

            var img5 = new Image();
            img5.onload = function () {
                context.drawImage(img5, 50, 215);
            };
            img5.src = "img/ladders/ladder14.png"; // 22 - 44

            var img6 = new Image();
            img6.onload = function () 
            {
                context.drawImage(img6, 105, 90);
            };
            img6.src = "img/ladders/ladder15.png"; // 64 - 78 

            var img7 = new Image();
            img7.onload = function () 
            {
                context.drawImage(img7, 182, 270);
            };
            img7.src = "img/ladders/ladder2.png"; // 5- 35   

            var img8 = new Image();
            img8.onload = function () 
            {
                context.drawImage(img8, 350, 20);
            };
            img8.src = "img/ladders/ladder7.png";  // 72 - 92 

            var img9 = new Image();
            img9.onload = function () 
            {
                context.drawImage(img9, 269, 175);
            };
>>>>>>> abc6cdac7a29de62236bdd2970525b4e46b3bb39
            img9.src = "img/ladders/ladder12.png";  // 48 - 54 
            
        }

        function initGame() 
        {
            window.location.reload();           
        }

        function GenerateRandomNumber(max) 
        {
            // max dictates that the random number will fall between 0-max
            var rnd = Math.floor(Math.random() * (max + 1))

            if (rnd == 0)
            {
                rnd = 1;
            }
        return rnd;
        }

        function nextMove() 
        {
            var newMove = GenerateRandomNumber(6);
            alert("You got : " + newMove);

            _currentPos = _currentPos + newMove;

            switch (_currentPos) 
            {
            //ladder
            case 5:
            _currentPos = 35;
            break;
            //ladder
            case 22:
            _currentPos = 44;
            break;
            //ladder
            case 48:
            _currentPos = 54;
            break;
            //ladder
            case 64:
            _currentPos = 78
            break;
            //ladder
            case 72:
            _currentPos = 92;
            break;
            //snake
            case 34:
            _currentPos = 7;
            break;
            //snake
            case 59:
            _currentPos = 44;
            break;
            //snake
            case 67:
            _currentPos = 31;
            break;
            //snake
            case 86:
            _currentPos = 39;
            break;
            //snake
            case 99:
            _currentPos = 84;
            break;             
            }

            var coorintaes = squares[_currentPos];
            var coorintaes1 = squares[_currentPos];
            coorintaes = coorintaes.split(',');
            // console.log(_currentPos)
            // console.log(coorintaes)
            context.fillRect(coorintaes[0], coorintaes[1], squareSize, squareSize);
            // context.fillStyle = colorA;
            // context.fillRect(coorintaes1[0], coorintaes1[1], squareSize, squareSize);
            
            if (_currentPos == 100)
            {
                alert("Congratulations, you have won the game :)");
                initGame();
            }
        }
<<<<<<< HEAD
=======

        
        
>>>>>>> abc6cdac7a29de62236bdd2970525b4e46b3bb39
