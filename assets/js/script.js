var arrr = [1, 5, 8, 9, 25, 60];

function find(num) {

    for (let i = 0; i < arrr.length; i++) {

        if (arrr[i] == num) {
            console.log("We found it, it is under index", [i]);
            return;
        }
    }
    return console.log("The number is not exist in this array");
};

find(5);

function even(num) {

    for (let i = 0; i < arrr.length; i++) {

        if (arrr[i] % 2 == 0) {
        console.log("We found even number it is under index", [i]);
        }
    }    
};

even(5);