function onDragStart(event, id) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
      
      event
    .currentTarget
    .style
    .backgroundColor = 'yellow';
}

function onDragOver(event) {
    event.preventDefault();
}

const winningCondition = [];
const index = 0;

function onDrop(event) {
    const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    opacity = getOpacity();

    
    if(id == "washingUpLiquid" || id == "warmWater" || id == "sponge" || id == "whiteVinegar"){
        
        if(winningCondition.includes(id)){
            winningCondition[index] = id;
            index +=1;
            window.alert(winningCondition);
        }else{

        }
        opacity -= 0.25;
        document.getElementById("imgwineBottleSpillage").style.opacity = opacity;

        var elem = document.getElementById(id);
        elem.setAttribute('draggable', false);
        elem.setAttribute('backgroundColor', 'green');
        


        if(opacity == 0){
            location.href = '../TextPages/victory.html'
        }

        dropzone.appendChild(draggableElement);
        
    }else{
        if(opacity>1){
            opacity = 1
        } else{
            opacity = parseFloat(opacity) + 0.25;
            document.getElementById("imgwineBottleSpillage").style.opacity = opacity;
        }

        dropzone.appendChild(draggableElement);
        
    }

    function getOpacity(){
        var element = document.getElementById('imgwineBottleSpillage'),
        style = window.getComputedStyle(element),
        opacity = style.getPropertyValue('opacity');
        return opacity
    }
}


function reloadPage(){
    location. reload()
}
