// 偵測鼠標是否在登入區域內，如果是則顯示選單，若不是則關閉選單

const logincontain = document.getElementById('loginarea')
const loginmenu = document.getElementById('loginmenu')
logincontain.addEventListener('mouseenter', ()=> {
    loginmenu.classList.remove('hidden')
    loginmenu.classList.add('show')
});
logincontain.addEventListener('mouseleave', ()=> {
    loginmenu.classList.remove('show')
    loginmenu.classList.add('hidden')
});