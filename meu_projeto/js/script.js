function scrollActive(sectionId){
const section = document.getElementById(sectionId);

if(!section) return;

const headerHeight = 70;
const sectionPosition = section.offsetTop - headerHeight;

window.scrollTo({top: sectionPosition, behavior: "smooth"});

const menu = document.getElementById('navmenu');
menu.classList.remove('active');
}

/*cadastro*/

function handleSumit(event)
     Event.preventDefault();

     const form = document.getElementById('volunteerForm')

     const formDate = {
           nome: form.nome.value,
           email: form.email.value,
           
     }
