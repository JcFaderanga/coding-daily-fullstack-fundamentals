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
function formula(){
    let term = Number(a.value) + (Number(n.value) - 1) * Number(d.value);
    return term;
}

//Computation to do a list of terms using loop
function sequence(a, n,d){ 
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
function display_terms(){
    const term_list = document.getElementById('term-list');
    term_list.innerHTML = data.sequence;
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

