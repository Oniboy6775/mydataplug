import React from "react";
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

export const initialState = {
  token: token ? token : "",
  user: user ? JSON.parse(user) : null,
  transactions: [],
  isAdmin: false,
  isCouponVendor: false,
  subscriptionPlans: {
    MTN: [],
    MTN_CG_PRICE: [],
    GLO: [],
    AIRTEL: [],
    NMOBILE: [],
    CABLETV: [],
    CABLENAME: [],
    DISCO: [],
    NETWORK: [],
  },
  // LOGIN & REGISTER
  userName: "",
  password: "",
  passwordCheck: "",
  email: "",
  amount: "",
  userAccount: "",
  networkList: ["MTN", "GLO", "AIRTEL", "9MOBILE"],
  dataSubScriptions: [],
  selectedNetwork: "",
  dataOptions: [],
  filteredDataOptions: [],
  selectedPlan: "",
  phoneNumber: "",
  selectedDataObj: {},
  // TRANSACTIONS
  transactionFilterOptions: [
    "all",
    "airtime",
    "data",
    "refund",
    "transfer",
    "referrer",
    "wallet",
    "electricity",
    "earning",
    // "cable",
  ],
  filteringTransactions: false,
  selectedTransactionFilter: "",
  numOfPages: "",
  page: "1",
  transactionFrom: "",
  // TRANSFER
  isValidated: false,
  validatedName: "",
  isNavOpen: false,
  isLoading: false,
  loadingText: "",
  showAlert: false,
  alertText: "",
  alertType: "",
  // ELECTRICITY
  meterTypeList: ["prepaid", "postpaid"],
  electricityCompanyList: [
    "Ikeja Electric",
    "Ibadan Electric",
    "Eko Electric",
    "Port Harcourt Electric",
    "Kaduna Electric",
    "Kano Electric",
    "Jos Electric",
    "Abuja Electric",
    "Enugu Electricity",
    "Yola Electricity",
    "Benin Electric",
  ],
  selectedElectricityCompany: "Ikeja Electric",
  selectedMeterType: "prepaid",
  meterNumber: "",
  meterToken: "",
  // Save Contact
  contactName: "",
  contactNumber: "",
  contactNetwork: "MTN",
  contactList: [],
  // Beneficiary
  beneficiaryList: [],
  // ADMIN
  adminDetails: { allUsers: [], allTransactions: [], services: [] },
  userTypeOptions: ["all", "smart earner", "reseller", "api user"],
  selectedUserType: "",
  totalUsers: "",
  couponCode: "",
  stat: [],
  paymentLink: "",
  supplierList: ["ALARO", "GLAD"],
  selectedSupplier: "ALARO",
  fetchedSupplierList: [
    { network: "MTN", supplierName: "" },
    { network: "GLO", supplierName: "" },
    { network: "9MOBILE", supplierName: "" },
    { network: "AIRTEL", supplierName: "" },
  ],
  totalSales: 0,
  totalProfit: 0,
  productList: [
    "MTN",
    "MTN-CG",
    "MTN-SME2",
    "MTN-COUPON",
    "GLO",
    "AIRTEL",
    "9MOBILE",
  ],
  selectedProduct: "MTN",
  servicesType: ["airtime", "data"],
  selectedServiceType: "airtime",
  serviceAvailabilityList: ["enable", "disable"],
  selectedAvailability: "enable",
  availableServices: [],
  transactionStatusList: [
    "all",
    "success",
    "failed",
    "processing",
    "pending",
    "refunded",
  ],
  selectedTransactionStatus: "",
  bankCodesList: [],
  selectedBank: "",
  bankCode: "",
  notification: "",
  isNotificationCheck: false,
  // earnings
  earningBalance: "0",
  totalReferred: "0",
  totalEarned: "0",
  referralList: [],
  // data filtering option
  dataTypeOptions: [],
  selectedDataType: "",
  suppliers: [],
  costPrices: [],
  // transactions debit and credit
  totalDebit: 0,
  totalCredit: 0,
  // KYC DETAILS
  verificationMethod: "nin",
  verificationNo: "",
};
