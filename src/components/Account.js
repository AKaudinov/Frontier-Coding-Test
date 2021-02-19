import React from 'react';
import moment from "moment"; //use moment to format dates as per acceptance criteria
import * as formatter from '../utilities/formatter';

////////
//Marketing notes state: Empty due dates for inactive accounts should hide.
//Acceptance Criteria states: Empty due dates hide field and label
            //So PaymentDue date is hidden if it's null, not just if it's null for inactive accounts
////////

const Account = ({ account }) => (
        <ul className="account-data-list">
            <li><label>Name: {account.LastName}, {account.FirstName}</label></li>
            <li><label>Email: {account.Email}</label></li>
            <li><label>Phone Number: {formatter.formatPhoneNumber(account.PhoneNumber)}</label></li>
            <li><label>Amount Due: {formatter.formatCurrency(account.AmountDue)}</label></li>
            {account.PaymentDueDate && <li><label>Due Date: {moment(formatter.formatDate(account.PaymentDueDate)).format('MM/DD/yyyy')}</label></li>}
        </ul>
);
//another option for formatting date: moment(account.PaymentDueDate.substring(0, 10)).format('MM/DD/yyyy')





export default Account;
