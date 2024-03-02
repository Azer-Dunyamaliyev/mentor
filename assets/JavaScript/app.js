// AOS

setTimeout(() => {
    document.querySelector('.home_content').classList.add('active');
}, 600);

window.addEventListener('scroll',()=>{
    if (window.scrollY > 300) {
        document.querySelector('.home_content').classList.add('active')
    }

    if (window.scrollY > 300) {
        document.querySelector('.two').classList.add('active')
    } else {
        document.querySelector('.two').classList.remove('active')
    }

    if (window.scrollY > 300) {
        document.querySelector('.one').classList.add('active')
    } else {
        document.querySelector('.one').classList.remove('active')
    }

    if (window.scrollY > 700) {
        document.querySelector('.people').classList.add('active')
    } else {
        document.querySelector('.people').classList.remove('active')
    }

    if (window.scrollY > 1000) {
        document.querySelector('.s_col_1').classList.add('active')
    }   else {
        document.querySelector('.s_col_1').classList.remove('active')
    }

    if (window.scrollY > 1000) {
        document.querySelector('.s_col_2').classList.add('active')
    } else {
        document.querySelector('.s_col_2').classList.remove('active')
    }

    if (window.scrollY > 1400) {
        document.querySelector('.icon_boxs').classList.add('active')
    } else {
        document.querySelector('.icon_boxs').classList.remove('active')
    }

    // MEDIA

    if (window.innerWidth <= 1024) {
        if (window.scrollY > 1800) {
            document.querySelector('.icon_boxs').classList.add('active')
        } else {
            document.querySelector('.icon_boxs').classList.remove('active')
        }
    }



    if (window.innerWidth <= 860) {
        if (window.scrollY > 500) {
            document.querySelector('.one').classList.add('active')
        } else {
            document.querySelector('.one').classList.remove('active')
        }

        if (window.scrollY > 1000) {
            document.querySelector('.people').classList.add('active')
        } else {
            document.querySelector('.people').classList.remove('active')
        }

        if (window.scrollY > 1500) {
            document.querySelector('.s_col_1').classList.add('active')
        } else {
            document.querySelector('.s_col_1').classList.remove('active')
        }

        if (window.scrollY > 1700) {
            document.querySelector('.s_col_2').classList.add('active')
        } else {
            document.querySelector('.s_col_2').classList.remove('active')
        }

        if (window.scrollY > 2500) {
            document.querySelector('.icon_boxs').classList.add('active')
        } else {
            document.querySelector('.icon_boxs').classList.remove('active')
        }
    }

    if (window.innerWidth <= 550) {
        if (window.scrollY > 2700) {
            document.querySelector('.icon_boxs').classList.add('active')
        } else {
            document.querySelector('.icon_boxs').classList.remove('active')
        }
    }

    if (window.innerWidth <= 450) {
        if (window.scrollY > 1200) {
            document.querySelector('.people').classList.add('active')
        } else {
            document.querySelector('.people').classList.remove('active')
        }

        if (window.scrollY > 1800) {
            document.querySelector('.s_col_1').classList.add('active')
        } else {
            document.querySelector('.s_col_1').classList.remove('active')
        }

        if (window.scrollY > 2300) {
            document.querySelector('.s_col_2').classList.add('active')
        } else {
            document.querySelector('.s_col_2').classList.remove('active')
        }
    }


    // BACK_TOP
    if (window.scrollY > 50) {
        document.querySelector('.back_top').classList.add('active')
    } else {
        document.querySelector('.back_top').classList.remove('active')
    }
})



// HEADER SIDEBAR
  
document.querySelector('.openburger').addEventListener('click',()=>{
    document.querySelector('.overflow').classList.add('active');
    document.body.style.overflow = 'hidden';
    document.querySelector('.openburger').style.visibility = 'hidden'
})

document.querySelector('.closeburger').addEventListener('click',()=>{
    document.querySelector('.overflow').classList.remove('active');
    document.body.style.overflow = 'auto';
    document.querySelector('.openburger').style.visibility = 'visible'
    document.querySelector('.dropmenu').classList.remove('active')
    document.querySelector('.deepmenu').classList.remove('active')
})

document.querySelector('.dropdown').addEventListener('click',()=>{
    document.querySelector('.dropmenu').classList.add('active')
    document.querySelector('.burger_menu').style.overflowY = 'scroll'
})

document.querySelector('.deepdown').addEventListener('click',()=>{
    document.querySelector('.deepmenu').classList.toggle('active')
})


// BACK_TOP

document.querySelector('.back_top').addEventListener('click',(e)=>{
    e.preventDefault()
    window.scrollTo({top: 0,behavior:'smooth'});
})

  