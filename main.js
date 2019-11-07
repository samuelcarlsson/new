

let myData = [2,"sträng",false,3.14];

function showData(){
      
    //loopa över myData med namngiven callback
    //myData.forEach(printData)

    /* for(let index in myData)
    {
        console.log(myData[index]);
    } */

    //loopa över myData med anonym callback
    let changedData = myData.map(function(value){
        return "<li>" + value + "</li>";
    });
    document.write("<ul>" + changedData.join("") + "</ul>")
    
}

function printData(value){
    console.log(value);

}