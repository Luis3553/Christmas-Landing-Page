var embedimSnow=document.getElementById("embedim--snow");if(!embedimSnow){function embRand(e,n){return Math.floor(Math.random()*(n-e+1))+e}var embCSS=".embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}",embHTML="";for(i=1;i<200;i++){embHTML+='<i class="embedim-snow"></i>';var rndX=1e-4*embRand(0,1e6),rndO=1e-4*embRand(-1e5,1e5),rndT=(10*embRand(3,8)).toFixed(2),rndS=(1e-4*embRand(0,1e4)).toFixed(2);embCSS+=".embedim-snow:nth-child("+i+"){opacity:"+(1e-4*embRand(1,1e4)).toFixed(2)+";transform:translate("+rndX.toFixed(2)+"vw,-10px) scale("+rndS+");animation:fall-"+i+" "+embRand(10,30)+"s -"+embRand(0,30)+"s linear infinite}@keyframes fall-"+i+"{"+rndT+"%{transform:translate("+(rndX+rndO).toFixed(2)+"vw,"+rndT+"vh) scale("+rndS+")}to{transform:translate("+(rndX+rndO/2).toFixed(2)+"vw, 105vh) scale("+rndS+")}}"}(embedimSnow=document.createElement("div")).id="embedim--snow",embedimSnow.innerHTML="<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}"+embCSS+"</style>"+embHTML,document.body.appendChild(embedimSnow)}const breadTop=document.getElementById("globalnav-menutrigger-bread-top"),animBreadTopOpen=document.getElementById("globalnav-anim-menutrigger-bread-top-open"),animBreadTopClose=document.getElementById("globalnav-anim-menutrigger-bread-top-close"),animBreadBottomOpen=document.getElementById("globalnav-anim-menutrigger-bread-bottom-open"),animBreadBottomClose=document.getElementById("globalnav-anim-menutrigger-bread-bottom-close"),boxLinks=document.getElementById("box-links");let isOpen=!1;document.getElementById("link-btn").addEventListener("click",()=>{isOpen?(animBreadTopClose.beginElement(),animBreadBottomClose.beginElement(),boxLinks.style.display="none"):(animBreadTopOpen.beginElement(),animBreadBottomOpen.beginElement(),boxLinks.style.display="block"),isOpen=!isOpen}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementsByClassName("radio-btns");let n=0;setInterval(function(){e[n].checked=!1,n=(n+1)%e.length,e[n].checked=!0},4e3)}),function(){let e=document.querySelector("header"),n=document.querySelector(".section-1-box");var t=e.getBoundingClientRect().height,o=n.offsetTop-t;let d;document.addEventListener("scroll",function(){d=window.scrollY,d>=o?(e.classList.add("header-fixed"),n.style.cssText="margin-top: "+t+"px"):(e.classList.remove("header-fixed"),n.style.cssText="margin-top: "+t+0)})}();