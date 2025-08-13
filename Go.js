function countdown() {
    console.log("Countdown...");

    setTimeout(() => console.log(3), 1000);
    setTimeout(() => console.log(2), 2000);
    setTimeout(() => console.log(1), 3000);
    setTimeout(() => console.log("Go!"), 4000);
    setTimeout(()=> console.log("Finished....!"),5000);
}

countdown();



// function countdown() {
//     let messages = [3, 2, 1, "Go!"];

//     for (let i = 0; i < messages.length; i++) {
//         setTimeout(() => {
//             console.log(messages[i]);
//         }, (i + 1) * 1000);
//     }
// }

// countdown();
