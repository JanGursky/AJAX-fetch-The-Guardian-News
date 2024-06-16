 
const fromGuardian = async () => {
    const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');
    const dataset = await response.json();
   
    console.log(response);
    console.log(dataset);
    const navContainer = document.createElement('nav');
    dataset.data.forEach(categoryName => {
           
        const navElm = document.createElement('a');
        navElm.innerText = categoryName;
        navElm.addEventListener('click', (event) => {
            getGuardianCat(categoryName);
        });
        navContainer.appendChild(navElm);
        const divTitles = document.querySelector('div.titles');
        divTitles.parentNode.insertBefore(navContainer, divTitles.parentNode.firstChild)
        })

}
    
fromGuardian();

const getGuardianCat = async (categoryName) => {
    const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${categoryName}`)
    const dataset = await response.json();
   
    console.log(response);
    console.log(dataset);

    const titleContainer = document.querySelector('div.titles');
    titleContainer.innerHTML='';
    //console.log(data.channel.item);
    dataset.data.channel.item.forEach(item => {
           
    const titleElm = document.createElement('div');
    titleElm.innerText = item.title;
    titleElm.className = 'singleelm';
    titleContainer.appendChild(titleElm);
    })
}
