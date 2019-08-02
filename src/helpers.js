export function getDarkOrLightTextColorFromRgb(color) {
    // Outputs whether text color should be white or black based upon the RGB value.
    // If the RGB is light, we will need black text - if the RGB is dark, we will need white text.
    return color.match(/\d+/g)
        .map(num => +num)
        .reduce((a, cv) => a + cv) >= 255 * 3 / 2 
            ? 'black' //true   // color is light - need black text
            : 'white' //false; // color is dark - need white text
}

export function randomRgb() {
    let r = () => Math.floor(Math.random() * 256);
    return `rgb(${r()}, ${r()}, ${r()})`;
}