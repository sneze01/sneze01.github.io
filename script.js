/*(function (){
    // let arr = document.querySelectorAll('#navbarText>ul>li>a');

    // for (let i = 0; i < arr.length; i++) {
    //     arr[i].addEventListener('click',setActiveState);
    // }

    for (let link of document.querySelectorAll('#navbarText>ul>li>a')) {
        //console.log(li.textContent);
        //link.parentElement.classList = "nav-item";
        link.addEventListener('click', setActiveState);
    }
})()

function setActiveState(){
    // for (const link of document.querySelectorAll('#navbarText>ul>li>a')) {
    //     //console.log(li.textContent);
    //     link.parentElement.classList = "nav-item";
    // }

    for (const link of document.querySelectorAll('#navbarText>ul>li')) {
        //console.log(li.textContent);
        link.classList = "nav-item";
    }

    this.parentElement.classList = "nav-item active";
}*/

var slider = tns({
    container: '.my-slider',
    items: 2,
    controls: false,
    controlsText: false,
    mouseDrag: true,
    nav: true,
    navPosition: 'bottom',

    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 3
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4
      }
    }
  });
//Filter projects

var btnContainer = document.getElementById("buttons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


function filterSelection(c) {
    let cards = document.getElementsByClassName("hovereffect");

    for(item of cards){
        if (c == "all")  {
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else if(item.getAttribute("category") == c)
        {
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else {
            item.classList.remove("show");
            item.classList.add("hide");
        }
    }

  }
  mediumZoom('zoom',{
    margin: 50
  })
  