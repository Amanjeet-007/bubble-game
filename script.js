let hit = document.querySelector(".box1");
        let score = document.querySelector(".scr");
        let tim0 = document.querySelector(".time");
        time = tim0.textContent;
        time = Number(time);
        let sc = score.textContent;
        sc = Number(sc)
         //-------------------------------bubbles
        let bubble = "";
        //--------------------------------bubbles inner number
        let bubbleNo = "";
        
            hit.textContent = Math.floor(Math.random()*10);
        
        

       
        for( let i = 1 ; i <= 60; i++){
            bubbleNo = Math.floor(Math.random()*10);
        //------------------------bubbleNo = Number(bubbleNo);
              bubble +=`<div class="bubble">${bubbleNo}</div>`     
        }
        document.querySelector("#Rplace").innerHTML = bubble   ;
        //--------------------------------bubble inserted
        let All = document.querySelectorAll(".bubble");
        
        
        
        All.forEach((el)=>{
            el.addEventListener("click",()=>{
                
                
                let bubblein = el.textContent;
                bubblein = Number(bubblein);
                if(bubblein == Number(hit.textContent)){

                    sc += 10
                    
                }
                score.textContent = sc
                
                hit.textContent = Math.floor(Math.random()*10);
                let hitnum = hit.textContent;
                hitnum = Number(hitnum);
                
            })
        })

// --------------------------------------------timer
let res = document.querySelector(".result");
let numbe = document.querySelector(".number");
let restart = document.querySelector(".restart");

 time = 25;

let timer = ()=>{
   
    if(0 < time){
        time -= 1
       tim0.textContent = time ;
       if( time == 0){
        res.style.visibility = "visible";
        numbe.innerHTML = `${sc}` ;
        // confirm(`Your Score is ${sc}`)
        restart.addEventListener("click",()=>{
            timer()
        })
    }

 }
 else{
    return 0;
 }
       }
    

 setInterval(timer,1000)
