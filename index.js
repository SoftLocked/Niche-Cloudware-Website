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

/****************************************************************************************************
* Dynamic Footer
****************************************************************************************************/

//index footer
try {
const indexFooter = document.querySelector(".main-footer")

    indexFooter.innerHTML = `

    <div class="columns is-variable is-centered">
        
            <div class="column center is-3">
                <a href="index.html">
                    <img src="Assets\\Logos\\NicheCloudware\\Full\\White.png" style="margin:0; padding:0; width:250px;">
                </a>
            </div>
        
            <div class="column is-3 is-responsive center">
                <div class="content">
                    <p class="my-2 has-text-weight-light" style="text-align: center;"> 17201, NW Viola Street, Portland
                        97229,
                        Oregon</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">+1.310.237.5924</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">hr@nichecloudware.com</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">careers@nichecloudware.com</p>
                </div>
            </div>
        </div>
        
        <hr class="m-0 mb-3 p-0" style="margin-left: 20% !important; width: 60%;">
        
        <p class="has-text-weight-light center">&copy; 2022 Niche Cloudware</p>

`;
} catch (e) {
}

//Other footers
const footers = document.querySelectorAll(".other-page-footer");

for (var i = 0; i < footers.length; i++) {
    
    footers[i].innerHTML = `
    
    <div class="columns is-variable is-centered">

            <div class="column center is-3">
                <a href="../index.html">
                    <img src="..\\Assets\\Logos\\NicheCloudware\\Full\\White.png" style="margin:0; padding:0; width:250px;">
                </a>
            </div>

            <div class="column is-3 is-responsive center">
                <div class="content">
                    <p class="my-2 has-text-weight-light" style="text-align: center;"> 17201, NW Viola Street, Portland
                        97229,
                        Oregon</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">+1.310.237.5924</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">hr@nichecloudware.com</p>
                    <p class="my-2 has-text-weight-light" style="text-align: center;">careers@nichecloudware.com</p>
                </div>
            </div>
        </div>

        <hr class="m-0 mb-3 p-0" style="margin-left: 20% !important; width: 60%;">

        <p class="has-text-weight-light center">&copy; 2022 Niche Cloudware</p>
    
    `;

}