// set initial value
let count = 0;

// select value and button


 
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// console.log(btns)
btns.forEach(function(item) {
    // console.log(item)
    item.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList)
        // console.log(e)
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")){
            count--;

        }
        else if(styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color ="green";
            document.body.style.backgroundColor = "orange"

        }else if(count < 0){
            value.style.color = "red"
            document.body.style.backgroundColor = "#cc99ff"
        }else{
            value.style.color ="#222"
            document.body.style.backgroundColor = "#F1F5F8"
        }

        value.textContent = count;


    
    })

   


})


