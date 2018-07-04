function range(start,end,...optional){
    var numbers=[];
    let i;
    if(end<start){
        console.log("Start can't be bigger than end");
    }
    
    else{
        for(i=0;start<=end;i++) {
            if(optional!=undefined){
                
            }
            else{
                numbers[i]=start;
                start++;
            }
            
        
        }
    }
}
    
    console.log(numbers);
    return numbers;
    
}

function sum(numbers){
    let result=0;
    for(let number of numbers){
        result= result+number;
    }
    console.log(result);
}