const colorButtons = document.querySelectorAll('.color');
const sequenceContainer = document.getElementById('sequence');
const undoBtn = document.getElementById('undo');
const clearBtn = document.getElementById('clear');
const phaseSelect = document.getElementById('phase');

let sequence = [];
let currentPhase = 'none';

phaseSelect.addEventListener('change', () => {
  currentPhase = phaseSelect.value;
  renderSequence();
});

colorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sequence.push(btn.dataset.color);
    renderSequence();
  });
});

undoBtn.addEventListener('click', () => {
  sequence.pop();
  renderSequence();
});

clearBtn.addEventListener('click', () => {
  sequence = [];
  renderSequence();
});

function renderSequence() {
  sequenceContainer.innerHTML = '';
  const phaseLabel = currentPhase !== 'none' ? `Fase ${currentPhase}` : '';
  if (phaseLabel) {
    const label = document.createElement('p');
    label.textContent = phaseLabel;
    label.style.width = '100%';
    label.style.textAlign = 'center';
    sequenceContainer.appendChild(label);
  }

  sequence.forEach(color => {
    const box = document.createElement('div');
    box.classList.add('seq-box', color);
    sequenceContainer.appendChild(box);
  });
}