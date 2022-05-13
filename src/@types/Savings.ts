export enum SavingType {
    MONTHLY_BILLS,
    GROCERIES,
    FOOD,
    GENERAL_SERVICES,
    HOME_APPLIANCE,
    GIFTS,
    INVESTMENT
}

export type Savings = {
    id?: number,
    name: string,
    price: string,
    date: string,
    type: SavingType
}