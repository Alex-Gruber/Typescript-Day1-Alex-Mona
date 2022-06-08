let arrayNumbers: Array<number> = [1,2,3,4,5,6,7,8,9,10];

for(let i = 1; i <= arrayNumbers.length; i++) {
    for (let f = 1; f <= arrayNumbers.length; f++){
        let result = i * f;
        console.log(`${i}*${f} = ${result}`);
    }


    

}


let fullName :{fName:string,lName:string}={
    fName: "Alex",
    lName: "Gruber",
}


    document.write(fullName.fName+" "+fullName.lName);

    let alex = [fullName.fName]
    alex.forEach((x)=>{
        for(let i = 1; i<11; i++){
            document.write(i+x)
        }

    }) 
    let Gr = [fullName.lName]
    
    function timer():any {
    Gr.forEach((y)=>{
        for(let i = 1; i<6; i++){
            document.write(i+y)
        }

    })}

    setTimeout(timer,5000)

    // print index
    let names: string[] = ["Alex", "Stefan", "Sandra"];

    for(let i=0; i<names.length; i++){
        console.log(names.indexOf("Alex", "Stefan", "Sandra"));
       }

    console.log(names.indexOf("Alex"));
    console.log(names.indexOf("Stefan"));
    console.log(names.indexOf("Sandra"));

    // printvalues
    let namesPrint = ["Alex", "Stefan", "Sandra"];

for(let i=0; i<namesPrint.length; i++){
 console.log(names[i]);
}


  