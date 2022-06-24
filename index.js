/****************************************************************************************************
* Burger Menu
* Included in the script tag of individual pages due to scoping issues

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})
****************************************************************************************************/

/****************************************************************************************************
* Meet the Team (Tabbed Content)
****************************************************************************************************/

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

//Iterate through every tab
tabs.forEach((tab) => {
    //Listen for a click on a tab
    tab.addEventListener('click', () => {
        //If a click is registered, deactivate all tabs
        tabs.forEach(item => item.classList.remove('is-active'));
        //Activate the tab that's been clicked
        tab.classList.add('is-active');
        //Swap out content depending on active tag
        const target = tab.dataset.target;

        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })

    });
});