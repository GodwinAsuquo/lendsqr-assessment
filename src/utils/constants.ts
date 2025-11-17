import type { NavItem } from "@/types";
import usersIcon from '@/assets/icons/users/users.svg';
import activeUsers from "@/assets/icons/users/activeUsers.svg";
import usersWithLoans from "@/assets/icons/users/usersWithLoans.svg";
import usersWithSavings from "@/assets/icons/users/usersWithSavings.svg";
import users from "@/assets/icons/users.svg";
import onUsers from "@/assets/icons/onUsers.svg";
import Guarantors from "@/assets/icons/Guarantors.svg";
import onGuarantors from "@/assets/icons/onGuarantors.svg";
import Loans from "@/assets/icons/Loans.svg";
import onLoans from "@/assets/icons/onLoans.svg";
import DecisionModels from "@/assets/icons/DecisionModels.svg";
import onDecisionModels from "@/assets/icons/onDecisionModels.svg";
import Savings from "@/assets/icons/Savings.svg";
import onSavings from "@/assets/icons/onSavings.svg";
import LoanRequests from "@/assets/icons/LoanRequests.svg";
import onLoanRequests from "@/assets/icons/onLoanRequests.svg";
import Whitelist from "@/assets/icons/Whitelist.svg";
import onWhitelist from "@/assets/icons/onWhitelist.svg";
import Karma from "@/assets/icons/Karma.svg";
import onKarma from "@/assets/icons/onKarma.svg";
import Organization from "@/assets/icons/Organization.svg"
import onOrganization from "@/assets/icons/onOrganization.svg"
import LoanProducts from "@/assets/icons/LoanProducts.svg";
import onLoanProducts from "@/assets/icons/onLoanProducts.svg";
import SavingsProducts from "@/assets/icons/SavingsProducts.svg";
import onSavingsProducts from "@/assets/icons/onSavingsProducts.svg";
import FeesandCharges from "@/assets/icons/FeesandCharges.svg";
import onFeesandCharges from "@/assets/icons/onFeesandCharges.svg";
import Transactions from "@/assets/icons/Transactions.svg";
import onTransactions from "@/assets/icons/onTransactions.svg";
import Services from "@/assets/icons/Services.svg";
import onServices from "@/assets/icons/onServices.svg";
import ServiceAccount from "@/assets/icons/ServiceAccount.svg";
import onServiceAccount from "@/assets/icons/onServiceAccount.svg";
import Settlements from "@/assets/icons/Settlements.svg";
import onSettlements from "@/assets/icons/onSettlements.svg";
import Reports from "@/assets/icons/Reports.svg";
import onReports from "@/assets/icons/onReports.svg";
import Preferences from "@/assets/icons/Preferences.svg";
import onPreferences from "@/assets/icons/onPreferences.svg";
import FeesAndPricing from "@/assets/icons/FeesAndPricing.svg";
import onFeesAndPricing from "@/assets/icons/onFeesAndPricing.svg";
import AuditLogs from "@/assets/icons/AuditLogs.svg";
import onAuditLogs from "@/assets/icons/onAuditLogs.svg";
import SystemsMessages from "@/assets/icons/SystemsMessages.svg";
import onSystemsMessages from "@/assets/icons/onSystemsMessages.svg";

// Page paths
export const PUBLIC_PATHS = {
  ROOT: "/",
  SIGNIN: "/signin",
} as const;

export const PRIVATE_PATHS = {
  DASHBOARD: "/dashboard",
  USERS: "/users",
  USER_DETAILS: "/users/:id",
  GUARANTORS: "/guarantors",
  LOANS: "/loans",
  DECISION_MODELS: "/decision-models",
  SAVINGS: "/savings",
  LOAN_REQUESTS: "/loan-requests",
  WHITELIST: "/whitelist",
  KARMA: "/karma",
  ORGANIZATION: "/organization",
  LOAN_PRODUCTS: "/loan-products",
  SAVINGS_PRODUCTS: "/savings-products",
  FEES_AND_CHARGES: "/fees-and-charges",
  TRANSACTIONS: "/transactions",
  SERVICES: "/services",
  SERVICE_ACCOUNT: "/service-account",
  SETTLEMENTS: "/settlements",
  REPORTS: "/reports",
  PREFERENCES: "/preferences",
  FEES_AND_PRICING: "/fees-and-pricing",
  AUDIT_LOGS: "/audit-logs",
  SYSTEM_MESSAGES: "/system-messages",
} as const;

