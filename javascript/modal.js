// Open the Modal and enlarge the selected photo
/*
const parent = document.getElementById('grid-container');

parent.addEventListener('click', event => {
    if (event.target.className === 'grid-item') {
        document.querySelector('.bg-modal').style.display='flex';
        var imgGrab = event.target.src

        function makeBig() {
            var enlarged = document.createElement('IMG');
            enlarged.setAttribute('src', imgGrab);
            enlarged.setAttribute('id', 'createdImg')
            enlarged.setAttribute('class', 'big-pic')
            console.log(imgGrab)
            var element = document.getElementById('modal-content');
            element.appendChild(enlarged);
        }
        makeBig();
    }
});


//Close the modal with X and delete created big image

document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.bg-modal').style.display='none';
    var createdElement = document.getElementById('createdImg');
    createdElement.parentNode.removeChild(createdElement);
}
);

//Next picture function

var album = document.getElementById('grid-container').children;
//console.log(album);

document.querySelector('.next').addEventListener('click', event => {
    console.log(event.target.id);
});

*/

