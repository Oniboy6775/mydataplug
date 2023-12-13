import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";
import airtime from "../images/airtime.svg";
import data from "../images/data.png";
import cable from "../images/cable.png";
import utility from "../images/utility.png";
import historyImage from "../images/history.png";
import withdraw from "../images/withdraw.png";
import earnings from "../images/earnings.svg";
import facebook from "../images/facebook.svg";
import contacts from "../images/contacts.png";
import { useGlobalContext } from "../context/UserContext";
import WarningAlert from "../components/WarningAlert";
import { FaWhatsapp } from "react-icons/fa";
import { Modal } from "../components/Modal";

const DashBoard = () => {
  const { user, generateVpayAcc } = useGlobalContext();
  const navigate = useNavigate();

  const copyReferralLink = async () => {
    const userName = encodeURIComponent(user.userName);
    console.log(userName);
    await window.navigator.clipboard.writeText(
      `https://www.mydataplug.com/register/${userName}`
    );
    toast.success("Referral link copied");
  };
  const copyAccNo = async (number) => {
    window.navigator.clipboard.writeText(number);
    toast.success("Account number copied");
  };

  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (user.userType === "smart earner") {
      const time = Math.random() * 7000;
      setTimeout(() => {
        setShowAlert(true);
      }, [time]);
    }
  }, []);

  const navigation = [
    { name: "Airtime", image: airtime, link: "/profile/buyAirtime" },
    { name: "data", image: data, link: "/profile/buyData" },
    { name: "Tv ", image: cable, link: "/profile" },
    { name: "Utility", image: utility, link: "/profile/electricity" },
    { name: "History", image: historyImage, link: "/profile/transactions" },
    { name: "Contacts", image: contacts, link: "/profile/contacts" },
    // {
    //   name: "my earnings",
    //   image: earnings,
    //   link: "/profile",
    //   msg: "coming soon",
    // },
    // {
    //   name: "Follow & Earn $",
    //   image: facebook,
    //   link: "/profile",
    //   msg: "coming soon",
    // },
    // { name: "withdraw", image: withdraw, link: "/profile/withdraw" },
  ];
  const pay_with_card = () => {
    if (user.reservedAccountNo3) {
      window.open(
        `https://topup.vpay.africa/${user.reservedAccountNo3}`,
        "blank"
      );
    } else {
      navigate("/profile/fundWallet");
    }
  };

  return (
    <div className=" md:ml-[6rem] bg-[var(--grey-200)] p-4">
      {showAlert && <WarningAlert close={() => setShowAlert(false)} />}
      {/* <div className="z-10 m-auto bg-[#25d366] max-w-[300px] rounded-lg ">
        <p className="text-center text-small leading-none text-white">
          <FaWhatsapp className="m-1" />
          <a
            href="https://whatsapp.com/channel/0029VaCiDi10VycArtEUQ12n"
            target="blank"
          >
            click here{" "}
          </a>
          to join our whatsapp community
        </p>
      </div> */}
      <p className=" text-lg font-bold text-center">
        Welcome back, {user.userName && user.userName.substring(0, 10)}
      </p>

      <div className="flex justify-between px-4 md:pl-20 mb-2">
        <div className="text-xl font-bold md:font-extrabold  ">
          ₦{user.balance.toFixed(2)}
        </div>
        <a href="#fundWallet" className="btn text-xs">
          fund your wallet
        </a>
      </div>
      {/* navigation__section */}
      <section className="flex flex-wrap m-auto justify-center items-stretch gap-4 cursor-pointer ">
        <>
          {navigation.map((e, index) => (
            <div
              className=" border-[3px] border-[var(--primary-500)]  self-start w-[30%] max-w-[200px] p-4 bg-[var(--grey-400)] rounded-xl"
              key={index}
              onClick={() => navigate(`${e.link}`)}
            >
              <div className="max-w-[5rem] m-auto  ">
                <img
                  className="img"
                  src={e.image}
                  alt="airtime"
                  // width={"200px"}
                />
              </div>
              <p className="font-bold text-center capitalize">{e.name}</p>
              <p className="font-bold text-center capitalize text-red-500">
                {e.msg}
              </p>
            </div>
          ))}
        </>
      </section>
      <h3 className="text-center font-bold mt-4 underline">Payment accounts</h3>
      <section className="md:flex justify-center gap-4 " id="fundWallet">
        <div className="card m-auto md:m-0 bg-[var(--primary-600)]  text-white ">
          <div className="w-100 bg-white rounded-lg">
            <p className="text-sm font-bold uppercase text-[#25d366]">
              1.08% charges is applied
            </p>
          </div>
          <p className="text-sm ">
            Account name <br /> mydataplug-
            {user.userName && user.userName.substring(0, 10)}
          </p>
          <div className="text-sm">
            {user.accountNumbers.map((e, index) => {
              return (
                <p>
                  {e.bankName} <b>{e.accountNumber}</b>{" "}
                  <FaCopy
                    onClick={() => copyAccNo(e.accountNumber)}
                    className="copy__icon"
                  />
                </p>
              );
            })}
            <p className="text-xs capitalize opacity-60">
              All payments made to the above account number will automatically
              fund your wallet
            </p>
            <button
              onClick={pay_with_card}
              className="btn btn-block btn-hipster "
            >
              Pay with ATM card instead
            </button>
          </div>
        </div>

        <div className="card m-auto md:m-0 bg-[var(--primary-600)] text-white ">
          <h1 className="sub__title">refer a friend</h1>
          <div className="note">
            Refer people to mydataplug and earn ₦500 immediately the person
            upgrade his/her account to Reseller.
          </div>
          <button className="btn btn-hipster" onClick={copyReferralLink}>
            Copy referral link
          </button>
          <div className=" ">
            {user.userType === "smart earner" && (
              <>
                <p className="text-lg">Upgrade your account</p>
                <button
                  className="btn text-white btn-hipster"
                  onClick={() => setShowAlert(true)}
                >
                  Upgrade to reseller @ ₦1000
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
