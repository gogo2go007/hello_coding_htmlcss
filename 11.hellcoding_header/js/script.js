const header = document.querySelector("#header");
const gnbMenu = document.querySelectorAll(".gnb .menu");
const gnbSubTit = document.querySelectorAll(".gnb_bg .sub_title > li");

// 과거의 스크롤바 위치값
let lastScrollTop = 0;


// 스크롤 이벤트
window.addEventListener("scroll",function(){
    // 스크롤을 내리면 header 디자인 변경
    let scTop = window.scrollY;

    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }

    // 스크롤바 내리면 헤더가 사라지고
    // 스크롤바 한번만 올려도 헤더에 on이 붙은채로 보이게 됨
    if(scTop > lastScrollTop){
        header.classList.add("top");
    }
    else{
        header.classList.remove("top");
    }
    lastScrollTop = scTop;
});

for(let i = 0; i < gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseenter",function(){
        for(let j = 0; j < gnbSubTit.length; j++){
            gnbSubTit[j].classList.remove("on");
        }
        gnbSubTit[i].classList.add("on");
    });
}