const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// prima soluzione
const reversedTeachers = teachers.toReversed();

// seconda soluzione
const output = [];
for (let i=0; i<teachers.length; i++) {
  output.unshift(teachers[i]);
}

// terza soluzione
const output2 = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  output2.push(teachers[i]);
}




// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const out = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    out.push(teahcers[i]);
  }
}

const longNames = out;

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf('Ed'), 1);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isPresent = false;
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isPresent = true;
    break;
  }
}
const isFabioPresent = isPreset;

//OPPURE!
// const isFabioPresent = teachers.includes('Fabio');

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let out = '';
for (let i = 0; i < teachers.length; i++) {
  out += teachers[i];
  if (i != teachers.length - 1) {
    out += ',';
  } else {
    out += '.';
  }
}


//OPPURE
for (let i = 0; i < teachers.length; i++) {
  out += teachers[i] + (i !== teachers.length -1 ? ',' : '.');
}

//OPPURE
out = teachers.join(',');

const teachersString = out;