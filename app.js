function check(){
    var rightanswer1=document.getElementById('q1-a1');
    var q2answer=document.getElementById('q1-a2');
    var q3answer=document.getElementById('q1-a3');
    var q3answer=document.getElementById('q1-a4');
    if(rightanswer1.checked ==true){
        score++
        alert('Q1 answer is right')
    }
    else{
        alert('Q1 answer is wrong')
    }
    var rightanswer2=document.getElementById('q2-a1');
    var q2answer=document.getElementById('q2-a2');
    var q3answer=document.getElementById('q2-a3');
    var q3answer=document.getElementById('q2-a4');
    if(rightanswer2.checked ==true){
        score++
        alert('Q2 answer is right')
    }
    else{
        alert('Q2 answer is wrong')
    }
    var rightanswer3=document.getElementById('q3-a1');
    var q2answer=document.getElementById('q3-a2');
    var q3answer=document.getElementById('q3-a3');
    var q3answer=document.getElementById('q3-a4');
    if(rightanswer3.checked ==true){
        score++
        alert('Q3 answer is right')
    }
    else{
        alert('Q3 answer is wrong')
        alert("your score is"+score++)
    }
}