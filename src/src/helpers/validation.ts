export const isValidEmail = (str: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(str);
};

export const validateField = (type: string, value: string) => {
    if (!value) {
        return `${type} is required`;
    }
    if (type === 'email' && !isValidEmail(value)) {
        return `${type} is not valid`;
    }
    return null;
};
