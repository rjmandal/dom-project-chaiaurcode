const form = document.querySelector("form");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const result = document.querySelector("#results");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please provide a valid height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.5) {
            result.innerHTML = `<span>${bmi} <br/> Underweight</span>`;
        } else if(bmi >= 18.5 && bmi <= 24.9) {
            result.innerHTML = `<span>${bmi} <br/> Normal</span>`;
        } else if(bmi >= 25 && bmi <= 29.9) {
            result.innerHTML = `<span>${bmi} <br/> Overweight</span>`;
        } else {
            result.innerHTML = `<span>${bmi} <br/> Obese</span>`;
        }
        // result.innerHTML = `<span>${bmi} <br/> ${bmi}</span>`;
    }
});
