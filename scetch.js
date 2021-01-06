var nextscreen = function(oldscreen, newscreen) {
	document.getElementById(oldscreen).style.display = "none";
	document.getElementById(newscreen).style.display = "block";
}

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
            case 6:
            _currentPos = 46;
            break;
            //ladder
            case 39:
            _currentPos = 79;
            break;
            //snake
            case 99:
            _currentPos = 29;
            break;
            //snake
            case 72:
            _currentPos = 2;
            break;             
            }

            var coorintaes = squares[_currentPos];
            coorintaes = coorintaes.split(',');

            context.fillRect(coorintaes[0], coorintaes[1], squareSize, squareSize);

            if (_currentPos == 100)
            {
                alert("Congratulations, you have won the game :)");
                initGame();
            }
        }

        
        