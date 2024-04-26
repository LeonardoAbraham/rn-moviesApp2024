export class Formatter {
    // eslint-disable-next-line prettier/prettier
    public static currency(value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);
    }
}