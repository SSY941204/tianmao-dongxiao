window.onload = function(){
{
	let imgs = document.querySelectorAll(".banner-down .bannerbox")
		let dots = document.querySelectorAll(".dot .dot1")
		dots.forEach(function(val,index){
			val.onclick = function(){
				for(i = 0; i < dots.length; i ++){
					dots[i].classList.remove("active")
					imgs[i].classList.remove("active")
				}
				val.classList.add("active")
				imgs[index].classList.add("active")
			}
		})
		let now = 0;
		
		function fn(){
			now++;
			if(now == 6){
				now = 0;
			}
			for(i = 0; i < dots.length; i ++){
				dots[i].classList.remove("active")
				imgs[i].classList.remove("active")
			}
			dots[now].classList.add("active")
			imgs[now].classList.add("active")
		}
		let st = setInterval(fn,2000);
		let banner = document.querySelector(".banner-down")
		banner.onmouseover = function(){
			clearInterval(st);
		}
		banner.onmouseout = function(){
			st = setInterval(fn,2000);
		}
}


// topbar开始
{
	let obj;
	let topbar = document.querySelector("#topbar");
	window.onscroll = function(){
		obj = document.documentElement.scrollTop === 0?document.body:document.documentElement;
		let st = obj.scrollTop;
		if(st > 700){
			topbar.style.top = 0;
		}else{
			topbar.style.top = "-49px";

		}

	}
	let kuais = document.querySelectorAll("#leftbar li");
	let floors = document.querySelectorAll(" .floor")
	let leftbar = document.querySelector("#leftbar");
	window.addEventListener("scroll", function(){
		let st =obj.scrollTop;
		if(st > 500){
			leftbar.style.cssText = "width:36px;height:409px"
		}else{
			leftbar.style.cssText = "width:0px;height:0px"
		}


		floors.forEach(function(val,index){
			if(st > floors[index].offsetTop){
				for(i = 0; i < kuais.length; i++){
					kuais[i].classList.remove("active")
				}
				kuais[index].classList.add("active")
			}
		})
		kuais.forEach(function(val,index){
			val.onclick = function(){
				let ot = floors[index].offsetTop;
				console.log(ot);
				animate(obj,{scrollTop:ot-60})
			}
		})
	})
}
// 头部动效
{
	let yi = document.querySelectorAll(".yi");
	let a = document.querySelectorAll(".head-rightwenzi1 a")
	yi.forEach(function(val,index){
		val.onmouseover = function(){
			a[index].classList.add("active");
		}
		val.onmouseout = function(){
			a[index].classList.remove("active");
		}
	})

}

//搜索动效
    {
        let input = document.querySelector(".search-up input");
        input.onfocus = function () {
            input.classList.add("active1");
            input.classList.remove("active2");
        }
        input.onblur = function () {
            input.classList.add("active2");
            input.classList.remove("active1");
        }
    }
//左侧类表
{
	let lists = document.querySelectorAll(".banner-down .list1");
	let biglists = document.querySelectorAll(".banner-down .biglist");
	lists.forEach(function(val,index){
        val.onmouseover = function(){
			val.classList.add("active");
			biglists[index].style.display = "block";
        }
        val.onmouseout = function(){
            val.classList.remove("active");
            biglists[index].style.display = "none";
        }
	})


}







}