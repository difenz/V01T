const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    btn.innerHTML = 
    (btn.innerHTML === "подробнее") ? btn.innerHTML = "don mind" : btn.innerHTML = "подробнее"
})