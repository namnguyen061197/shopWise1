// preloading
var preLoading = document.getElementById("preLoading")
function loadingFunc(callback){
    setTimeout(function() {
        preLoading.style.display = "none";
    },2000)
    callback()
}
function showPoPup() {
    var popup = document.getElementById("popup-modal");
    setTimeout(() => {
        popup.style.display="flex";
    }, 3000);
}
loadingFunc(showPoPup)


var close_popup = document.getElementById("close-popup");
var popup = document.getElementById("popup-modal");
function closePopup() {
    popup.style.display="none";
}


// seacrh_overlay 
var search_item = document.querySelector(".search-item");
var search_overlay = document.querySelector(".search_overlay");
var overlay_search = document.querySelector(".overlay_search");
var search_container = document.querySelector(".search_container");

function closeSearchModal() {
    search_overlay.style.animation = "comeOut 1s";
    setTimeout(function() {
        search_overlay.style.display="none";
    },900)
}
 
search_item.addEventListener('click' ,() => {
    search_overlay.style.animation = "comeIn 1s";
    search_overlay.style.display="flex";
})


// sticky bar
window.onscroll = function() {myFunction()};

var bottom_header = document.getElementById("header-bottom");
var top_header = document.getElementById("header-top");
var sticky = bottom_header.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
    bottom_header.classList.add("sticky");
    top_header.style.display="none";
} else {
    bottom_header.classList.remove("sticky");
    top_header.style.display="block";
}
}

// show-language-extends
var lang_active = document.getElementById('active-lang');
var lang_list = document.getElementById('list-lang');
var money_active = document.getElementById('active-money');
var money_list = document.getElementById('list-money');
lang_active.addEventListener('click',() => {
    if(lang_list.style.display === "none") {
        lang_list.style.display = "block"
    } else {
        lang_list.style.display = "none"
    }
})
money_active.addEventListener('click',() => {
    if(money_list.style.display === "none") {
        money_list.style.display = "block"
    } else {
        money_list.style.display = "none"
    }
})

 // img-select (exclusive product)
 var image_list = document.querySelectorAll(".image__item");
 var main_img = document.querySelector('#main_img');
 var list_srcMainImg = [
     {src: "./images/product_img1.jpg"},
     {src: "./images/product_img1-2.jpg"},
     {src: "./images/product_img1-3.jpg"},
     {src: "./images/product_img1-4.jpg"},

 ]
 image_list.forEach(ele => {
     ele.addEventListener('click',() => {
         var number = ele.getAttribute("name");
         main_img.setAttribute("src",list_srcMainImg[number].src);
     })
 })

 		// ============================================modal-prd======================================
		// close-modal-prd
		var modal_prd = document.getElementById("product-modal");
		function closeModalProduct() {
            modal_prd.style.display = "none";
            document.body.style.overflow ="visible";
		}
		var show_modal = document.querySelectorAll('.modalPrd');
		show_modal.forEach(ele => {
			ele.addEventListener('click',() => {
                modal_prd.style.display="flex";
                document.body.style.overflow="hidden"
			})
        })

        

        // =========================================modal-random=====================================
        var random_modal = document.getElementById("modal_random");
        function closeRandomModal() {
            random_modal.style.display="none";
            document.body.style.overflow ="visible";
        }
        var show_RandomModal = document.querySelectorAll('.randomModal');
		show_RandomModal.forEach(ele => {
			ele.addEventListener('click',() => {
                random_modal.style.display = "flex";
                document.body.style.overflow="hidden";
            })
        })
        

        // change-Quality
		 function changeQuality(n) {
            var prd_quality = document.getElementById("prd-quality");
           var x = Number(prd_quality.value) + n;
           if (x === 0) {x=1}
           prd_quality.value = x
        }
        // color-select
        var list_color = document.querySelectorAll('.color-item');
        list_color.forEach(ele => {
            ele.addEventListener('click',() => {
                for( color of list_color) {
                    color.style.border ="none";
                    color.style.boxShadow ="none"
                }
                ele.style.border ="2px solid white";
                ele.style.boxShadow ="0px 0px 5px #7a8296"
            })
        })
        // size-select
        var list_size = document.querySelectorAll('.size-item');
        list_size.forEach(ele => {
            ele.addEventListener('click',() => {
                for( size of list_size) {
                    size.style.background ="white";
                    size.style.color ="black";
                }
                ele.style.background ="#fa4e62";
                ele.style.color ="white";
            })
        })