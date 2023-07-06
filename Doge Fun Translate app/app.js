var btntranslate  = document.querySelector("#btn-translate"); // get button
var txtInput = document.querySelector("#txt-input"); // get input
var outputDiv = document.querySelector("#Output"); //get output
 
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" 

var serverURL = " https://api.funtranslations.com/translate/doge.json" // we want to talk to the dog server
/*fetch()*/
function gettranslation(input){
    return serverURL + "?" + "text=" + input // serverurl + query  + key= + value
}

/*Error handler*/
function errorhandler(error) {
    console.log("error occured", error);
    alert("Try again later")
}

function clickHandler() {
     
    var inputText = txtInput.value; //ip

    // call server processing 
    fetch(gettranslation(inputText))
    .then(response => response.json()) // the processing part went to server
     
    .then(abc => {
        var translatedText = abc.contents.translated;
        outputDiv.innerText = translatedText; //op
    })
};

btntranslate.addEventListener ("click", clickHandler) 
    
