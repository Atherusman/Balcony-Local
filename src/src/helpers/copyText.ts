import cogoToast from 'cogo-toast';

export const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(r => r);
    cogoToast.success('Copied!');
};
