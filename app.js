const input = document.querySelector('#input');
const add = document.querySelector('#add');
const clear = document.querySelector('#clear');
const tasks = document.querySelector('#tasks');
const pending = document.querySelector('#pending');


// add task
add.addEventListener('click', () =>{
    if(input.value.trim() !== ''){
       showTasks();
        input.value='';
    }
    else{
        alert('no task added');
    }      
    
})


// show task
function showTasks(){
    
    const li = document.createElement('li');
    const spanText = document.createElement('span');
    const i = document.createElement('i');

    // get tasks value
    spanText.innerText = input.value;

    // get icon value
    i.innerHTML = `<i class='fa fa-trash'></i>`;

    // show the task
    li.appendChild(spanText);
    li.appendChild(i);

    tasks.appendChild(li);


    // delete task
    i.addEventListener('click', ()=>{
        i.parentElement.remove();
        
        pending.textContent = tasks.getElementsByTagName('li').length;

    });


    // clear All
    clear.addEventListener('click', ()=>{
        li.style.display = 'none';
        pending.textContent = '0';
    
    })

    pending.textContent = tasks.getElementsByTagName('li').length;
}









// switch toogle dark mode
const switchBtn = document.querySelector('#switchBtn');


switchBtn.addEventListener('click', () =>{
    switchBtn.classList.toggle('fa-sun')

    document.documentElement.classList.toggle('dark');
    
})
