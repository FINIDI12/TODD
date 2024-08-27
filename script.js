// preloader script
window.addEventListener('load',()=>{
  let loadTime=performance.now()
  console.log(loadTime)
  setTimeout(preloaderFunction,loadTime);


    //  on olad Add 
    // onclick=preview (this) attr
    //  to all the gallary image 
    // container in main section

      let allGallaryImgSpan=document.querySelectorAll('.collections .image');
      allGallaryImgSpan.forEach(imgSpan=>{
        
        imgSpan.setAttribute('onclick','preview(this)');
        
      })
  
  
})
let preloaderFunction=()=>{
  let preloader = document.querySelector('.preloader-wrap');
  preloader.style.display='none';
  // document.querySelector("body .container").style.display='block';
}

// script for harmburger
let hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click',()=>{

  document.querySelector('nav ul').classList.toggle('display-menu')
  hamburger.classList.toggle('hamburger-border')
  
})
// end

// debugging ul hidden/visible on mobile after click
let navUlFunction=()=>{
  let allNavLinks=document.querySelectorAll('header nav ul a')
  allNavLinks.forEach( link=>{
    link.onclick=()=>{
      let navUl=document.querySelector('nav ul')
      if(navUl.classList.contains('display-menu')){
        navUl.classList.remove('display-menu');
      }
    }
  })

}
navUlFunction();

function designGallaryFunc(design){

      let gallaryLinks = document.querySelector('main .gallaryLinks');
      let genderIndicator = document.querySelector('main .gender-indicator');
      gallaryLinks.onclick=(selectedLink)=>{

        if(selectedLink.target.classList.contains('gallaryLink')){
          gallaryLinks.querySelector('.active').classList.remove('active');
        
          selectedLink.target.classList.add('active');
          
         
          let gallaryName=selectedLink.target.getAttribute('data-name');
          // console.log(gallaryName)
  
           let gallaries = document.querySelectorAll('main .gallary-wrap');
          gallaries.forEach(gallary=>{
          let linkGallary=gallary.getAttribute('data-name');
  
            // console.log(linkGallary);
            
            if( (gallaryName==linkGallary) ){
              // console.log(true)
              gallary.classList.remove('hide');
              gallary.classList.add('show');
            }
            else{
              gallary.classList.remove('show');
              gallary.classList.add('hide');
              // console.log(false)
            }
            genderIndicator.textContent=design;
  
        })
        }
     
      }  
};

let preview=(element)=>{
  document.querySelector('body').style.overflow='hidden';
  let previewBox=document.querySelector('.preview-box');
  let previewImg=previewBox.querySelector('img');
  let boxName=previewBox.querySelector('.box-name');
  let cancle=previewBox.querySelector('.cancel');
  let shadowOnBody=document.querySelector('.body-shadow');
  let selectedImgSrc=element.querySelector('img').src;
  // let selectedImgName=element.getAttribute('data-name');
  
  previewImg.src=selectedImgSrc;
  // boxName.textContent=selectedImgName;
  previewBox.classList.add('show');
  shadowOnBody.classList.add('show');
  
 cancle.addEventListener('click',()=>{
  previewBox.classList.remove('show');
  shadowOnBody.classList.remove('show');
  document.querySelector('body').style.overflow='scroll';
 })
}



