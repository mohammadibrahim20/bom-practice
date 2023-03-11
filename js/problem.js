let count = parseInt(localStorage.getItem("count"))|| 0;
document.getElementById('text').innerText = count;
// let count = localStorage.getItem('count');
document.getElementById('add').addEventListener('click', function(){
    count++;
    document.getElementById('text').innerText = count;
    localStorage.setItem('count', count)

})



