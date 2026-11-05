const DAYS=[
 {"key":"seg","short":"SEG","name":"Segunda","focus":"A · Quadríceps + glúteos","type":"strength","ex":[["Agachamento livre com barra",4,"8–10",120,10,"Exercício principal; carga progressiva"],["Agachamento hack adaptado",3,"10–12",90,8,"Barra atrás do corpo; alternativa: calcanhares elevados"],["Agachamento búlgaro com halteres",3,"10 cada perna",90,11,"Descida de 3 segundos; cada perna"],["Hip thrust com barra",4,"8–12",120,10,"Segure 2 segundos no topo"],["Extensão de joelhos com caneleira",3,"12–15",60,6,"Substitui cadeira extensora"],["Abdução de quadril com band",3,"15–20",60,5,"Segure 2 segundos na abertura"]]},
 {"key":"ter","short":"TER","name":"Terça","focus":"Caminhada · 30–40 min","type":"walk","ex":[["Caminhada",1,"30–40 min",0,40,"Caminhada confortável a moderada"]]},
 {"key":"qua","short":"QUA","name":"Quarta","focus":"B · Membros superiores","type":"strength","ex":[["Remada curvada com barra",4,"8–12",120,10,"Costas; mantenha tronco estável"],["Supino com halteres no chão",4,"8–12",120,10,"Peito; cotovelos sob controle"],["Desenvolvimento com halteres",3,"10–12",90,7,"Ombros; controle a descida"],["Remada unilateral com halter",3,"10–12",90,9,"Cada braço; tronco estável"],["Elevação lateral",3,"12–15",60,5,"Última série: drop-set opcional"],["Rosca direta com barra",3,"10–12",60,6,"Sem balanço do corpo"],["Tríceps francês com halter",3,"10–12",60,6,"Cotovelos estáveis"],["Face pull com band",2,"15–20",60,4,"Elástico fixado com segurança"]]},
 {"key":"qui","short":"QUI","name":"Quinta","focus":"Caminhada · 30–40 min","type":"walk","ex":[["Caminhada",1,"30–40 min",0,40,"Caminhada confortável a moderada"]]},
 {"key":"sex","short":"SEX","name":"Sexta","focus":"C · Posteriores + glúteos","type":"strength","ex":[["Stiff com barra",4,"8–10",120,10,"Desça lentamente; coluna neutra"],["Elevação pélvica com barra",4,"10–12",120,10,"Segure 2 segundos no topo"],["Agachamento sumô com halter",3,"10–12",90,9,"Pés mais afastados; joelhos alinhados"],["Flexão de joelhos com toalha no chão",3,"10–12",75,9,"Deslize os calcanhares no chão"],["Coice de glúteo com caneleira",3,"12–15 cada perna",60,7,"Evite arquear a lombar"],["Abdução com band",3,"15–20",60,6,"Segure 2 segundos na abertura"]]},
 {"key":"sab","short":"SÁB","name":"Sábado","focus":"Descanso e recuperação","type":"recovery","ex":[]},
 {"key":"dom","short":"DOM","name":"Domingo","focus":"Descanso e recuperação","type":"recovery","ex":[]}
];
const EXECUTION_TIPS={
 "Agachamento livre com barra": "Antes de descer, firme o abdômen. Flexione quadris e joelhos com os pés apoiados e suba de forma controlada. Use suportes de segurança quando treinar com cargas pesadas.",
 "Agachamento hack adaptado": "Segure a barra atrás das pernas com pegada firme, abdômen ativo e coluna neutra; flexione joelhos e quadris, subindo sem perder o controle. Não reproduz exatamente a máquina. Se a pegada ou a mecânica incomodar, substitua pelo agachamento com calcanhares elevados e halteres.",
 "Agachamento búlgaro com halteres": "Apoie o pé de trás em uma base firme. Flexione lentamente o joelho da frente em cerca de 3 segundos, sem desequilibrar. Complete as repetições em cada perna.",
 "Hip thrust com barra": "Apoie a parte superior das costas em banco firme que não escorregue. Mantenha abdômen ativo, suba com os glúteos e segure 2 segundos no topo, sem hiperestender a lombar.",
 "Extensão de joelhos com caneleira": "Sentada em cadeira estável, estenda o joelho até onde consiga sem dor, pause um instante e desça controlando. Evite impulso.",
 "Abdução de quadril com band": "Coloque a miniband acima dos joelhos e abra os joelhos contra a resistência, sem perder a postura. Segure 2 segundos e retorne lentamente.",
 "Remada curvada com barra": "Incline o tronco pelo quadril, mantenha coluna neutra e abdômen firme. Puxe a barra em direção ao abdômen com os cotovelos para trás. Evite usar impulso.",
 "Supino com halteres no chão": "Deite de costas com joelhos flexionados, segure halteres ao lado do peito e empurre para cima. Desça até os braços tocarem suavemente o solo, mantendo pulsos alinhados.",
 "Desenvolvimento com halteres": "Sentada ou em pé, firme o abdômen. Empurre os halteres para cima sem arquear a lombar e retorne com controle.",
 "Remada unilateral com halter": "Apoie uma mão em superfície estável, mantenha a coluna neutra e puxe o halter em direção ao quadril. Alterne os lados.",
 "Elevação lateral": "Suba os halteres até perto da linha dos ombros, cotovelos levemente flexionados, sem balançar o tronco. O drop-set na última série é opcional.",
 "Rosca direta com barra": "Mantenha os cotovelos próximos ao tronco. Flexione os braços sem usar balanço e desça a barra lentamente.",
 "Tríceps francês com halter": "Com o halter acima da cabeça, flexione os cotovelos mantendo braços próximos às orelhas, depois estenda sem jogar a carga.",
 "Face pull com band": "Prenda o elástico em ponto firme próximo à altura do rosto. Puxe na direção dos olhos com cotovelos abertos e escápulas estáveis; controle o retorno.",
 "Stiff com barra": "Empurre o quadril para trás, joelhos ligeiramente flexionados e coluna neutra. Desça em cerca de 3 segundos até o limite confortável e suba estendendo o quadril.",
 "Elevação pélvica com barra": "Com as costas apoiadas em base firme, mantenha abdômen ativo. Eleve o quadril, segure 2 segundos e desça sem soltar o controle.",
 "Agachamento sumô com halter": "Afaste os pés mais que a largura dos ombros, pontas levemente para fora. Segure o halter à frente, agache com joelhos alinhados e retorne controlando.",
 "Flexão de joelhos com toalha no chão": "Deite de costas em piso liso, calcanhares sobre toalha. Eleve o quadril e deslize os pés para aproximar os calcanhares do corpo; retorne sem deixar o quadril cair. Evite piso escorregadio demais.",
 "Coice de glúteo com caneleira": "Em quatro apoios, mantenha o abdômen firme e estenda o quadril sem arquear a lombar. Faça todas as repetições de um lado e depois troque.",
 "Abdução com band": "Band acima dos joelhos. Abra as pernas contra a resistência, faça pausa de 2 segundos e retorne devagar.",
 "Caminhada": "Caminhe de 30 a 40 minutos, num ritmo confortável a moderado. Ajuste a intensidade para favorecer a recuperação da musculação."
};
const SUBSTITUTIONS={
 "Agachamento livre com barra": "Leg press → agachamento livre com barra",
 "Agachamento hack adaptado": "Máquina hack → hack com barra atrás do corpo ou agachamento com calcanhares elevados",
 "Agachamento búlgaro com halteres": "Leg press unilateral → agachamento búlgaro",
 "Hip thrust com barra": "Máquina de glúteos → hip thrust com barra",
 "Extensão de joelhos com caneleira": "Cadeira extensora → extensão de joelho com caneleira",
 "Abdução de quadril com band": "Cadeira abdutora → band",
 "Remada curvada com barra": "Remada baixa na máquina → remada curvada",
 "Supino com halteres no chão": "Supino máquina → supino com halteres no chão",
 "Desenvolvimento com halteres": "Desenvolvimento máquina → halteres",
 "Remada unilateral com halter": "Remada articulada → remada unilateral",
 "Elevação lateral": "Máquina de deltoide lateral → halteres",
 "Rosca direta com barra": "Rosca máquina → rosca direta com barra",
 "Tríceps francês com halter": "Tríceps na polia → tríceps francês com halter",
 "Face pull com band": "Face pull na polia → band ancorado",
 "Stiff com barra": "Stiff na máquina → stiff com barra",
 "Elevação pélvica com barra": "Máquina de glúteos → elevação pélvica com barra",
 "Agachamento sumô com halter": "Agachamento na máquina → agachamento sumô",
 "Flexão de joelhos com toalha no chão": "Mesa flexora → flexão de joelhos deslizante",
 "Coice de glúteo com caneleira": "Glúteo na polia → coice com caneleira",
 "Abdução com band": "Cadeira abdutora → band"
};
const LEGACY_EXECUTION_TIPS={
 'Mobilidade de tornozelo':'Mantenha o calcanhar no chão e leve o joelho lentamente para a frente. Faça sem dor e sem deixar o arco do pé desabar.',
 'Mobilidade de quadril':'Movimente o quadril com controle, sem compensar com a lombar. Respire e aumente a amplitude aos poucos.',
 'Mobilidade de tornozelo e quadril':'Faça cada movimento devagar, sem rebotes. Mantenha o tronco firme e trabalhe somente até uma amplitude confortável.',
 'Agachamento profundo sem peso':'Desça em 3 segundos, mantenha os joelhos alinhados com os pés, segure 1 segundo embaixo e suba controlando.',
 'Agachamento livre':'Inspire e trave o abdômen antes de descer. Desça em 2–3 segundos, mantenha a coluna neutra e suba empurrando o chão.',
 'Agachamento Hack':'Apoie toda a lombar, desça devagar até a amplitude segura e suba sem travar completamente os joelhos.',
 'Leg press 45°':'Mantenha quadril e lombar apoiados. Desça em 2–3 segundos, sem fechar demais o quadril, e empurre com o pé inteiro.',
 'Cadeira extensora':'Suba controlando, segure 1 segundo no alto e desça em 2–3 segundos. Não chute nem retire o quadril do banco.',
 'Cadeira flexora':'Flexione sem levantar o quadril, segure 1 segundo na contração e retorne lentamente sem deixar o peso bater.',
 'Stiff':'Empurre o quadril para trás com joelhos levemente flexionados. Desça em 3 segundos, coluna neutra, e suba contraindo glúteos.',
 'Panturrilha em pé':'Desça o calcanhar devagar, alongue por 1 segundo, suba o máximo possível e segure 1 segundo no topo.',
 'Elevação pélvica / Hip thrust':'Queixo levemente recolhido e abdômen firme. Suba pelo quadril, segure 2 segundos contraindo os glúteos e desça controlando.',
 'Abdução de quadril na máquina':'Abra os joelhos sem impulso, segure 1 segundo na abertura e volte lentamente sem deixar as placas baterem.',
 'Supino reto com barra':'Escápulas para trás e pés firmes. Desça a barra em 2–3 segundos até o peito e suba sem perder a posição dos ombros.',
 'Supino inclinado com halteres':'Mantenha escápulas apoiadas. Desça os halteres lentamente ao lado do peito e suba aproximando-os sem bater.',
 'Crucifixo na máquina':'Cotovelos levemente flexionados. Feche controlando, aperte o peito por 1 segundo e retorne devagar sem exagerar no alongamento.',
 'Desenvolvimento na máquina':'Mantenha costas apoiadas e abdômen firme. Empurre sem encolher os ombros e desça em 2–3 segundos.',
 'Elevação lateral':'Cotovelos levemente flexionados. Eleve até a linha dos ombros sem embalo e desça mais devagar do que subiu.',
 'Tríceps francês':'Mantenha cotovelos apontados para a frente. Desça em 2–3 segundos, alongue o tríceps e estenda sem abrir os cotovelos.',
 'Puxada alta pronada':'Peito aberto e ombros baixos. Puxe os cotovelos para baixo, segure 1 segundo e devolva a barra lentamente.',
 'Remada baixa neutra':'Mantenha o tronco estável. Puxe o triângulo em direção ao abdômen, junte as escápulas e retorne sem arredondar a coluna.',
 'Pulldown na polia':'Braços quase estendidos e tronco firme. Leve a barra até as coxas contraindo as costas e retorne devagar.',
 'Rosca direta com barra':'Cotovelos parados ao lado do corpo. Suba sem balançar o tronco e desça a barra em 2–3 segundos.',
 'Rosca martelo':'Punhos neutros e cotovelos imóveis. Suba controlando, segure brevemente e desça sem usar impulso.',
 'Rosca Scott':'Mantenha os braços apoiados. Suba sem tirar o cotovelo do banco e desça lentamente sem estender com violência.',
 'Prancha lateral':'Corpo alinhado da cabeça aos pés. Contraia abdômen e glúteos, mantenha o quadril elevado e respire normalmente.',
 'Abdominal no solo':'Mantenha a lombar controlada e eleve o tronco pela contração do abdômen. Evite puxar o pescoço.',
 'Elevação alternada de pernas':'Pressione a lombar no solo, eleve o quadril suavemente e alterne as pernas sem usar impulso.'
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const id=()=>crypto.randomUUID?.()||Date.now()+'-'+Math.random().toString(16).slice(2);
const defaults={weight:70,intensity:3.5,plans:{},sessions:{},history:[]};
let state=load(), activeDay=getDefaultDay(), timerId=null,timerSeconds=0;
function plansFromDays(){return Object.fromEntries(DAYS.map(d=>[d.key,{key:d.key,short:d.short,name:d.name,focus:d.focus,type:d.type,ex:d.ex.map((x,i)=>({id:`abc-${d.key}-${String(i+1).padStart(2,'0')}`,name:x[0],sets:x[1],reps:x[2],rest:x[3],minutes:x[4],note:x[5]}))}]))}
function hydrate(){const predefined=plansFromDays();DAYS.forEach(d=>{if(!state.plans[d.key])state.plans[d.key]=predefined[d.key]});save()}
function load(){try{return {...defaults,...JSON.parse(localStorage.getItem('fitcheck-state')||'{}')}}catch{return structuredClone(defaults)}}
function save(){localStorage.setItem('fitcheck-state',JSON.stringify(state))}
function getDefaultDay(){const n=new Date().getDay();return DAYS[(n+6)%7].key}
function localDate(d=new Date()){return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}
function dateKey(){return localDate()+'-'+activeDay}
function session(){return state.sessions[dateKey()]||(state.sessions[dateKey()]={done:{},logs:{}})}
function kcal(ex){return Math.round(Number(state.intensity)*3.5*Number(state.weight)/200*Number(ex.minutes))}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1800)}
function executionTip(name){return EXECUTION_TIPS[name]||LEGACY_EXECUTION_TIPS[name]||'Faça o movimento com controle, mantenha a postura firme e use uma carga que permita completar todas as repetições sem perder a técnica.'}
function youtubeUrl(name){return 'https://www.youtube.com/results?search_query='+encodeURIComponent(name+' execução correta academia')}
function renderToday(){
 const p=state.plans[activeDay],s=session();
 $('#todayLabel').textContent=p.name;$('#focusLabel').textContent=p.focus;
 const done=p.ex.filter(e=>s.done[e.id]).length,pct=p.ex.length?Math.round(done/p.ex.length*100):0;
 $('#progressText').textContent=pct+'%';$('#progressRing').style.setProperty('--p',pct);
 $('#progressCount').textContent=p.type==='recovery'?'Descanso programado':`${done} de ${p.ex.length} atividades`;
 $('#calorieTotal').textContent=p.type==='recovery'?'Recupere-se para o próximo treino':`≈ ${p.ex.filter(e=>s.done[e.id]).reduce((a,e)=>a+kcal(e),0)} kcal estimadas`;
 $('#addExerciseBtn').classList.toggle('hidden',p.type==='recovery');
 $('#finishBtn').classList.toggle('hidden',p.type==='recovery');
 $('#trainingHint').textContent=p.type==='walk'?'Caminhada de 30 a 40 minutos. Marque ao concluir.':p.type==='recovery'?'Sábado e domingo: descanso e recuperação.':'Aquecimento: 5–7 min · Sessão-alvo: 60 min · Registre suas cargas e repetições.';
 $('#exerciseList').innerHTML=p.type==='recovery'?'<div class="rest-card"><strong>Dia de recuperação</strong><p>Descanse e mantenha sua rotina de sono e alimentação. Treino de força retorna na segunda-feira.</p></div>':p.ex.map(e=>`<article class="exercise ${s.done[e.id]?'done':''}"><input class="check" type="checkbox" aria-label="Concluir ${esc(e.name)}" data-check="${e.id}" ${s.done[e.id]?'checked':''}><div class="exercise-body"><h3>${esc(e.name)}</h3><p>${p.type==='walk'?esc(e.reps):`${e.sets} séries × ${esc(e.reps)} · ${e.rest}s descanso`}</p>${e.note?`<p>${esc(e.note)}</p>`:''}${p.type==='walk'?'':`<div class="kcal">≈ ${kcal(e)} kcal</div>`}<details class="technique"><summary>Como executar e substituir máquinas</summary><p>${esc(executionTip(e.name))}</p>${SUBSTITUTIONS[e.name]?`<p><b>Alternativa à academia:</b> ${esc(SUBSTITUTIONS[e.name])}</p>`:''}<a href="${youtubeUrl(e.name)}" target="_blank" rel="noopener">▶ Ver demonstração no YouTube</a></details></div><button class="more" data-edit="${e.id}" aria-label="Editar ${esc(e.name)}">•••</button></article>`).join('');
 $$('[data-check]').forEach(c=>c.onchange=()=>toggleDone(c.dataset.check,c.checked));
 $$('[data-edit]').forEach(b=>b.onclick=()=>openExercise(b.dataset.edit));
}

