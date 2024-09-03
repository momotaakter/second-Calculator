//selector area
const resultarea=document.getElementById('equalbtn');
const outputarea=document.getElementById('outputarea');
const buttons=document.querySelectorAll('button');
const chngeValue=Array.from(buttons);
let string='';
chngeValue.forEach((x)=>{
    x.addEventListener('click',(e)=>{
    

        if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            outputarea.value=string;
    
           }else if(e.target.innerHTML=='AC'){
          string=''
            outputarea.value=string;
    
           }
           else if(e.target.innerHTML=='='){
            string=eval(string);
            outputarea.value=string;
           }
           
           else{
               string +=e.target.innerHTML;
               outputarea.value=string;
           }

       
       
        

    })
})