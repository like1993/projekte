
    var alertBtn = document.getElementById("myBtn");
        alertBtn.onclick = function() {
    alert("ke klikuar buton");
    }

        //ndyshimi i ngjyrave te backgroundit
    function colorPicker() {
        var test = document.getElementsByClassName('bfh-colorpicker-icon');
        var color = test[0].style.backgroundColor;
        console.log(color);
        document.getElementById('changeBg').style.backgroundColor = color;
        return color;
    }
    
    function changeBgColor(){
        var col = colorPicker();
        document.getElementById('changeBg').style.backgroundColor = col;
        console.log(col);
    }
    
    document.getElementById('changeBg').style.backgroundColor = 'blue';//colorPicker();