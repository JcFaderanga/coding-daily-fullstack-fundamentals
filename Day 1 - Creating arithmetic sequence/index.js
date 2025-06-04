// Day 1
// JavaScript: Create an arithmetic sequence generator with sum and nth term finder.
// Frontend: UI for arithmetic sequence input and result display with light/dark mode.
// Backend: API that returns sequence, sum, and nth term. Test with Jest.
//formula (aₙ = a + (n - 1)d)

const a = document.getElementById('a');
const d = document.getElementById('d');
const n = document.getElementById('n');
const button = document.getElementById('btn');

let data = {};

//Formula to get the nth term
export function formula(){
    let term = Number(a.value) + (Number(n.value) - 1) * Number(d.value);
    return term;
}

//Computation to do a list of terms using loop
export function sequence(a, n,d){ 
let current = a;
let arr = [0];
    for(let i = 0; i < n; i++){
        const initial = current;
        let calc = initial + d;
        current = calc;
         arr.push(initial); 
    }
    return arr;
}

//Display sequence in client
export function display_terms(){
    const nth_term = document.getElementById('result');
    const term_list = document.getElementById('term-list');
    term_list.innerHTML = data.sequence;
    nth_term.innerHTML = `The nth term is ${data.term}`;
}

//Action button to excute functions
button.addEventListener('click', ()=> {
    const res = {
        term: formula(),
        sequence: 
            sequence(
                Number(a.value),
                Number(n.value),
                Number(d.value)
            )            
    }
    data = res;
    display_terms();
    console.log(data)
});

//Dark mode theme
const toggle = document.getElementById('btn-theme');

// Load theme on page load
const savedTheme = localStorage.getItem('dark-theme');
if (savedTheme === 'true') {
  document.body.classList.add('dark-mode');
  toggle.innerHTML = 'Switch to Light mode';
} else {
  document.body.classList.remove('dark-mode');
  toggle.innerHTML = 'Switch to Dark mode';
}

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode'); // Toggle class
  localStorage.setItem('dark-theme', isDark); // Save the new state

  // Update button text
  toggle.innerHTML = isDark ? 'Switch to Light mode' : 'Switch to Dark mode';
});
