'use strict';

const PRACTICE_VIDEO = {
  5: ['06-baustelleneinrichtung.mp4', 'Baustelleneinrichtung und Maschinenbereich'],
  7: ['08-aushub-baugrube.mp4', 'Aushub einer Baugrube'],
  8: ['09-planum-unterbau.mp4', 'Erdarbeiten und vorbereiteter Untergrund'],
  11: ['12-bodenplatte.mp4', 'Arbeiten an Fundation und Bodenplatte'],
  12: ['13-untergeschoss.mp4', 'Untergeschoss im Rohbau'],
  13: ['14-waende-stuetzen.mp4', 'Erstellen von Wänden im Rohbau'],
  15: ['16-dach.mp4', 'Montage des Dachtragwerks'],
  16: ['17-fenster-fassade.mp4', 'Arbeiten an Fenster und Gebäudehülle'],
  17: ['18-sanitaer-rohinstallation.mp4', 'Sanitär-Rohinstallation in einer Wand'],
  18: ['19-innenwaende-vorwand.mp4', 'Vorwand und vorbereitete Anschlüsse'],
  19: ['20-bodenaufbau.mp4', 'Ausführung einer Bodenoberfläche'],
  20: ['21-sanitaer-endmontage.mp4', 'Montage einer sichtbaren Sanitärarmatur'],
  23: ['24-uebergabe-betrieb.mp4', 'Übergabe eines fertiggestellten Gebäudes']
};

function removePracticeVideo() {
  const old = document.getElementById('practiceCard');
  if (old) old.remove();
}

function renderPracticeVideo() {
  removePracticeVideo();
  const item = PRACTICE_VIDEO[lessonIndex];
  if (!item) return;
  const card = document.createElement('section');
  card.id = 'practiceCard';
  card.className = 'practiceCard';
  card.innerHTML = '<div class="practiceHead"><strong>Passende Praxisaufnahme</strong><span>Ergänzung zur technischen Animation</span></div>' +
    '<video class="practiceVideo" controls muted playsinline preload="metadata" aria-label="' + esc(item[1]) + '">' +
    '<source src="videos/' + item[0] + '" type="video/mp4"></video>' +
    '<p class="practiceNote">Diese Aufnahme zeigt den genannten Arbeitsbereich. Fachliche Einzelheiten, Lage, Höhe und Reihenfolge erklärt die technische Animation darüber.</p>';
  document.querySelector('.visualCard').insertAdjacentElement('afterend', card);
}

const fachOpenLesson = openLesson;
const fachShowStep = showStep;

openLesson = function(index, scroll = false, writeHistory = true) {
  fachOpenLesson(index, scroll, writeHistory);
  renderPracticeVideo();
  setPlaying(true);
};

showStep = function(index, manual = true) {
  fachShowStep(index, manual);
  setPlaying(true);
};

document.getElementById('appVersion').textContent = 'Version 16 · Fachanimation + Praxis';
document.querySelector('.stepHint').textContent = 'Die Fachanimation startet automatisch. Mit Pause und dem Regler kannst du jeden Arbeitsschritt genau betrachten.';
renderPracticeVideo();
setPlaying(true);
