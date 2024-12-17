// табы второй экран

const tabsTitle = document.querySelectorAll('.zones_link-item');
const tabsContent = document.querySelectorAll('.zones_wrapper');

tabsTitle.forEach(item => item.addEventListener('click', event => {

    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(element => element.classList.remove('tab-active'));
    tabsContent.forEach(element => element.classList.add('hidden'));


    item.classList.add('tab-active');
    document.getElementById(tabsTitleTarget).classList.remove('hidden');


}))

document.querySelector('[data-tab="tab-1"]').classList.add('tab-active');
document.querySelector('#tab-1').classList.remove('hidden');