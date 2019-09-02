const container = document.querySelector('.container');

let i;
let queue = [];


function getNumberOfCustomers() {
    return Math.floor(Math.random() * 36);
}
// BUILDS INITIAL 40 BARS WITH NUMBER OF CUSTOMERS
function letsGo() {
    for (i = 0; i < 40; i++) {
        let queueSize = getNumberOfCustomers();
        queue.push(queueSize);
        container.innerHTML += "<div class='bar'></div>";
    }
    console.log(queue);
    adjustHeight();
   
}

// ADJUSTS HEIGHT OF BARS ACCORDING TO QUEUE ARRAY
function adjustHeight(){
    const bar = document.querySelectorAll('.bar');
    console.log(bar[2]);
    for (i = 0; i < bar.length; i++){
        bar[i].style.height = (queue[i] * 2) + "px";
        
    }
    updateQueue();

}

// UPDATE QUEUE
function updateQueue(){
    queue.unshift(getNumberOfCustomers());
console.log(queue);
    setTimeout(adjustHeight, 1000);

}








letsGo();