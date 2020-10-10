const Common = {
    getTimeFormat(time) {
        let date = new Date(time);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },
    shortWord(words) {
        return words ? (words.length >= 10 ? words.substring(0, 10) + '...' : words) : '';
    },
}

export default Common;