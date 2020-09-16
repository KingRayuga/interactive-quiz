const correctAnswer = ['D','A','A','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const colorChanger = document.querySelector('.quiz');

colorChanger.style.background = "#341b6f";
result.style.background = "rgb(71 66 82)";
result.style.color = "#fff";

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswer.forEach((answer,index)=>{
        if(answer===correctAnswer[index])
        {
            score+= 25;
        }
    });
    console.log('hello');
    const checkThat = document.querySelectorAll('input');
    console.log(checkThat);
    checkThat.forEach(e=>{
        console.log(e);
        e.checked = false;
    });


    scrollTo(0,0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output===score)
        {
            clearInterval(timer);
        }
        else
        {
            output++;
        }
    },10);
});