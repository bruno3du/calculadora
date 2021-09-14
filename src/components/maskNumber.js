export default function formatNumber(value) {
    if (value) {
        let formated = String(value).replace(/\./g, ',');
        return formated.replace(/(?=(\d{3})+(\D))\B/g, '.');
    } else {
        return value;
    }
}