  const filterButtons=document.querySelector("#filter-btns").children;
  const item=document.querySelector("portfolio-gallery").children;


   for(Let i=0; i<filterButtons.length; i++){
	  filterButtons[i].addEventListener("click",function(){
	    for(Let j=0; j<filterButtons.length; j++){
			filterButtons[j].classList.remove("active")

	    }
	    this.classList.add("active");
	    const target=this.getAttribute("data-target")
	
	    for (Let k=0; k<items.length; k++){
			item[k].style.display="none";
			if (target==items[k].getAttribute("data-id"))
			{
				items[k].style.display="block";
			}
			if (target=="all"){
				items[k].style.display="block";
			}
	}


})

}

	const closeLightbox=document.querySelector(".close-lightbox");
	closeLightbox.addEventListener("click",function(){
		document.querySelector(".lightbox").classList.add("hide");
	})