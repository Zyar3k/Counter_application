document.getElementById("incBtn").addEventListener("click", incCounter);
document.getElementById("decBtn").addEventListener("click", decCounter);
document.getElementById("resetBtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterValue = 0;


function updateCounterDisplay(){
    counterDisplay.textContent = counterValue;
}


function incCounter(){
    counterValue++;
    updateCounterDisplay();
    }
    function decCounter(){
        if(counterValue>0){

            counterValue--;
        updateCounterDisplay();
        }
        }

        function resetCounter(){
            counterValue = 0
            updateCounterDisplay();
}