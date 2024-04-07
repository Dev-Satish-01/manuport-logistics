function move1() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar-1");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
} 
function move2() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar-2");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
} 
function move3() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar-3");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
} 
function move4() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar-4");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
} 
document.addEventListener("DOMContentLoaded", function() {
    var visible1 = document.getElementById("visible1");
    var invisible1 = document.getElementById("invisible1");

    visible1.addEventListener("click", function() {
        invisible1.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var visible2 = document.getElementById("visible2");
    var invisible2 = document.getElementById("invisible2");

    visible2.addEventListener("click", function() {
        invisible2.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var visible3 = document.getElementById("visible3");
    var invisible3 = document.getElementById("invisible3");

    visible3.addEventListener("click", function() {
        invisible3.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var visible4 = document.getElementById("visible4");
    var invisible4 = document.getElementById("invisible4");

    visible4.addEventListener("click", function() {
        invisible4.classList.toggle("show");
    });
});
