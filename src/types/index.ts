// User related types
export type UserStatus = "Inactive" | "Pending" | "Active" | "Blacklisted";

export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatus;
}

// Auth related types
export interface SignInFormValues {
  email: string;
  password: string;
}

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  role: string;
  organization: string;
  token: string;
}

// Stats card interface
export interface StatsCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}

// Filter interface for users
export interface UserFilters {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

// Pagination interface
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export interface NavItem {
  name: string;
  path: string;
  icon: string;
  onIcon: string
  category?: string;
}

export interface FilterModalProps {
  children: React.ReactNode;
  onFilter: (filters: FilterValues) => void;
  onReset: () => void;
}

export interface FilterValues {
  organization: string;
  username: string;
  email: string;
  date: Date | undefined;
  phoneNumber: string;
  status: string;
}

export interface UserDetailsData {
  id: string;
  fullName: string;
  username: string;
  accountNumber: string;
  tier: number;
  balance: string;
  bankName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
  levelOfEducation: string;
  employmentStatus: string;
  sectorOfEmployment: string;
  durationOfEmployment: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantors: Array<{
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  }>;
}