import React, { useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../context/UserContext";
import EachTransaction from "../components/EachTransaction";
import FormRowSelect from "../components/FormRowSelect";
import FormInput from "../components/FormInput";
import Pagination from "../components/Pagination";
import { MdIncompleteCircle } from "react-icons/md";
import Stat from "../components/Stat";
import styled from "styled-components";

function Transactions() {
  const {
    transactions,
    transactionFilterOptions,
    selectedTransactionFilter,
    handleChange,
    phoneNumber,
    filteringTransactions,
    fetchTransaction,
    page,
    clearFilter,
    userAccount,
    isAdmin,
    isAgent,
    numOfPages,
    totalSales,
    transactionFrom,
    transactionTo,
    totalProfit,
    selectedTransactionStatus,
    transactionStatusList,
    totalDebit,
    totalCredit,
  } = useGlobalContext();
  const [localSearch, setLocalSearch] = useState({
    phoneNumber: phoneNumber || "",
    userAccount: userAccount || "",
  });
  const [showStat, setShowStat] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(!showFilter);
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // if (filteringTransactions) return;
    handleChange({ name, value });
  };

  useEffect(() => {
    fetchTransaction();
    // eslint-disable-next-line
  }, [
    page,
    phoneNumber,
    selectedTransactionFilter,
    userAccount,
    transactionFrom,
    transactionTo,
    selectedTransactionStatus,
  ]);
  const debounce = () => {
    let timeoutID = "";
    return (e) => {
      let name = e.target.name;
      let value = e.target.value;
      clearTimeout(timeoutID);
      setLocalSearch({ ...localSearch, [name]: value });
      timeoutID = setTimeout(() => {
        handleChange({ name, value });
      }, [2000]);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  const clearAllFilter = () => {
    setLocalSearch({ phoneNumber: "", userAccount: "" });
    clearFilter();
  };
  return (
    <div className="sm:ml-[5rem] text-center md:ml-[4rem] bg-white p-4 rounded">
      <p className="underline title">Transactions</p>
      <div className="bg-[var(--grey-200)] text-[var(--primary-600)] capitalize flex justify-evenly  items-center mb-2 rounded-lg px-3 font-bold">
        <div className="">
          <p>total credit</p>
          <h5 className="text-green-600">₦{totalCredit.toFixed(2)}</h5>
        </div>
        <div className="">
          <p>total debit</p>
          <h5 className="text-red-600">-₦{totalDebit.toFixed(2)}</h5>
        </div>
      </div>
      <div className=" ">
        <SearchContainer showFilter={showFilter} className="card m-auto ">
          <div className="filter md:flex md:flex-col md:max-w-[700px] m-auto">
            <div className="md:flex ">
              <div className="flex space-x-2">
                <FormRowSelect
                  name="selectedTransactionFilter"
                  value={selectedTransactionFilter}
                  handleChange={handleInputChange}
                  labelText="Transaction type"
                  list={transactionFilterOptions}
                />{" "}
                <FormRowSelect
                  name="selectedTransactionStatus"
                  value={selectedTransactionStatus}
                  handleChange={handleInputChange}
                  labelText="Transaction status"
                  list={transactionStatusList}
                />{" "}
              </div>
              {(isAdmin || isAgent) && (
                <div className="flex">
                  <FormInput
                    handleChange={handleInputChange}
                    labelText="Transaction from"
                    name="transactionFrom"
                    value={transactionFrom}
                    placeholder="from"
                    type="date"
                    min={transactionFrom}
                    max={new Date()}
                  />
                  <FormInput
                    handleChange={handleInputChange}
                    labelText="Transaction to"
                    name="transactionTo"
                    value={transactionTo || new Date()}
                    placeholder="to"
                    type="date"
                    min={transactionFrom}
                    max={new Date()}
                  />
                </div>
              )}
            </div>

            <div className="md:flex">
              {(isAdmin || isAgent) && (
                <FormInput
                  handleChange={optimizedDebounce}
                  labelText="userAccount"
                  name="userAccount"
                  value={localSearch.userAccount}
                  placeholder="userName"
                />
              )}
              <FormInput
                handleChange={optimizedDebounce}
                labelText="phone Number"
                name="phoneNumber"
                value={localSearch.phoneNumber}
                placeholder="phone number"
              />
            </div>
            <button
              onClick={clearAllFilter}
              className="btn btn-block btn-danger"
            >
              Clear filters
            </button>
          </div>
        </SearchContainer>
        {showStat && (
          <div>
            <Stat
              totalSales={totalSales}
              totalProfit={totalProfit}
              close={() => setShowStat(false)}
            />
          </div>
        )}
        <section className="">
          <div className="m-auto flex justify-center pt-4 gap-4 items-center max-w-4xl">
            <button
              className="btn btn-danger "
              onClick={() => {
                toggleFilter();
                clearAllFilter();
              }}
            >
              {showFilter ? "close filter" : "Search transaction"}
            </button>
            {isAdmin && (
              <div className="flex justify-evenly ">
                <p className="font-bold ">
                  Total profit : ₦{totalProfit.toFixed(2) || 0}
                </p>
                <button className="btn p-0 " onClick={() => setShowStat(true)}>
                  <MdIncompleteCircle className="rotate" />
                </button>
              </div>
            )}
            <button className="btn ml-auto" onClick={fetchTransaction}>
              refresh
            </button>
          </div>

          {/* {isAgent && ( */}
          <h5 className="font-bold text-center m-0">
            Total sales today:{" "}
            {totalSales >= 1000
              ? `${(totalSales / 1000).toFixed(2)}TB`
              : `${totalSales.toFixed(2)}GB`}
          </h5>
          {/* )} */}
          <p className="text-center text-sm p-0 m-0 text-green-500  font-bold">
            Click on any of the transactions to see full details
          </p>
          {numOfPages > 1 && <Pagination />}
          {filteringTransactions ? (
            <div className="loading"></div>
          ) : (
            <EachTransaction transactions={transactions} />
          )}
          {numOfPages > 1 && <Pagination />}
        </section>
      </div>{" "}
    </div>
  );
}

export default Transactions;
const SearchContainer = styled.section`
  height: ${({ showFilter }) => (showFilter ? "320px" : "0px")};
  color: ${({ showFilter }) => !showFilter && "white"};
  overflow: hidden;
  transition: var(--transition);
`;
