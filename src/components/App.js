import React, {useEffect, useState, useReducer} from 'react';
import accountsReducer from "../reducers/accounts";
import accountStatusEnum from "../enums/accountStatus"; //use the enum to map Account Status types. Assumptions: 0 = active, 1 = inactive, 2 = overdue
import moment from "moment";
import Account from "./Account";
import axios from "axios";
import '../styles/styles.scss';

const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [accounts, dispatch] = useReducer(accountsReducer, []); //TODO:: if app becomes more complex, it can be converted to use redux, setup with the store and connected to it


    useEffect(() => {
        axios.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall').then(response => {
            //TODO :: Set up API endpoint as an environment variable
            //TODO:: actually set up action creators if the app becomes more complex. Also then recommend switching to Redux
            setLoading(false);
            dispatch({
                type: 'POPULATE_ACCOUNTS',
                accounts: response.data
                });
            }
        )
    }, []); //runs only upon component render


//another solution to fetching data using async

// useEffect(() => {
//     const fetchAccounts = async () => {
//       const response = await axios.get('https://frontiercodingtests.azurewebsites.net/api/accounts/getall');
//         setLoading(false);
//         dispatch({
//           type: 'POPULATE_ACCOUNTS',
//           accounts: response.data
//         });
//     };
//     fetchAccounts();
// }, []);


  const renderAccounts = (statusEnum) => {
    return accounts.filter(account => account.AccountStatusId === statusEnum).map(account => {
      return (
          <Account key={account.Id} account={account}/>
      )
    });
  };

  return (
      <section id="wrapper">
        <header>
          <div className="title-container">
            <h1>Coding Test</h1>
          </div>
        </header>
        <main className="content" id="home-content">
          <div className="content-title-container">
            <h2>Accounts</h2>
            {isLoading && <h3>Loading...</h3>}
          </div>
          {!isLoading &&
          <section id="account-grid">
            <section className="account-column" id="active-account-column">
              <div className="account-container-title" id="active-account-container-title">
                <h3>Active</h3>
              </div>
              <div className="account-container active-account">
                {renderAccounts(accountStatusEnum.active)}
              </div>
            </section>
            <section className="account-column" id="overdue-account-column">
              <div className="account-container-title" id="overdue-account-container-title">
                <h3>Overdue</h3>
              </div>
              <div className="account-container overdue-account">
                {renderAccounts(accountStatusEnum.overdue)}
              </div>
            </section>
            <section className="account-column" id="inactive-account-column">
              <div className="account-container-title" id="inactive-account-container-title">
                <h3>Inactive</h3>
              </div>
              <div className="account-container inactive-account">
                {renderAccounts(accountStatusEnum.inactive)}
              </div>
            </section>
          </section>
          }
        </main>
        <footer>
          <p className="copy">&copy; {moment().year()}
          </p>
        </footer>
      </section>
  );
};

export default App;

