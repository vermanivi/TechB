const { global } = required("yargs");

function test1() {
    for (var i = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log(">>>>", i);
}

function test2() {
    for (leti = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log(">>>>", i);
}

function test3() {
    for (consti = 0; i <= 5; i++) {
        console.log(i);
    }
    console.log(">>>>", i);
}

//test3();


//2.Hoisting


function test4() {
    console.log(a);
    let a = 5;
}

function test5() {
    console.log(a);
    let a = 5;
}

function test6() {
    function test() {
        return 3;
    }

    return test;

    function test() {
        return 8;
    }
}

let test7 = test6();