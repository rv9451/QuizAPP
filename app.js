const question =[{
    'que' : 'Which of the following is a markup language?',
    'a':'HTML',
    'b': 'CSS',
    'c': 'JAVASCRIPT',
    'd': 'PHP',
    'correct':'a'
},
{
    'que' : 'What year of Javascript was launched?',
    'a':'1996',
    'b': '1995',
    'c': '1994',
    'd': 'none of the above',
    'correct':'b'
},
{
    'que' : 'Which of the following is a ServerSide Scripting language?',
    'a':'HTML',
    'b': 'Java',
    'c': 'JAVASCRIPT',
    'd': 'PHP',
    'correct':'d'
},
{
    'que' : 'Which of the following is a ClientSide Scripting language?',
    'a':'Pyton',
    'b': 'Java',
    'c': 'JAVASCRIPT',
    'd': 'PHP',
    'correct':'c'
},
{
    'que' : 'Who was developed C language?',
    'a':'Dennis Ritchie',
    'b': 'Rusmuss Lardrof',
    'c': 'Guido Van',
    'd': 'None of these',
    'correct':'a'
},
{
    'que' : 'Is C complied or Intrpreted language?',
    'a':'Interpreted',
    'b': 'Compiled',
    'c': 'Both',
    'd': 'None of these',
    'correct':'b'
},
{
    'que' : 'Is Python complied or Intrpreted language?',
    'a':'Interpreted',
    'b': 'Compiled',
    'c': 'Both',
    'd': 'None of these',
    'correct':'a'
},
{
    'que' : 'What is the latest version of CSS?',
    'a':'CSS',
    'b': 'CSS5',
    'c': 'CSS3',
    'd': 'None of these',
    'correct':'c'
},
{
    'que' : 'What is the full form of SRS',
    'a':'Service Requirement Service',
    'b': 'Secure Requirement Service',
    'c': 'Software Requirement Service',
    'd': 'All of these',
    'correct':'c'
},
{
    'que' : 'What is the latest version of JS?',
    'a':'JS3',
    'b': 'JS5',
    'c': 'JSE',
    'd': 'JSE6',
    'correct':'d'
}

]

let index =0;
let total = question.length;
let right=0;
    wrong= 0;
const quebox = document.getElementById('quebox');
const optinput = document.querySelectorAll('.option');
const loadquestion = ()=>{
    if(index=== total){
        return endquiz();
    }
    reset()
    const data = question[index];
    console.log(data);
    quebox.innerText=`${index+1}) ${data.que}`;
    optinput[0].nextElementSibling.innerText = data.a;
    optinput[1].nextElementSibling.innerText = data.b;
    optinput[2].nextElementSibling.innerText = data.c;
    optinput[3].nextElementSibling.innerText = data.d;
}
const submit = ()=>{
    const data = question[index];
    const ans = getans()
    // console.log(ans ,right);
    if(ans==data.correct){
     right++;
    }
    else{
     wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getans = ()=>{
    let answer;
    optinput.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
            
        }
        
    )
    return answer;
    
}

const reset =()=>{
    optinput.forEach(
        (input)=>{
            input.checked=false;  
        }
    )
}

const endquiz = ()=>{
    document.getElementById('box').innerHTML=`
    <div style = "text-align:center">
    <h3> Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}
// intial  call
loadquestion()
