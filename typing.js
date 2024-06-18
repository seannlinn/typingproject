const words = "the of and to in a is that it was for on with he as by \
at you this not be are or his from but they which she we an there her one \
all their has my have will would been can if when who more no out so what up \
said about other into than its only new some could them these two may first any like now \
such our over man me even most made after also did many before must through back years where much your way well down should because each just \
those people how too little state good very make world still own see men work long get here between both life being under never day same another know \
while last might great old year off come since against go came right used take three himself few place end during without again around however home small \
found thought went say part once general high upon school every don't does got united left number course war until always away something fact water though \
less public often asked enough took hand put government own called second later report according large own known".split(" ");
const wordsCount = words.length;

function addClass(el, name){
    el.className += ' '+name;
}

function removeClass(el, name) {
    el.className = el.className.replace(name,'');
}

function generateWord() {
    const randomIndex = Math.floor(Math.random() * wordsCount);
    return words[randomIndex];
}

function formatWord(word) {
    return `<div class="word"><span class = letter>${word.split('').join('</span><span class="letter">')}</div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatWord(generateWord());
    }
    addClass(document.querySelector('.word'), 'current');
    addClass(document.querySelector('.letter'), 'current');
}

document.getElementById("game").addEventListener('keydown', ev => {
    const key = ev.key;
    
})
newGame();
