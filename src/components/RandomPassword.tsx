export const getRandomColor = () => {
    const randomValue = () => Math.floor(Math.random() * 256);
    const red = randomValue();
    const green = randomValue();
    const blue = randomValue();
    return `rgb(${red}, ${green}, ${blue})`;
};