
let quiz = [];
let answers = [];
async function loadQuiz(topic){
  const res = await fetch('js/quiz_data.json');
  const data = await res.json();
  quiz = data[topic] || [];
  renderQuiz();
}
function renderQuiz(){
  const container = document.getElementById('quiz_container');
  if(!container) return;
  container.innerHTML = '';
  quiz.forEach((item, idx)=>{
    const qwrap = document.createElement('div');
    qwrap.className = 'card quiz-question';
    const qh = document.createElement('h4');
    qh.textContent = (idx+1) + '. ' + item.q;
    qwrap.appendChild(qh);
    const opts = document.createElement('div');
    opts.className = 'options';
    item.options.forEach((opt,i)=>{
      const id = `q${idx}_opt${i}`;
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type='radio'; input.name='q'+idx; input.id=id; input.value=i;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      opts.appendChild(label);
    });
    qwrap.appendChild(opts);
    container.appendChild(qwrap);
  });
  const submit = document.createElement('button');
  submit.className='btn';
  submit.textContent='Submit Answers';
  submit.onclick = evaluateQuiz;
  container.appendChild(submit);
}
function evaluateQuiz(){
  answers = [];
  let score=0;
  quiz.forEach((item, idx)=>{
    const selected = document.querySelector(`input[name='q${idx}']:checked`);
    const sel = selected ? parseInt(selected.value) : null;
    answers.push(sel);
    if(sel===item.answer) score++;
  });
  const resultDiv = document.getElementById('quiz_result');
  resultDiv.innerHTML = `<div class="card"><h3>Your score: ${score} / ${quiz.length}</h3></div>`;
  const detail = document.createElement('div');
  detail.className='card';
  const list = document.createElement('ol');
  quiz.forEach((item, idx)=>{
    const li = document.createElement('li');
    const userAns = answers[idx]===null ? 'No answer' : item.options[answers[idx]];
    const correctAns = item.options[item.answer];
    li.innerHTML = `<strong>Q${idx+1}:</strong> ${item.q}<br><strong>Your answer:</strong> ${userAns} <br><strong>Correct:</strong> ${correctAns} <br><em>Explanation:</em> ${item.ex}`;
    list.appendChild(li);
  });
  detail.appendChild(list);
  resultDiv.appendChild(detail);
  const cur = JSON.parse(sessionStorage.getItem('apticore_current')||'null');
  if(cur && !cur.isAdmin){
    const history = JSON.parse(localStorage.getItem('apticore_history_'+cur.username) || '[]');
    history.push({topic:document.getElementById('quiz_topic').value||'unknown', score, total:quiz.length, date:new Date().toISOString()});
    localStorage.setItem('apticore_history_'+cur.username, JSON.stringify(history));
  }
}