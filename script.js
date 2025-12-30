const filters = {   
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    exposure: {
        value: 100,
        min: 0,
        max: 200,   
        unit: "%",
    },
    hueRotation: {
        value: 0,
        min: -180,
        max: 180,
        unit: "deg",
    },
    blur: {
        value: 0,
        min: 0,
        max: 10,
        unit: "px",
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%",
    },
};

function createFilterElement(filterName, unit="%",value,min,max) {
    const div = document.createElement("div");
    div.classList.add("filter");
    const input = document.createElement("input");
    input.type = "range";
    input.id = filterName;
    input.min = min;
    input.max = max;
    input.value = value;
    input.dataset.unit = unit;

    //name of filter
    const p = document.createElement("p");
    p.textContent = filterName.charAt(0).toUpperCase() + filterName.slice(1);

    //apend to div
    div.appendChild(p);
    div.appendChild(input);
    
    return div;
}


const filtersContainer = document.querySelector(".filters");

Object.keys(filters).forEach((filterName) => {
    const filter = filters[filterName];
    const element = createFilterElement(filterName, filter.unit, filter.value, filter.min, filter.max);
    filtersContainer.appendChild(element);
});