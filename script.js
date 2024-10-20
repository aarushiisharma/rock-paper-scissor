const rock=document.getElementById('rock')
        const paper=document.getElementById('paper')
        const scissor=document.getElementById('scissor')
        const result=document.getElementById('result')
        const myscore=document.getElementById('myscore')
        const compscore=document.getElementById('compscore')


        function getComputerChoice(){
            const random=Math.floor(Math.random() * 3) + 1;
            console.log(random);
            
        return  random;
        console.log();
        
        }        

        let mycount=0;
        let compcount=0;
        rock.onclick=function(){
            
            const random=getComputerChoice();
            if(random==1){
                result.innerText="TIE";
            }
            else if(random==2){
                result.innerText="COMPUTER WINS"
                compcount++;
                compscore.textContent=compcount;
    
            }
            else{
                result.innerText="YOU WIN"
                mycount++;
                myscore.textContent=mycount;
            }
        }
        paper.onclick=function(){
           
            const random=getComputerChoice();
            if(random==1){
                result.innerText="YOU WIN";
                mycount++;
                myscore.textContent=mycount;
            }
            else if(random==2){
                result.innerText="TIE"
            }
            else{
                result.innerText="COMPUTER WINS"
                compcount++;
                compscore.textContent=compcount;
            }
        }
        scissor.onclick=function(){
            
            const random=getComputerChoice();
            if(random==1){
                result.innerText="COMPUTER WINS";
                compcount++;
                compscore.textContent=compcount;
            }
            else if(random==2){
                result.innerText="YOU WIN"
                mycount++;
                myscore.textContent=mycount
            }
            else{
                result.innerText="TIE"
            }
        }
