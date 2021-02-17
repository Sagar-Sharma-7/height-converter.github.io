const cm = document.querySelector("#cm");
const inches = document.querySelector("#inches");
const feet = document.querySelector("#feet"); 
const mtr = document.querySelector("#mtr");
const submit = document.querySelector("#submit");
const reset = document.querySelector("#reset");
const inp = document.getElementById("inp");
const btn = document.querySelectorAll(".btn");
const bars = document.querySelectorAll(".bars");
const footer = document.querySelector("footer");

btn.forEach((elem) => {
    elem.addEventListener("click", () => {
        inp.style.display = "block";
        reset.style.display = "block";
        submit.style.display = "block";
        footer.style.display = "none";
        btn.forEach((hide) => {
            hide.style.display = "none";
        });
    });
});

cm.addEventListener("click", () => {
    inp.setAttribute("placeholder", "cm");

    submit.addEventListener("click", () => {
        bars[0].innerHTML = inp.value*0.39370 + " inches";
        bars[1].innerHTML = inp.value*0.032808 + " feet";
        bars[2].innerHTML = inp.value/100 + " meters";
    });
});

inches.addEventListener("click", () => {
    inp.setAttribute("placeholder", "inches");

    submit.addEventListener("click", () => {
        bars[0].innerHTML = inp.value/0.39370 + " cm";
        bars[1].innerHTML = inp.value*0.083333 + " feet";
        bars[2].innerHTML = inp.value/39.370 + " meters";
    });
});

feet.addEventListener("click", () => {
    inp.setAttribute("placeholder", "feet");

    submit.addEventListener("click", () => {
        bars[0].innerHTML = inp.value/0.032808 + " cm";
        bars[1].innerHTML = inp.value*12 + " inches";
        bars[2].innerHTML = inp.value/3.2808 + " meters";
    });
});


mtr.addEventListener("click", () => {
    inp.setAttribute("placeholder", "meters");

    submit.addEventListener("click", () => {
        bars[0].innerHTML = inp.value/0.01 + " cm";
        bars[1].innerHTML = inp.value*39.370 + " inches";
        bars[2].innerHTML = inp.value*3.2808 + " feet";
    });
});

submit.addEventListener("click", () => {
    bars.forEach((addClass) => {
        addClass.classList.add("show-bars");
    });
})

reset.addEventListener("click", () => {
    location.reload();
});


