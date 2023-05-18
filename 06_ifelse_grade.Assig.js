



function voteEligibility(age){

    if(age==null || age==undefined ){
        console.log(`Invalid Input  Age: ${age}`);

    } else{
        if( (age <=0 || age >=120)){
            console.log(`Invalid Data   Age: ${age}`);

        }else{
            if( (age <=0 || age >=18)){
                console.log(`Valid Data Age: ${age}`);
            } else{
                if((age<=0 || age >=21)){
                    console.log(`Invalid Data   Age:${age}`);

                } else{
                console.log(`Not Eligible for voting: ${age}`);
            
            }
        
        
        }
    }

    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);



