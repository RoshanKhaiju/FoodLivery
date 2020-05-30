
document.getElementById('srch').addEventListener('click', function(){
    document.querySelector('.fas').style.display='flex';
document.querySelector('.search-box').style.display='flex';
document.querySelector('.search').style.display='none';
});

document.getElementById('cross').addEventListener('click', function(){
    document.querySelector('.fas').style.display='none';
    document.querySelector('.search-box').style.display='none';
    document.querySelector('.search').style.display='flex';
});