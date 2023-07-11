/*=============== SHOW SIDEBAR ===============*/
function loader(){
    // =================== LOADER =================
    var time =gsap.timeline()

    
    time.to("#loader",{
        backgroundColor:'black',
        duration:1,
        delay:1 
    })
    time.to("#loader",{
        scale:0,
        x:-715,
        y:-315,
        duration:1,
        delay:.5
    })
    time.from(".nav_logo",{
        scale:0
    })
    time.from(".nav_item",{
        y:-100,
        stagger:.1,
        delay:-.5,
        opacity:0
    })
    time.from(".info_item",{
        y:100,
        stagger:.1,
        delay:-1,
        opacity:0
    })

}
loader();



/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent= document.querySelectorAll('[data-content]');

tabs.forEach(function(tab){
    tab.addEventListener("click", function(){
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(function(tabContents){
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(function(tab){
            tab.classList.remove('skills_active')
        })

        tab.classList.add('skills_active')
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
    selectors:{
        target: '.work_card'
    },
    animation:{
        duration:300
    }
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll(".work_item")

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener("click", activeWork))

/*===== Work Popup =====*/
document.addEventListener("click" , function(e){
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement); 
    }
})

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    var parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    var parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}
inputs.forEach(function(input){
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    sections.forEach(function(current){
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav_menu a[href*=" + sectionId + ']').classList.add("active-link")
        }
        else{
            document.querySelector(".nav_menu a[href*=" + sectionId + ']').classList.remove("active-link")
        }
    })
}

/*=============== SHOW SCROLL UP ===============*/


document.querySelectorAll(".skills_header").forEach(function(file){
    file.addEventListener("click", function(){
        document.querySelectorAll(".skills_percentage").forEach(function(files){
            gsap.from(files,{
                width:"0%",
                duration:2
            })
        })
        
    })
})

document.querySelectorAll(".skills_header").forEach(function(file){
    file.addEventListener("click", function(){
        file.style.scale= 0.8
        setTimeout(() => {
            file.style.scale= 1
        }, 100);
    })
})






// ==========================Toggler=======================

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", function(){
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide style switcher on scroll
// window.addEventListener("scroll", function(){
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}



