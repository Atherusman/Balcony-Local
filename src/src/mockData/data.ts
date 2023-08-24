type tTaxesList = {
    id: string;
    total?: string;
    year: string;
    billed: string;
    ballance: string;
    interest: string;
    total_due: string;
    data: {
        id: string;
        due_date?: string;
        year: string;
        type?: string;
        billed: string;
        ballance: string;
        interest: string;
        total_due: string;
        status?: 'open' | 'paid';
        tx?: string;
        className?: string;
    }[];
};

export const taxesList: tTaxesList[] = [
    {
        id: '1',
        year: '2023',
        billed: '$441.23',
        ballance: '$441.23',
        interest: '$0.00',
        total_due: '$441.23',
        data: [
            {
                id: '1',
                due_date: '01/02/2023',
                year: '',
                type: 'Tax',
                billed: '$441.23',
                ballance: '$441.23',
                interest: '$0.00',
                total_due: '$441.23',
                status: 'open',
                tx: '0xdafea492d9c',
            },
            {
                id: '2',
                due_date: '01/02/2023',
                year: '',
                type: 'Tax',
                billed: '$441.23',
                ballance: '$441.23',
                interest: '$0.00',
                total_due: '$441.23',
                status: 'paid',
                tx: '0xdafea492d9c',
            },
        ],
    },
    {
        id: '2',
        year: '2023',
        billed: '$441.23',
        ballance: '$441.23',
        interest: '$0.00',
        total_due: '$441.23',
        data: [
            {
                id: '3',
                due_date: '01/02/2023',
                year: '',
                type: 'Tax',
                billed: '$441.23',
                ballance: '$441.23',
                interest: '$0.00',
                total_due: '$441.23',
                status: 'open',
                tx: '0xdafea492d9c',
            },
            {
                id: '4',
                due_date: '01/02/2023',
                year: '',
                type: 'Tax',
                billed: '$441.23',
                ballance: '$441.23',
                interest: '$0.00',
                total_due: '$441.23',
                status: 'paid',
                tx: '0xdafea492d9c',
            },
        ],
    },
];
