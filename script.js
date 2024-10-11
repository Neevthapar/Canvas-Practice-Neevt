const myCanvas = document.getElementById("myDrawing");
        const myContext = myCanvas.getContext("2d");

        // Draw another circle
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100, 55, 20, 0, Math.PI*2);
        myContext.fill();
        // Draw another circle
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100, 90, 25, 0, Math.PI*2);
        myContext.fill();
        // Draw another circle
        myContext.fillStyle = "white";
        myContext.beginPath();
        myContext.arc(100, 130, 35, 0, Math.PI*2);
        myContext.fill();
        // Draw another circle
        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(112, 47, 5, 1, Math.PI*2);
        myContext.fill();
        // Draw another circle
        myContext.fillStyle = "black";
        myContext.beginPath();
        myContext.arc(90, 47, 5, 0, Math.PI*2);
        myContext.fill();
        // Draw rectangle
        myContext.fillStyle = "brown";
        myContext.beginPath();
        myContext.rect(59, 19, 80, 15);
        myContext.fill();
        // Draw rectangle
        myContext.fillStyle = "brown";
        myContext.beginPath();
        myContext.rect(79, 1, 40, 20);
        myContext.fill();
        // Draw triangle
        myContext.fillStyle = "darkgoldenrod";
        myContext.beginPath();
        myContext.moveTo(160, 60);
        myContext.lineTo(100, 59);
        myContext.lineTo(100, 50);
        myContext.fill();
// Draw another circle
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(90, 60, 3, 0, Math.PI*2);
myContext.fill(); 
// Draw another circle
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(99, 70, 3, 0, Math.PI*2);
myContext.fill();
// Draw another circle
myContext.fillStyle = "white";
myContext.beginPath();
myContext.arc(110, 79, 7, 0, Math.PI*2);
myContext.fill();

        
        
        
        
        
        
