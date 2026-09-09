
let state={page:"home",phase:0,sceneStage:0,filters:{kw:true,ww:true,abw:true,rw:true},answered:{},examScore:0};
const app=document.getElementById("app");

function doneSet(){return JSON.parse(localStorage.getItem("hausbau_done")||"[]")}
function completed(){return doneSet().length}
function nextPhase(){let d=doneSet();for(let i=0;i<PHASES.length;i++)if(!d.includes(i))return i;return 0}
function nav(){
 const items=[["home","⌂","Übersicht"],["phases","A–Z","Bauphasen"],["building","▱","Gebäude"],["learn","◆","Lernen"],["exam","✓","Prüfen"]];
 document.getElementById("nav").innerHTML=items.map(x=>`<button class="${state.page===x[0]?'active':''}" onclick="go('${x[0]}')"><b>${x[1]}</b>${x[2]}</button>`).join("");
}
function top(){
 return `<div class="topbar"><div class="brand">Hausbau A–Z<small>Gebäudetechnikplanung Sanitär EFZ · Prüfungstrainer</small></div><div class="status"><span class="badge">BBZ Zürich</span><span class="badge">Baukonstruktion</span><span class="badge">${completed()} / ${PHASES.length} gelernt</span></div></div>`;
}
function go(p){
 state.page=p;
 if(p==="home")home();
 else if(p==="phases")phaseList();
 else if(p==="building")building();
 else if(p==="learn")learn();
 else if(p==="exam")exam();
 nav();window.scrollTo({top:0,behavior:"smooth"})
}
function home(){
 state.page="home";
 const pc=Math.round(completed()/PHASES.length*100);
 app.innerHTML=top()+`
 <h1>Hausbau verstehen.<br>Vom Grundstück bis zur Übergabe.</h1>
 <p class="lead">Für die Prüfung zählt nicht nur die Reihenfolge. Entscheidend ist zu verstehen, <b>was in jeder Bauphase passiert, warum sie nötig ist und wo die Sanitärplanung betroffen ist.</b></p>
 <div class="actions"><button class="primary" onclick="openPhase(${nextPhase()})">Weiterlernen</button><button class="secondary" onclick="go('phases')">Alle Bauphasen</button><button class="ghost" onclick="go('exam')">Prüfung starten</button></div>
 <h2>Lernstand</h2>
 <div class="grid">
  <div class="card s4"><div class="kicker">Fortschritt</div><div class="metric">${pc}% <small>bearbeitet</small></div><div class="progress"><i style="width:${pc}%"></i></div></div>
  <div class="card s4"><div class="kicker">Lernumfang</div><div class="metric">${PHASES.length} <small>Bauphasen</small></div><p class="muted">Projektstart, Erdarbeiten, Rohbau, Ausbau, Technik und Übergabe.</p></div>
  <div class="card s4"><div class="kicker">Prüfungsfokus</div><div class="metric">5 <small>Fragetypen</small></div><p class="muted">Reihenfolge · Zweck · Begriffe · Schnittstellen · Fehler erkennen.</p></div>
 </div>
 <h2>Der rote Faden</h2>
 <div class="grid">
  <div class="card s7" style="padding:0;overflow:hidden"><div class="visual">${sceneSVG(Math.min(16,Math.floor(pc/100*16)),false,false)}</div></div>
  <div class="card s5"><div class="kicker">Merkschema</div><ol class="steps">
   <li><b>Planen & koordinieren</b><br><span class="muted">Bedürfnisse, Grundstück, Vermessung, Pläne.</span></li>
   <li><b>Unter den Boden</b><br><span class="muted">Aushub, Grundleitungen, Fundation, Bodenplatte.</span></li>
   <li><b>Rohbau hochziehen</b><br><span class="muted">Keller, Wände, Decken, Dach, Gebäudehülle.</span></li>
   <li><b>Technik & Ausbau</b><br><span class="muted">Rohinstallation, Vorwände, Oberflächen, Endmontage.</span></li>
   <li><b>Prüfen & übergeben</b><br><span class="muted">Inbetriebnahme, Dokumentation, Betrieb.</span></li>
  </ol></div>
 </div>
 <h2>Sechs Kernideen für die Prüfung</h2>
 <div class="grid">
 ${[
 ["Plan ≠ Realität","Pläne sind die gemeinsame Sprache. Lage, Höhe, Platz und Bauablauf müssen aber in der Realität funktionieren."],
 ["Grundriss + Schnitt","Grundriss zeigt Lage. Schnitt zeigt Höhe. Für Gebäudetechnik braucht man fast immer beides."],
 ["Früh koordinieren","Durchbrüche, Schächte, Einlagen und Technikräume werden möglichst früh abgestimmt."],
 ["Tragwerk respektieren","Tragende Bauteile dürfen nicht ungeplant geschwächt oder durchdrungen werden."],
 ["Höhen mitdenken","Besonders Entwässerung funktioniert nur, wenn die Höhenführung stimmt."],
 ["Lebenszyklus","Gute Planung denkt Bedienung, Wartung, Reparatur und spätere Änderungen mit."]
 ].map(x=>`<div class="card s4"><div class="kicker">${x[0]}</div><p>${x[1]}</p></div>`).join("")}
 </div>
 <h2>Grundlage dieser Lernapp</h2>
 <div class="card sourcebox">Die App verwendet die schulische Übersicht «Wie entsteht ein Haus?» als visuellen Ausgangspunkt und erweitert sie um verständliche, prüfungsorientierte Bauphasen. Die Darstellung ist bewusst schematisch: Sie erklärt Zusammenhänge, ersetzt aber keine projektspezifischen Pläne, Statik oder verbindlichen Normen.</div>
 `;
 nav();
}
function phaseList(){
 state.page="phases";let d=doneSet();
 app.innerHTML=top()+`
 <h1>Bauphasen A–Z</h1>
 <p class="lead">Nicht als Liste auswendig lernen. Öffne jede Phase und verstehe <b>Zweck, Ablauf, Fachbegriffe, typische Fehler und den Bezug zur Sanitärplanung.</b></p>
 <div style="margin:20px 0"><input class="search" id="phaseSearch" placeholder="Bauphase oder Fachbegriff suchen …" oninput="filterPhases(this.value)"></div>
 <div class="timeline" id="phaseGrid">${phaseCards("",d)}</div>`;
 nav();
}
function phaseCards(q,d){
 q=(q||"").toLowerCase().trim();
 return PHASES.map((p,i)=>({p,i})).filter(x=>!q||JSON.stringify(x.p).toLowerCase().includes(q)).map(({p,i})=>
 `<div class="phase ${d.includes(i)?'done':''}" onclick="openPhase(${i})"><div class="num">${String(i+1).padStart(2,"0")}</div><div><div class="title">${p.t}</div><div class="desc">${p.s}</div></div></div>`).join("");
}
function filterPhases(q){document.getElementById("phaseGrid").innerHTML=phaseCards(q,doneSet())}
function openPhase(i){state.phase=i;state.page="lesson";renderLesson(i);nav();window.scrollTo({top:0,behavior:"smooth"})}
function markDone(i){let a=doneSet();if(!a.includes(i))a.push(i);localStorage.setItem("hausbau_done",JSON.stringify(a));renderLesson(i)}
function renderLesson(i){
 let p=PHASES[i],done=doneSet().includes(i);
 app.innerHTML=top()+`
 <div class="lessonHead"><button class="back" onclick="go('phases')">← Bauphasen</button><div class="badge">${done?'✓ Gelernt':'Noch offen'}</div></div>
 <div class="lessonIndex">Bauphase ${String(i+1).padStart(2,"0")} / ${PHASES.length}</div>
 <div class="lessonTitle">${p.t}</div><p class="lessonSub">${p.s}</p>
 <div class="tabs"><button onclick="scrollToId('verstehen')">Verstehen</button><button onclick="scrollToId('begriffe')">Begriffe</button><button onclick="scrollToId('san')">Sanitärbezug</button><button onclick="scrollToId('check')">Kurzcheck</button></div>
 <div id="verstehen" class="grid">
  <div class="card s7" style="padding:0;overflow:hidden">
   <div class="visual">${sceneSVG(p.scene,false,false)}</div>
   <div class="stageControl"><span class="kicker" style="margin:0">Baufortschritt</span><input type="range" min="0" max="16" value="${p.scene}" oninput="this.nextElementSibling.textContent=stageLabel(+this.value);this.closest('.card').querySelector('.visual').innerHTML=sceneSVG(+this.value,false,false)"><span class="stageName">${stageLabel(p.scene)}</span></div>
  </div>
  <div class="card s5"><div class="kicker">Warum diese Phase wichtig ist</div><p>${p.why}</p><div class="callout good"><strong>Merksatz:</strong> ${MEMORY[i]||p.why}</div></div>
 </div>
 <h2>Ablauf – einfach erklärt</h2>
 <div class="grid">
  <div class="card s7"><ol class="steps">${p.steps.map(x=>`<li>${x}</li>`).join("")}</ol></div>
  <div class="card s5"><div class="kicker">Prüfungsfrage</div><p><b>${p.exam}</b></p><div class="callout warn"><strong>Typischer Fehler:</strong> ${p.error}</div></div>
 </div>
 <h2 id="begriffe">Fachbegriffe</h2>
 <div class="card">${p.terms.map(x=>`<div class="term"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>
 <h2 id="san">Bezug zur Sanitärplanung</h2>
 <div class="card"><div class="callout"><strong>Planer-Sicht:</strong> ${p.san}</div>
 <div class="factgrid" style="margin-top:12px"><div class="fact"><b>Im Grundriss prüfen</b>Lage, Achsen, Räume, Leitungswege und Anschlusspunkte.</div><div class="fact"><b>Im Schnitt prüfen</b>Höhen, Geschosse, Durchbrüche, Gefälle und vertikale Leitungsführung.</div></div></div>
 <h2 id="check">Kurzcheck</h2>${phaseCheck(i)}
 <div class="actions"><button class="${done?'secondary':'primary'}" onclick="markDone(${i})">${done?'✓ Als gelernt markiert':'✓ Phase verstanden'}</button>${i<PHASES.length-1?`<button class="secondary" onclick="openPhase(${i+1})">Nächste Phase →</button>`:''}</div>
 `;
 nav();
}
function phaseCheck(i){
 let p=PHASES[i],wrong=(i+6)%PHASES.length;
 return `<div class="quizQ"><p>Welche Aussage passt am besten zu «${p.t}»?</p><div class="answers">
 <button class="ans" onclick="localAnswer(this,true,'${esc(p.why)}')">${shorten(p.why)}</button>
 <button class="ans" onclick="localAnswer(this,false,'${esc(p.why)}')">${shorten(PHASES[wrong].why)}</button>
 </div><div class="feedback"></div></div>`;
}
function shorten(s){return s.length>118?s.slice(0,115)+"…":s}
function esc(s){return s.replaceAll("'","&#39;").replaceAll('"',"&quot;")}
function localAnswer(btn,ok,why){
 let q=btn.closest(".quizQ");q.querySelectorAll(".ans").forEach(b=>b.disabled=true);btn.classList.add(ok?"correct":"wrong");
 let f=q.querySelector(".feedback");f.classList.add("show");f.innerHTML=ok?`<b style="color:var(--green)">Richtig.</b> ${why}`:`<b style="color:var(--red)">Noch nicht.</b> ${why}`;
}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})}
function stageLabel(s){return ["Grundstück","Planung","Baugrube","Leitungen","Fundation","Bodenplatte","Untergeschoss","Wände","Decken","Dach","Gebäudehülle","Rohinstallation","Vorwand","Oberflächen","Endmontage","Umgebung","Übergabe"][s]}

function building(){
 state.page="building";
 app.innerHTML=top()+`
 <h1>Das Gebäude als System</h1>
 <p class="lead">Bewege den Baufortschritt und schalte die Sanitärsysteme ein. So wird sichtbar, <b>wann Rohbau und Gebäudetechnik zusammenkommen.</b></p>
 <div class="grid">
  <div class="card s8" style="padding:0;overflow:hidden"><div class="visual" id="bigScene">${sceneSVG(state.sceneStage,false,true)}</div>
  <div class="stageControl"><input type="range" min="0" max="16" value="${state.sceneStage}" oninput="state.sceneStage=+this.value;document.getElementById('sceneName').textContent=stageLabel(state.sceneStage);document.getElementById('bigScene').innerHTML=sceneSVG(state.sceneStage,false,true)"><span class="stageName" id="sceneName">${stageLabel(state.sceneStage)}</span></div></div>
  <div class="card s4"><div class="kicker">Systeme ein-/ausblenden</div><div class="toggleRow">
   ${systemButton("kw","Kaltwasser")}${systemButton("ww","Warmwasser")}${systemButton("abw","Abwasser")}${systemButton("rw","Regenwasser")}
  </div>
  <h2 style="margin-top:22px">So liest du die Animation</h2>
  <p class="muted">Sie zeigt <b>Beziehungen und Bauabfolge</b>, keine normgerechten Rohrdimensionen oder exakten Ausführungsdetails.</p>
  <div class="legend"><span><i class="dot" style="background:#56b9e8"></i>Kaltwasser</span><span><i class="dot" style="background:#df7b6b"></i>Warmwasser</span><span><i class="dot" style="background:#9aa5af"></i>Abwasser</span><span><i class="dot" style="background:#78b67f"></i>Regenwasser</span></div>
  </div>
 </div>
 <h2>Was diese Ansicht trainiert</h2>
 <div class="grid">
  <div class="card s4"><div class="kicker">01 · Lage</div><h3>Wo verläuft etwas?</h3><p class="muted">Grundrissdenken: Raum, Schacht, Anschluss, Trasse.</p></div>
  <div class="card s4"><div class="kicker">02 · Höhe</div><h3>Auf welcher Ebene?</h3><p class="muted">Schnittdenken: Boden, Decke, Geschoss, Entwässerungshöhe.</p></div>
  <div class="card s4"><div class="kicker">03 · Zeitpunkt</div><h3>Wann muss es bekannt sein?</h3><p class="muted">Durchbruch und Einlage vor dem Bauteil; Endapparat erst im Ausbau.</p></div>
 </div>`;
 nav();
}
function systemButton(k,label){return `<button class="${state.filters[k]?'on':''}" onclick="state.filters.${k}=!state.filters.${k};building()">${label}</button>`}

function learn(){
 state.page="learn";
 app.innerHTML=top()+`
 <h1>Fachbegriffe sicher beherrschen</h1>
 <p class="lead">Karte antippen: zuerst selbst erklären, dann die Rückseite prüfen.</p>
 <div class="flashcards">${FLASHCARDS.map(x=>`<div class="flash" onclick="this.classList.toggle('flip')"><div class="flashInner"><div class="front"><div class="small">${x[1]}</div><div class="big">${x[0]}</div><p class="muted" style="margin-top:12px">Tippen zum Umdrehen</p></div><div class="backside"><b>${x[0]}</b><p style="margin-top:12px">${x[2]}</p></div></div></div>`).join("")}</div>
 <h2>Reihenfolge trainieren</h2>
 <div class="card"><p><b>Diese fünf Phasen in die richtige Reihenfolge bringen:</b></p>
 <div class="toggleRow"><button>Endmontage</button><button>Fundation</button><button>Aushub</button><button>Rohbau</button><button>Inbetriebnahme</button></div>
 <div class="callout good" style="margin-top:14px"><strong>Lösung:</strong> Aushub → Fundation → Rohbau → Endmontage → Inbetriebnahme.</div></div>
 <h2>Prüfungsstrategie</h2>
 <div class="grid">
  <div class="card s4"><div class="kicker">Wenn nach «Warum?» gefragt wird</div><p>Nie nur die Tätigkeit nennen. Erkläre den Zweck: <b>damit der nächste Bauschritt technisch möglich und koordiniert ist.</b></p></div>
  <div class="card s4"><div class="kicker">Wenn nach «Reihenfolge» gefragt wird</div><p>Denke von unten nach oben: <b>Boden → Tragwerk → Hülle → Technik → Ausbau → Betrieb.</b></p></div>
  <div class="card s4"><div class="kicker">Wenn Sanitär vorkommt</div><p>Frage dich immer: <b>Lage? Höhe? Platz? Durchbruch? Schacht? Zugänglichkeit?</b></p></div>
 </div>`;
 nav();
}

function exam(){
 state.page="exam";state.examScore=0;state.answered={};
 app.innerHTML=top()+`
 <div class="examTop"><div><h1>Prüfungstraining</h1><p class="lead">${EXAM_QS.length} Fragen. Nach jeder Antwort erscheint sofort die fachliche Begründung.</p></div><div class="score"><span id="score">0</span> / ${EXAM_QS.length}</div></div>
 <div id="examQuestions">${EXAM_QS.map((q,i)=>`<div class="quizQ" data-i="${i}"><div class="kicker">Frage ${i+1}</div><p>${q.q}</p><div class="answers">${q.a.map((a,j)=>`<button class="ans" onclick="examAnswer(this,${i},${j})">${a}</button>`).join("")}</div><div class="feedback"></div></div>`).join("")}</div>
 <div class="card"><div class="kicker">Auswertung</div><h3 id="evaluation">Beantworte alle Fragen.</h3><p class="muted" id="evalText">Ziel: Reihenfolge nicht nur auswendig kennen, sondern fachlich begründen können.</p></div>`;
 nav();
}
function examAnswer(btn,i,j){
 if(state.answered[i])return;state.answered[i]=true;let q=EXAM_QS[i],box=btn.closest(".quizQ");
 box.querySelectorAll(".ans").forEach((b,idx)=>{b.disabled=true;if(idx===q.c)b.classList.add("correct")});
 if(j!==q.c)btn.classList.add("wrong");else state.examScore++;
 let f=box.querySelector(".feedback");f.classList.add("show");f.innerHTML=(j===q.c?`<b style="color:var(--green)">Richtig.</b> `:`<b style="color:var(--red)">Falsch.</b> `)+q.e;
 document.getElementById("score").textContent=state.examScore;
 if(Object.keys(state.answered).length===EXAM_QS.length){
  let pct=Math.round(state.examScore/EXAM_QS.length*100);
  let txt=pct>=87?"Sehr sicher":pct>=73?"Gut – einzelne Lücken wiederholen":pct>=53?"Grundlagen vorhanden – Bauphasen nochmals wiederholen":"Bauphasen nochmals systematisch lernen";
  document.getElementById("evaluation").textContent=`${txt} · ${pct}%`;
  document.getElementById("evalText").textContent=`${state.examScore} von ${EXAM_QS.length} Fragen richtig. Wiederhole besonders Reihenfolge, Zweck und Höhenbezug.`;
 }
}

function sceneSVG(stage,mini=false,systems=false){
 const f=state.filters||{kw:true,ww:true,abw:true,rw:true},show=n=>stage>=n;
 const systemsOn=systems&&stage>=11;
 return `<svg viewBox="0 0 820 390" role="img" aria-label="Schematische Animation des Baufortschritts">
 <defs>
  <linearGradient id="soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#50463a"/><stop offset="1" stop-color="#29241f"/></linearGradient>
  <linearGradient id="con" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#89949d"/><stop offset="1" stop-color="#59636c"/></linearGradient>
  <filter id="glow"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 </defs>
 <rect width="820" height="390" fill="#090e13"/>
 <line x1="0" y1="300" x2="820" y2="300" stroke="#5f5b50" stroke-width="2"/>
 <rect y="301" width="820" height="89" fill="url(#soil)"/>
 ${stage<2?`<path d="M80 300 Q180 282 290 300 T510 300 T760 300" fill="none" stroke="#746c5d" stroke-width="5"/>`:``}
 ${show(2)?`<path class="reveal" d="M135 300 L190 350 L630 350 L685 300 Z" fill="#15181b" stroke="#6b6257" stroke-width="2"/>`:``}
 ${show(3)?`<g class="reveal"><path d="M170 338 H640" stroke="#87939d" stroke-width="8"/><path d="M420 338 V302" stroke="#87939d" stroke-width="8"/>${f.abw?`<path class="flow" d="M260 328 H470 L600 340" fill="none" stroke="#9aa5af" stroke-width="6"/>`:``}</g>`:``}
 ${show(4)?`<g class="reveal"><rect x="175" y="322" width="70" height="24" fill="url(#con)"/><rect x="575" y="322" width="70" height="24" fill="url(#con)"/><rect x="375" y="326" width="70" height="20" fill="url(#con)"/></g>`:``}
 ${show(5)?`<rect class="reveal" x="180" y="305" width="460" height="17" fill="url(#con)" stroke="#a5afb7"/>`:``}
 ${show(6)?`<g class="reveal"><rect x="190" y="230" width="20" height="75" fill="#89939b"/><rect x="610" y="230" width="20" height="75" fill="#89939b"/><rect x="394" y="230" width="18" height="75" fill="#747d85"/><rect x="190" y="222" width="440" height="12" fill="url(#con)"/></g>`:``}
 ${show(7)?`<g class="reveal"><rect x="190" y="150" width="20" height="72" fill="#89939b"/><rect x="610" y="150" width="20" height="72" fill="#89939b"/><rect x="394" y="150" width="18" height="72" fill="#747d85"/><rect x="250" y="166" width="80" height="56" fill="#101820" stroke="#65717c"/><rect x="470" y="166" width="80" height="56" fill="#101820" stroke="#65717c"/></g>`:``}
 ${show(8)?`<rect class="reveal" x="190" y="142" width="440" height="12" fill="url(#con)" stroke="#9da7af"/>`:``}
 ${show(9)?`<g class="reveal"><path d="M165 142 L410 55 L655 142" fill="#232a30" stroke="#9ca7b0" stroke-width="8"/><path d="M195 142 L410 70 L625 142" fill="none" stroke="#4f5c66" stroke-width="2"/></g>`:``}
 ${show(10)?`<g class="reveal"><rect x="195" y="157" width="410" height="65" fill="none" stroke="#aeb7bf" stroke-width="3"/><rect x="195" y="237" width="410" height="68" fill="none" stroke="#aeb7bf" stroke-width="3"/><rect x="245" y="175" width="72" height="35" fill="#1c2a34" stroke="#58bce9" opacity=".65"/><rect x="482" y="175" width="72" height="35" fill="#1c2a34" stroke="#58bce9" opacity=".65"/></g>`:``}
 ${systemsOn&&f.kw?`<g filter="url(#glow)"><path d="M235 326 V268 H350 V190 H500" fill="none" stroke="#56b9e8" stroke-width="5"/><circle cx="500" cy="190" r="6" fill="#56b9e8"/></g>`:``}
 ${systemsOn&&f.ww?`<g filter="url(#glow)"><path d="M300 286 H360 V205 H500" fill="none" stroke="#df7b6b" stroke-width="5"/><circle cx="500" cy="205" r="6" fill="#df7b6b"/></g>`:``}
 ${systemsOn&&f.abw?`<g><path class="flow" d="M520 218 H430 V292 L330 321" fill="none" stroke="#9da8b2" stroke-width="8"/><circle cx="520" cy="218" r="6" fill="#9da8b2"/></g>`:``}
 ${systemsOn&&f.rw?`<g><path class="flow" d="M642 138 V285 H680" fill="none" stroke="#78b67f" stroke-width="6"/></g>`:``}
 ${show(12)?`<g class="reveal"><rect x="495" y="232" width="38" height="68" fill="#303943" stroke="#7e8b95"/><rect x="485" y="250" width="58" height="8" fill="#65717b"/></g>`:``}
 ${show(13)?`<g class="reveal"><rect x="212" y="292" width="180" height="8" fill="#626d76"/><rect x="414" y="292" width="194" height="8" fill="#626d76"/></g>`:``}
 ${show(14)?`<g class="reveal"><rect x="492" y="205" width="22" height="28" rx="4" fill="#eef3f6"/><path d="M488 236 Q505 250 522 236" fill="#eef3f6"/><rect x="305" y="260" width="55" height="10" rx="3" fill="#eef3f6"/></g>`:``}
 ${show(15)?`<g class="reveal"><path d="M70 300 Q130 275 180 300" fill="#253026" stroke="#657e67"/><path d="M640 300 Q705 278 770 300" fill="#253026" stroke="#657e67"/></g>`:``}
 ${show(16)?`<g class="reveal"><circle cx="705" cy="80" r="30" fill="#e0b95f" opacity=".23"/><path d="M690 80h30M705 65v30" stroke="#e0b95f" stroke-width="2"/></g>`:``}
 <g fill="#8a97a2" font-size="12" font-family="system-ui"><text x="25" y="28">BAUFORTSCHRITT · ${stageLabel(stage).toUpperCase()}</text><text x="25" y="48" fill="#66737e">schematische Lernanimation</text></g>
 </svg>`;
}
home();nav();
