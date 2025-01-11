export default function debounce(callback, delay) {
let debounceTimer;
    return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        callback(...args);
    }, delay);
    };
};