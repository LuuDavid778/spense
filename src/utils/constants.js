
export const fakedb =[
    {   
        id: 0,
        tname: "Roblox Giftcard",
        category: "Entertainment",
        cost: 25,
        status: "Paid",
        description: "A giftcard for your kid's favorite game.",
        label: 'Others'
    },
    {
        id: 1,
        tname: "Gamestop Stock",
        category: "Personal",
        cost: 10,
        status: "Paid",
        description: "Your stonk to getting rich",
        label: 'Personal'
    },
    {
        id: 2,
        tname: "Phone Bill",
        category: "Bills & Fees",
        cost: 5,
        status: "Unpaid",
        description: "Bill from Telus",
        label: 'Bills&Fees'

    },
    {
        id: 3,
        tname: "Bitcoin",
        category: "Personal",
        cost: 10,
        status: "Paid",
        description: "making fat bank",
        label: 'Personal'

    },
]

export const optionCategory = [
    {id: 0, value: 'Foods&Drinks' , label: 'Foods&Drinks', fakedbId: null},
    {id: 1, value: 'Bills&Fees' , label: 'Bills&Fees', fakedbId: 2},
    {id: 2, value: 'Beauty&Health' , label: 'Beauty&Health', fakedbId: null},
    {id: 3, value: 'Personal' , label: 'Personal', fakedbId: 1},
    {id: 4, value: 'Others' , label: 'Others', fakedbId: 3},
    {id: 5, value: 'All Categories' , label: 'All Categories', fakedbId: -1}
]