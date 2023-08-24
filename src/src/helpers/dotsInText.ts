export const dotsInText = (text: string, count?: number) => {
    if (text.length > 10) {
        const array = text.split('');
        const start = array.slice(0, count ? count : 5).join('');
        const end = array.slice(count ? -count : -5).join('');
        return `${start}...${end}`;
    } else return text;
};
