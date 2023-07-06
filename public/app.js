var questions = [
    {
        question: " Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question:"RAM stands for _____________",
        option:["random access memoery","hyper text markup language","html","html"],
        correctAns:"random access memoery"
    },
    {
        question:"ROM stands for _____________",
        option:["read only memory","hyper text markup language","html","html"],
        correctAns:"read only memory"
    }
]

var currentQ =document.getElementById("currentQ")
var totalQ =document.getElementById("totalQ")
var Question =document.getElementById("Question")
var ansopt =document.getElementById("ansopt")
var indexval=0;
var marks=0;


function renderque(){
    var obj =questions[indexval];
    Question.innerHTML=obj.question;
    currentQ.innerHTML=indexval +1;
    totalQ.innerHTML=questions.length;

    ansopt.innerHTML="";
    for(i=0;i<obj.option.length;i++){
        ansopt.innerHTML += `<div class="col-md-6 mt-2 " ' >
        <button class="btn btn-outline-primary  w-100 fs-2" onclick="ChwckANs('${obj.correctAns}','${obj.option[i]}')"  >${obj.option[i]}</button>
    </div>`
}

}
function nextque(){
    indexval++;
    renderque()
}

function ChwckANs(a,b){
    if(a == b){
        marks++
    }
    console.log(marks);
nextque();

}
renderque();