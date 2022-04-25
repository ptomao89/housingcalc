function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']");

inputs.forEach(function (input) {
    input.addEventListener("change", function (e) { 
        const this_input = e.target; 
             const input_value = parseFloat(this_input.value);
                const this_row = this_input.closest(".row");

                    const staten = this_row.querySelector(".staten");
                    const staten_price = parseFloat(staten.dataset.price);
                    const staten_cost = input_value * staten_price;
                    const staten_span = staten.querySelector("span");
                    staten_span.innerHTML= round_number(staten_cost);

                    const bronx = this_row.querySelector(".bronx");
                    const bronx_price = parseFloat(bronx.dataset.price);
                    const bronx_cost = input_value * bronx_price;
                    const bronx_span = bronx.querySelector("span");
                    bronx_span.innerHTML= round_number(bronx_cost);

                    const queens = this_row.querySelector(".queens");
                    const queens_price = parseFloat(queens.dataset.price);
                    const queens_cost = input_value * queens_price;
                    const queens_span = queens.querySelector("span");
                    queens_span.innerHTML= round_number(queens_cost);

                    const brooklyn = this_row.querySelector(".brooklyn");
                    const brooklyn_price = parseFloat(brooklyn.dataset.price);
                    const brooklyn_cost = input_value * brooklyn_price;
                    const brooklyn_span = brooklyn.querySelector("span");
                    brooklyn_span.innerHTML= round_number(brooklyn_cost);

                    const manhattan = this_row.querySelector(".manhattan");
                    const manhattan_price = parseFloat(manhattan.dataset.price);
                    const manhattan_cost = input_value * manhattan_price;
                    const manhattan_span = manhattan.querySelector("span");
                    manhattan_span.innerHTML= round_number(manhattan_cost);

                    staten.classList.add("active");
                    bronx.classList.add("active");
                    queens.classList.add("active");
                    brooklyn.classList.add("active");
                    manhattan.classList.add("active");
                 
});
    });
