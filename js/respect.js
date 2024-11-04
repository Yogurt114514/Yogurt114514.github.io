if(PublicSacrificeDay()){
    document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
  }
  
  function PublicSacrificeDay(){
    var PSFarr=new Array("0108","0127","0706","0707","0909","0918","1213");
    var currentdate = new Date();
    var str = "";
    var mm = currentdate.getMonth()+1;
    if (currentdate.getMonth() + 1 === 4 && currentdate.getDate() === 1) {
      (function() {
        var bottom = Math.floor(60 * Math.random()),
            right = Math.floor(50 * Math.random()),
            rotate = Math.floor(360 * Math.random());
        var foolsEgg = document.createElement("img");
        foolsEgg.src = "/img/hair.png";
        foolsEgg.style.position = "fixed";
        foolsEgg.style.bottom = "".concat(bottom, "%");
        foolsEgg.style.right = "".concat(right, "%");
        foolsEgg.style.zIndex = "9999";
        foolsEgg.style.pointerEvents = "none";
        foolsEgg.style.width = "40%";
        foolsEgg.style.maxWidth = "190px";
        foolsEgg.style.transform = "".concat("rotate(", rotate, "deg)");
        document.body.append(foolsEgg);
      })();
    }
    if(currentdate.getMonth()>9){
      str += mm;
    }else{
      str += "0" + mm;
    }
    if(currentdate.getDate()>9){
      str += currentdate.getDate();
    }else{
      str += "0" + currentdate.getDate();
    }
    if(PSFarr.indexOf(str)>-1){
        return 1;
    }else{
        return 0;
    }
  }
  
  // 自动网站变灰
  // 0108 - 周总理忌辰
  // 0127 - 缅怀大屠杀受难者国际纪念日
  // 0706 - 朱总司令忌辰
  // 0707 - 七七事变
  // 0909 - 毛主席忌辰
  // 0918 - 九一八事变
  // 1213 - 南京公祭日
  