function toggleDone(exId,checked){const p=state.plans[activeDay],ex=p.ex.find(e=>e.id===exId),s=session();if(checked){$('#logExerciseId').value=exId;$('#logTitle').textContent=ex.name;$('#logWeight').value=s.logs[exId]?.weight||'';$('#logReps').value=s.logs[exId]?.reps||'';$('#logNote').value=s.logs[exId]?.note||'';$('#strengthLogFields').classList.toggle('hidden',p.type==='walk');$('#walkLogFields').classList.toggle('hidden',p.type!=='walk');$('#logDuration').value=s.logs[exId]?.duration||40;$('#logDialog').showModal()}else{delete s.done[exId];delete s.logs[exId];s.celebrated=false;save();renderToday()}}
function openExercise(exId=''){const p=state.plans[activeDay],ex=p.ex.find(e=>e.id===exId);$('#exerciseDialogTitle').textContent=ex?'Editar exercício':'Adicionar exercício';$('#exerciseId').value=ex?.id||'';$('#exerciseName').value=ex?.name||'';$('#exerciseSets').value=ex?.sets||3;$('#exerciseReps').value=ex?.reps||'8–10';$('#exerciseRest').value=ex?.rest||90;$('#exerciseMinutes').value=ex?.minutes||5;$('#exerciseNote').value=ex?.note||'';$('#deleteExerciseBtn').classList.toggle('hidden',!ex);$('#exerciseDialog').showModal()}
function renderWeek(){const order=DAYS.map(d=>state.plans[d.key]);$('#weekList').innerHTML=order.map(p=>`<article class="week-day"><div><strong>${p.name} — ${esc(p.focus)}</strong><span>${p.type==='recovery'?'Sem exercícios':p.type==='walk'?'Caminhada · 30–40 min':`${p.ex.length} exercícios · ≈ 60 min`}</span></div><button data-day="${p.key}">Abrir</button></article>`).join('');$$('[data-day]').forEach(b=>b.onclick=()=>{activeDay=b.dataset.day;showScreen('todayScreen');renderToday()})}
function renderHistory(){const h=state.history;const total=h.length,kcalSum=h.reduce((a,x)=>a+x.kcal,0),streak=calcStreak(h);$('#historyStats').innerHTML=`<div class="stat"><strong>${total}</strong><span>treinos</span></div><div class="stat"><strong>${kcalSum}</strong><span>kcal estimadas</span></div><div class="stat"><strong>${streak}</strong><span>sequência</span></div>`;$('#historyList').innerHTML=h.length?h.slice().reverse().map(x=>`<article class="history-item"><div><strong>${esc(x.focus)}</strong><span>${new Date(x.date+'T12:00:00').toLocaleDateString('pt-BR')} · ${x.done}/${x.total} exercícios</span></div><b>≈ ${x.kcal} kcal</b></article>`).join(''):'<p class="week-head">Nenhum treino concluído ainda.</p>'}
function calcStreak(h){if(!h.length)return 0;const dates=[...new Set(h.map(x=>x.date))].sort().reverse();let s=1;for(let i=1;i<dates.length;i++){const a=new Date(dates[i-1]),b=new Date(dates[i]);if((a-b)/86400000<=3)s++;else break}return s}
function renderProgress(){const labels=['D','S','T','Q','Q','S','S'],now=new Date(),vals=[];for(let i=6;i>=0;i--){const d=new Date(now);d.setDate(now.getDate()-i);const k=localDate(d);vals.push(state.history.filter(x=>x.date===k).reduce((a,x)=>a+x.kcal,0))}const max=Math.max(...vals,1);$('#weekBars').innerHTML=vals.map((v,i)=>`<div class="bar-wrap"><div class="bar" style="height:${Math.max(4,v/max*110)}px" title="${v} kcal"></div><span>${labels[(now.getDay()-6+i+7)%7]}<br>${v}</span></div>`).join('');const vol=Object.values(state.sessions).flatMap(s=>Object.values(s.logs||{})).reduce((a,l)=>a+(Number(l.weight)||0)*(Number(l.reps)||0),0);$('#volumeTotal').textContent=Math.round(vol).toLocaleString('pt-BR')+' kg'}
function showScreen(id){$$('.screen').forEach(s=>s.classList.toggle('active',s.id===id));$$('.nav').forEach(n=>n.classList.toggle('active',n.dataset.screen===id));const titles={todayScreen:'Treino de hoje',weekScreen:'Minha semana',historyScreen:'Histórico',progressScreen:'Progresso'};$('#screenTitle').textContent=titles[id];if(id==='weekScreen')renderWeek();if(id==='historyScreen')renderHistory();if(id==='progressScreen')renderProgress();scrollTo(0,0)}
function startTimer(sec){clearInterval(timerId);timerSeconds=sec;$('#timer').classList.remove('hidden');tick();timerId=setInterval(()=>{timerSeconds--;tick();if(timerSeconds<=0){clearInterval(timerId);navigator.vibrate?.([200,100,200]);toast('Descanso concluído!');$('#timer').classList.add('hidden')}},1000)}
function tick(){const m=Math.floor(Math.max(0,timerSeconds)/60),s=Math.max(0,timerSeconds)%60;$('#timerText').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')}
function finishWorkout(){const p=state.plans[activeDay],s=session(),done=p.ex.filter(e=>s.done[e.id]);if(!done.length)return toast('Marque ao menos um exercício');const day=localDate();state.history=state.history.filter(x=>!(x.date===day&&x.day===activeDay));state.history.push({date:day,day:activeDay,focus:p.focus,done:done.length,total:p.ex.length,kcal:done.reduce((a,e)=>a+kcal(e),0)});save();toast('Treino salvo no histórico!');renderToday()}
function esc(t=''){return String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
function celebrate(){const box=$('#celebration');box.innerHTML='<div class="celebration-copy"><strong>Treino completo!</strong><span>Desafio do dia concluído 🔥</span></div>'+Array.from({length:70},(_,i)=>`<i style="--x:${Math.random()*100};--d:${Math.random()*1.4};--r:${Math.random()*720-360};--c:${i%6}"></i>`).join('');box.classList.remove('hidden');navigator.vibrate?.([120,80,120,80,250]);setTimeout(()=>box.classList.add('hidden'),4200)}
function celebrateIfComplete(){const p=state.plans[activeDay],s=session();if(p.type==='strength'&&p.ex.length&&p.ex.every(e=>s.done[e.id])&&!s.celebrated){s.celebrated=true;save();celebrate()}}

hydrate();renderToday();
$$('.nav').forEach(n=>n.onclick=()=>showScreen(n.dataset.screen));
$('#addExerciseBtn').onclick=()=>openExercise();
$('#applyABCBtn').onclick=()=>{
 if(!confirm('Aplicar a ficha ABC em casa? Os treinos atuais serão substituídos, mas seu histórico e suas configurações serão preservados. Recomendamos exportar um backup antes.'))return;
 state.plans=plansFromDays();save();activeDay=getDefaultDay();showScreen('weekScreen');toast('Ficha ABC aplicada!');
};
$('#finishBtn').onclick=finishWorkout;
$('#exerciseForm').addEventListener('submit',e=>{e.preventDefault();const p=state.plans[activeDay],eid=$('#exerciseId').value,ex={id:eid||id(),name:$('#exerciseName').value.trim(),sets:+$('#exerciseSets').value,reps:$('#exerciseReps').value.trim(),rest:+$('#exerciseRest').value,minutes:+$('#exerciseMinutes').value,note:$('#exerciseNote').value.trim()};if(eid)p.ex[p.ex.findIndex(x=>x.id===eid)]=ex;else p.ex.push(ex);save();$('#exerciseDialog').close();renderToday();toast('Exercício salvo')});
$('#deleteExerciseBtn').onclick=()=>{const eid=$('#exerciseId').value,p=state.plans[activeDay];if(confirm('Excluir este exercício?')){p.ex=p.ex.filter(x=>x.id!==eid);save();$('#exerciseDialog').close();renderToday()}};
$('#logForm').addEventListener('submit',e=>{e.preventDefault();const eid=$('#logExerciseId').value,s=session(),ex=state.plans[activeDay].ex.find(x=>x.id===eid);s.done[eid]=true;s.logs[eid]=state.plans[activeDay].type==='walk'?{duration:+$('#logDuration').value||40,weight:0,reps:0,note:$('#logNote').value.trim()}:{weight:+$('#logWeight').value||0,reps:+$('#logReps').value||0,note:$('#logNote').value.trim()};save();$('#logDialog').close();renderToday();celebrateIfComplete();if(ex.rest)startTimer(ex.rest)});
$('#logDialog').addEventListener('close',()=>renderToday());
$('#settingsBtn').onclick=()=>{$('#bodyWeight').value=state.weight;$('#intensity').value=state.intensity;$('#settingsDialog').showModal()};
$('#settingsForm').addEventListener('submit',e=>{e.preventDefault();state.weight=+$('#bodyWeight').value;state.intensity=+$('#intensity').value;save();$('#settingsDialog').close();renderToday();toast('Configurações salvas')});
$('#changeDayBtn').onclick=()=>{$('#dayChoices').innerHTML=DAYS.map(d=>`<button value="cancel" data-choice="${d.key}"><b>${d.name}</b><br>${esc(state.plans[d.key].focus)}</button>`).join('');$$('[data-choice]').forEach(b=>b.onclick=()=>{activeDay=b.dataset.choice;renderToday()});$('#dayDialog').showModal()};
$('#timerMinus').onclick=()=>{timerSeconds=Math.max(0,timerSeconds-15);tick()};$('#timerPlus').onclick=()=>{timerSeconds+=15;tick()};$('#timerStop').onclick=()=>{clearInterval(timerId);$('#timer').classList.add('hidden')};
$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='fitcheck-backup.json';a.click();URL.revokeObjectURL(a.href)};
$('#importInput').onchange=async e=>{try{const data=JSON.parse(await e.target.files[0].text());if(data.fitcheckPlan===true&&data.plans){state.plans={...state.plans,...data.plans}}else if(data.plans){if(!confirm('Importar backup completo vai substituir sua ficha e seu histórico atual. Deseja continuar?'))return;state={...defaults,...data}}else throw 0;save();renderToday();toast('Backup importado')}catch{toast('Arquivo inválido')}};
$('#deleteHistoryBtn').onclick=()=>{if(confirm('Apagar apenas o histórico de treinos concluídos? Sua ficha e configurações serão mantidas.')){state.history=[];state.sessions={};save();renderToday();renderHistory();renderProgress();toast('Histórico apagado')}};
$('#resetBtn').onclick=()=>{if(confirm('Apagar treinos, histórico e configurações?')){localStorage.removeItem('fitcheck-state');location.reload()}};
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
if(document.modelContext?.registerTool){const ac=new AbortController();document.modelContext.registerTool({name:'read_today_workout',title:'Ler treino de hoje',description:'Retorna o treino ativo e seu progresso atual.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>{const p=state.plans[activeDay],s=session();return{day:p.name,focus:p.focus,exercises:p.ex.map(e=>({name:e.name,sets:e.sets,reps:e.reps,done:!!s.done[e.id]}))}}},{signal:ac.signal});document.modelContext.registerTool({name:'complete_exercise',title:'Concluir exercício',description:'Marca um exercício do treino ativo como concluído.',inputSchema:{type:'object',properties:{exerciseName:{type:'string'}},required:['exerciseName'],additionalProperties:false},annotations:{readOnlyHint:false},execute:({exerciseName})=>{const p=state.plans[activeDay],ex=p.ex.find(e=>e.name.toLowerCase()===String(exerciseName).toLowerCase());if(!ex)throw new Error('Exercício não encontrado');session().done[ex.id]=true;save();renderToday();return{name:ex.name,done:true}}},{signal:ac.signal})}
