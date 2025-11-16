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