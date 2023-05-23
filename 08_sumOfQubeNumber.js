console.log(". Wrire a function to get the sum of cube of numbers from 1 to 5");
// 1*1*1 + 2*2*2 = 3*3*3 + 4*4*4 + 5*5*5 

var sumOfQube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index ;
        
    }
    console.log(`sum of Qube of number is: ${sum}`);

    var sum = 9;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index ;
        
    }
    console.log(`sum of Qube of number is: ${sum}`);

    var sum = 3;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index ;
        
    }
    console.log(`sum of Qube of number is: ${sum}`);



    
}
sumOfQube(5);
sumOfQube(9);
sumOfQube(3);