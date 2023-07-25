const main = document.querySelector('.main');
const right = document.querySelector('.right');


topBTN = document.getElementById('topBTN')

topBTN.addEventListener('click', amountGrids)


function amountGrids() {
    let grids=parseInt(prompt('How many grids do you want', '64'))
    if (grids<100) {
        let numberOfDivs = grids*grids;

        for (let i = 0; i < numberOfDivs; i++) {
            const div = document.createElement('div');
            div.style.width = (504/grids) + 'px'
            div.style.height = (504/grids) + 'px'
            div.classList.add('grid-item')
            right.append(div);
          }
        gridItems = document.getElementsByClassName('grid-item');
        
    
        for (let i = 0; i < gridItems.length; i++) {
            console.log(gridItems[i])
            gridItems[i].addEventListener('mouseover', (e)=> {
                e.target.classList.add('changeBG')
            })
        }
          
    }
      
}