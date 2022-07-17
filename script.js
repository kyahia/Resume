document.querySelectorAll('a').forEach(link => link.setAttribute('target', '_blank'));

const exps = document.querySelectorAll('section>div');
// const projs = document.querySelectorAll('.project');

exps.forEach(exp => {
   exp.setAttribute('title', 'Click for details')
   exp.addEventListener('click', activate)
});
// projs.forEach(proj => {
//    proj.setAttribute('title', 'Click for details')
//    proj.addEventListener('click', activate)
// });

function activate(){
   const targetClass = this.id;
   document.getElementById(targetClass).classList.toggle('show');
   document.getElementById(targetClass).classList.toggle('collapse');
}

// document.getElementById('aside-expend').addEventListener('click', () => {
//    document.querySelector('aside').classList.toggle('expended');
//    document.querySelector('aside').classList.toggle('shrunk');
// });
