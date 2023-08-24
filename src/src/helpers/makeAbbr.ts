export const makeAbbr = (words: string[]) => {
    return words
        .reduce((prevVal, curWord) => prevVal + (curWord ? curWord[0] : ''), '')
        .toUpperCase();
};
