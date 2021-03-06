

    function animate(obj, initVal, lastVal, duration) {

        let startTime = null;

        let currentTime = Date.now();

        const step = (currentTime ) => {

            if (!startTime) {
            startTime = currentTime ;
            }
 
            const progress = Math.min((currentTime  - startTime) / duration, 1);
          
            obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }else{
                window.cancelAnimationFrame(window.requestAnimationFrame(step));
            }
        };

       
        window.requestAnimationFrame(step);
    }

let text1 = document.getElementById('01');
let text2 = document.getElementById('02');

const load = () =>{

    animate(text1, 0, 2000, 2000);
    animate(text2, 0, 100, 2000);

}