export const navItems: NavItem[] = [
  // CUSTOMERS
  {
    name: "Users",
    path: PRIVATE_PATHS.USERS,
    icon: users,
    onIcon: onUsers,
    category: "CUSTOMERS",
  },
  {
    name: "Guarantors",
    path: PRIVATE_PATHS.GUARANTORS,
    icon: Guarantors,
    onIcon: onGuarantors,
    category: "CUSTOMERS",
  },
  {
    name: "Loans",
    path: PRIVATE_PATHS.LOANS,
    icon: Loans,
    onIcon: onLoans,
    category: "CUSTOMERS",
  },
  {
    name: "Decision Models",
    path: PRIVATE_PATHS.DECISION_MODELS,
    icon: DecisionModels,
    onIcon: onDecisionModels,
    category: "CUSTOMERS",
  },
  {
    name: "Savings",
    path: PRIVATE_PATHS.SAVINGS,
    icon: Savings,
    onIcon: onSavings,
    category: "CUSTOMERS",
  },
  {
    name: "Loan Requests",
    path: PRIVATE_PATHS.LOAN_REQUESTS,
    icon: LoanRequests,
    onIcon: onLoanRequests,
    category: "CUSTOMERS",
  },
  {
    name: "Whitelist",
    path: PRIVATE_PATHS.WHITELIST,
    icon: Whitelist,
    onIcon: onWhitelist,
    category: "CUSTOMERS",
  },
  {
    name: "Karma",
    path: PRIVATE_PATHS.KARMA,
    icon: Karma,
    onIcon: onKarma,
    category: "CUSTOMERS",
  },
  // BUSINESSES
  {
    name: "Organization",
    path: PRIVATE_PATHS.ORGANIZATION,
    icon: Organization,
    onIcon: onOrganization,
    category: "BUSINESSES",
  },
  {
    name: "Loan Products",
    path: PRIVATE_PATHS.LOAN_PRODUCTS,
    icon: LoanProducts,
    onIcon: onLoanProducts,
    category: "BUSINESSES",
  },
  {
    name: "Savings Products",
    path: PRIVATE_PATHS.SAVINGS_PRODUCTS,
    icon: SavingsProducts,
    onIcon: onSavingsProducts,
    category: "BUSINESSES",
  },
  {
    name: "Fees and Charges",
    path: PRIVATE_PATHS.FEES_AND_CHARGES,
    icon: FeesandCharges,
    onIcon: onFeesandCharges,
    category: "BUSINESSES",
  },
  {
    name: "Transactions",
    path: PRIVATE_PATHS.TRANSACTIONS,
    icon: Transactions,
    onIcon: onTransactions,
    category: "BUSINESSES",
  },
  {
    name: "Services",
    path: PRIVATE_PATHS.SERVICES,
    icon: Services,
    onIcon: onServices,
    category: "BUSINESSES",
  },
  {
    name: "Service Account",
    path: PRIVATE_PATHS.SERVICE_ACCOUNT,
    icon: ServiceAccount,
    onIcon: onServiceAccount,
    category: "BUSINESSES",
  },
  {
    name: "Settlements",
    path: PRIVATE_PATHS.SETTLEMENTS,
    icon: Settlements,
    onIcon: onSettlements,
    category: "BUSINESSES",
  },
  {
    name: "Reports",
    path: PRIVATE_PATHS.REPORTS,
    icon: Reports,
    onIcon: onReports,
    category: "BUSINESSES",
  },
  // SETTINGS
  {
    name: "Preferences",
    path: PRIVATE_PATHS.PREFERENCES,
    icon: Preferences,
    onIcon: onPreferences,
    category: "SETTINGS",
  },
  {
    name: "Fees and Pricing",
    path: PRIVATE_PATHS.FEES_AND_PRICING,
    icon: FeesAndPricing,
    onIcon: onFeesAndPricing,
    category: "SETTINGS",
  },
  {
    name: "Audit Logs",
    path: PRIVATE_PATHS.AUDIT_LOGS,
    icon: AuditLogs,
    onIcon: onAuditLogs,
    category: "SETTINGS",
  },
  {
    name: "Systems Messages",
    path: PRIVATE_PATHS.SYSTEM_MESSAGES,
    icon: SystemsMessages,
    onIcon: onSystemsMessages,
    category: "SETTINGS",
  },
];

// User status types
export type UserStatus = "Inactive" | "Pending" | "Active" | "Blacklisted";

// User interface
export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}

// Stats card interface
export interface StatsCard {
  icon: string;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}

export const statsCards = [
    {
      icon: usersIcon,
      title: "USERS",
      value: "2,453",
    },
    {
      icon: activeUsers,
      title: "ACTIVE USERS",
      value: "2,453",
    },
    {
      icon: usersWithLoans,
      title: "USERS WITH LOANS",
      value: "12,453",
    },
    {
      icon: usersWithSavings,
      title: "USERS WITH SAVINGS",
      value: "102,453",
    },
  ];

  export const mockUsers: User[] = [
    {
      id: "1",
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phoneNumber: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "2",
      organization: "Irorun",
      username: "Debby Ogana",
      email: "debby2@irorun.com",
      phoneNumber: "08160780928",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "3",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "4",
      organization: "Lendsqr",
      username: "Tosin Dokunmu",
      email: "tosin@lendsqr.com",
      phoneNumber: "07003309226",
      dateJoined: "Apr 10, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "5",
      organization: "Lendstar",
      username: "Grace Effiom",
      email: "grace@lendstar.com",
      phoneNumber: "07060780922",
      dateJoined: "Apr 30, 2020 10:00 AM",
      status: "Active",
    },
  ];

    export const tabs = [
      { id: "general", label: "General Details" },
      { id: "documents", label: "Documents" },
      { id: "bank", label: "Bank Details" },
      { id: "loans", label: "Loans" },
      { id: "savings", label: "Savings" },
      { id: "app", label: "App and System" },
    ];