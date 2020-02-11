const form = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const loader = document.querySelector("#loading");

loader.style.display = "none";

form.addEventListener("submit", e => {
    e.preventDefault();
    msg1.textContent = "Searching...";
    loader.style.display = "inherit";
    msg2.textContent = "";

    fetch(`http://localhost:3000/weather?address=${search.value}`).then(
        response => {
            response.json().then(data => {
                if (data.error) {
                    msg1.textContent = data.error;
                } else {
                    msg1.textContent = data.location;
                    msg2.textContent = data.forecast;
                }
            });
            loader.style.display = "none";
        }
    );
});
