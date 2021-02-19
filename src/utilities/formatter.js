export const formatCurrency = (amount) => {
    return '$' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') //use regex to format currency
};


export const formatPhoneNumber = (phoneNumber) => {
    const match = phoneNumber.match(/^(\d{3})(\d{3})(\d{4})$/); //use regex to match US based phone numbers,
    return `(${match[1]})-${match[2]}-${match[3]}`//combine the matched sections to (###)-###-####
};

export const formatDate = (dateToFormat) => {
    return dateToFormat ? new Date(dateToFormat.replace(/-/g, '/').replace(/T.+/, '')) : null; //strip the time portion from the iso Date, so we do not end up losing a day
    //another way:
    //moment(account.PaymentDueDate.substring(0, 10)).format('MM/DD/yyyy')
};
