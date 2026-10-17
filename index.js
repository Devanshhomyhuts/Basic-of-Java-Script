
//  console.log("Hello World");
// //  console.error("This is an error message");
//  var number1 = 10;
//  var number2 = 20;
// //  console.log(number1 + number2);

//  var marks = {
//     student1: 85,
//     student2: 90,
//     student3: 78
//  }
// //  console.log(marks) 

// //  var a = true ;
// //  var b = false ;
// //  console.log(a && b); // false


//  var arr = [1, 2, "three", 4, 5]
// //  console.log(arr)
// // console.log("The sum of number1 and number2 is: " + (number1 + number2));
// // console.log("The value of student1 is: " +(number1 - number2));
// // console .log("The value of student2 is: " + (number1 * number2));

// // function sum(a , b) {
// //  var sum;
// //     sum = a + b;
// //     return sum;
// // }
// // console.log(sum(13, 10));
// // console.log(sum(5, 40));

// // var age = 8;
// // if (age >= 18) {
// //     console.log("You are eligible to vote.");
// // }
// // else{
// //     console.log("You are not eligible to vote.");
// // }
// let   arr=[1, 2, 3, 4, 5];
// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(element) {
//     console.log(element );
// });


    add = document.getElementById("add");
    add.addEventListener("click", () => {
        console.log("Updating List...")
        if (localStorage.getItem('itemsJson') == null) {
            itemJsonArray = [];
            itemJsonArray.push([taskInput.value, taskDescription.value])
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
        else{
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([taskInput.value, taskDescription.value])
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
    });

