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

var imageUrls1 = [
    "img/diff1.webp",
    "img/diff2.webp",
    "img/diff3.png",
    "img/diff4.webp",
];

function diffimg() {
    var rotatingImage = document.getElementById("diffimg");
    var currentIndex = 0;
    rotatingImage.src = imageUrls1[currentIndex];

    setInterval(function() {
        currentIndex = (currentIndex + 1) % imageUrls1.length; // Loop back to the beginning if at the end
        rotatingImage.src = imageUrls1[currentIndex];
    }, 3000);
}

var imageUrls2 = [
    "img/move1.webp",
    "img/move2.webp",
    "img/move3.webp",
    "img/move4.webp",
    "img/move5.webp",
];

function moveimg() {
    var rotatingImage = document.getElementById("moveimg");
    var currentIndex = 0;
    rotatingImage.src = imageUrls2[currentIndex];

    setInterval(function() {
        currentIndex = (currentIndex + 1) % imageUrls2.length;
        rotatingImage.src = imageUrls2[currentIndex];
    }, 3000);
}

var imageUrls3 = [
    "img/w1.webp",
    "img/w2.webp",
    "img/w3.webp",
    "img/w4.webp",
    "img/w5.webp",
    "img/w6.webp",
    "img/w7.webp",
    "img/w8.webp",
    "img/w9.webp",
    "img/w10.webp",
    "img/w11.webp",
    "img/w12.webp",
];

function whatimg() {
    var rotatingImage = document.getElementById("whatimg");
    var currentIndex = 0;
    rotatingImage.src = imageUrls3[currentIndex];

    setInterval(function() {
        currentIndex = (currentIndex + 1) % imageUrls3.length;
        rotatingImage.src = imageUrls3[currentIndex];
    }, 3000);
}

function img() {
    diffimg();
    moveimg();
    whatimg();
}
window.onload = img;