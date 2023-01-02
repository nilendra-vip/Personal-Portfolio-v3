/*=============== SHOW SIDEBAR ===============*/
function loader(){
    // =================== LOADER =================
    var time =gsap.timeline()

    time.from('#n11',{
        height:"0px",
        duration:.2,
        delay:.5
    })
    time.from('#n12',{
        height:"0px",
        duration:.2,
    })
    time.from('#n13',{
        height:"0px",
        duration:.2,
    })
    time.to('.i-line',{
        height:"120px",
        duration:.2,
    })
    time.from("#loader i",{
        scale:0,
        duration:.2,
    })
    time.from('#l1',{
        height:"0",
        duration:.2,
    })
    time.from('#l2',{
        height:"0",
        duration:.2,
    })
    time.from('#l4',{
        width:"0",
        duration:.2,
    })

    time.from('#e1',{
        width:"0",
        duration:.2,
    })
    time.from('#e2',{
        height:"0",
        duration:.2,
    })
    time.from('#e4',{
        height:"0",
        duration:.2,
    })
    time.from('#e5',{
        width:"0",
        duration:.2,
    })
    time.from('#e6',{
        width:"0",
        duration:.2,
    })

    time.from('#n21',{
        height:"0",
        duration:.2,
    })
    time.from('#n22',{
        height:"0",
        duration:.2,
    })
    time.from('#n23',{
        height:"0",
        duration:.2,
    })

    time.from('#d1',{
        width:"0",
        duration:.2,
    })
    time.from('#d2',{
        width:"0",
        duration:.1,
    })
    time.from('#d4',{
        height:"0",
        duration:.2,
    })
    time.from('#d5',{
        height:"0",
        duration:.1,
    })
    time.from('#d7',{
        width:"0",
        duration:.2,
    })
    time.from('#d8',{
        height:"0",
        duration:.2,
    })


    time.from('#r1',{
        height:"0",
        duration:.2
    })
    time.from('#r2',{
        width:"0",
        duration:.2
    })

    time.from('#r3',{
        width:"0",
        duration:.2,
    })
    time.from('#r5',{
        height:"0",
        duration:.2
    })
    time.from('#r6',{
        height:"0",
        duration:.2,
    })
    time.from('#r8',{
        width:"0",
        duration:.2
    })
    time.from('#r9',{
        height:"0",
        duration:.2
    })
    time.from('#a1',{
        height:"0",
        duration:.2,
    })
    time.from('#a2',{
        height:"0",
        duration:.2,
    })
    time.from('#a3',{
        width:"0",
        duration:.2,
    })

    time.to(".n1-line, .i-line, .l-line, .e-line, .n2-line, .d-line, .r-line, .a-line",{
        backgroundColor:'springgreen',
        duration:1,   
        delay:-.5
    })
    time.to("#loader i, #loader h2",{
        color:"springgreen",
        duration:.5,
        delay:-.5
    })
    time.to("#loader ,#l3, #e3, #d3 ,#d6, #r4 , #r7",{
        backgroundColor:'black',
        duration:1,
        delay:-.1 
    })
    time.to("#loader",{
        scale:0,
        x:-715,
        y:-315,
        duration:.7,
        // borderRadius:"30%",
        delay:.3
    })
    time.from(".nav_logo",{
        scale:0
    })
    time.from(".nav_item",{
        y:-100,
        stagger:.1,
        delay:-.5
    })
    time.from(".info_item",{
        y:100,
        stagger:.1,
        delay:-1
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









