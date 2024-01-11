var embedimSnow = document.getElementById("embedim--snow"); if (!embedimSnow) { function embRand(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a } var embCSS = '.embedim-snow{position: absolute;width: 10px;height: 10px;background: white;border-radius: 50%;margin-top:-10px}'; var embHTML = ''; for (i = 1; i < 200; i++) { embHTML += '<i class="embedim-snow"></i>'; var rndX = (embRand(0, 1000000) * 0.0001), rndO = embRand(-100000, 100000) * 0.0001, rndT = (embRand(3, 8) * 10).toFixed(2), rndS = (embRand(0, 10000) * 0.0001).toFixed(2); embCSS += '.embedim-snow:nth-child(' + i + '){' + 'opacity:' + (embRand(1, 10000) * 0.0001).toFixed(2) + ';' + 'transform:translate(' + rndX.toFixed(2) + 'vw,-10px) scale(' + rndS + ');' + 'animation:fall-' + i + ' ' + embRand(10, 30) + 's -' + embRand(0, 30) + 's linear infinite' + '}' + '@keyframes fall-' + i + '{' + rndT + '%{' + 'transform:translate(' + (rndX + rndO).toFixed(2) + 'vw,' + rndT + 'vh) scale(' + rndS + ')' + '}' + 'to{' + 'transform:translate(' + (rndX + (rndO / 2)).toFixed(2) + 'vw, 105vh) scale(' + rndS + ')' + '}' + '}' } embedimSnow = document.createElement('div'); embedimSnow.id = 'embedim--snow'; embedimSnow.innerHTML = '<style>#embedim--snow{position:fixed;left:0;top:0;bottom:0;width:100vw;height:100vh;overflow:hidden;z-index:9999999;pointer-events:none}' + embCSS + '</style>' + embHTML; document.body.appendChild(embedimSnow) }

const breadTop = document.getElementById('globalnav-menutrigger-bread-top');
const animBreadTopOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
const animBreadTopClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');
const animBreadBottomOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');
const animBreadBottomClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');
const boxLinks = document.getElementById('box-links');

let isOpen = false;
document.getElementById('link-btn').addEventListener('click', () => {
    if (isOpen) {
        animBreadTopClose.beginElement();
        animBreadBottomClose.beginElement();
        boxLinks.style.display = "none";
    } else {
        animBreadTopOpen.beginElement();
        animBreadBottomOpen.beginElement();
        boxLinks.style.display = "block";
    }
    isOpen = !isOpen;
});

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.getElementsByClassName('radio-btns');
    let currentInput = 0;
  
    function changeFocus() {
      inputs[currentInput].checked = false;
      currentInput = (currentInput + 1) % inputs.length;
      inputs[currentInput].checked = true;
    }
  
    setInterval(changeFocus, 4000);
});


(function () {
    let header = document.querySelector('header');
    let section1 = document.querySelector('.section-1-box');
    let headerHeight = header.getBoundingClientRect().height;
    let breakpoint = section1.offsetTop - headerHeight;

    let windowPos;

    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {
        updatePos();

        if (windowPos >= breakpoint) {
            header.classList.add('header-fixed');
            section1.style.cssText = "margin-top: " + headerHeight + "px";
        } else {
            header.classList.remove('header-fixed');
            section1.style.cssText = "margin-top: " + headerHeight + 0;
        }
    }

    document.addEventListener('scroll', onScroll);
})()
  