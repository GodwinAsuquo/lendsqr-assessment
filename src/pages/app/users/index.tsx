import { useState, useEffect } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { FaUserCheck, FaUserClock } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import {
  IoFilterSharp,
  IoEllipsisVertical,
  IoEyeOutline,
} from "react-icons/io5";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import type { User, UserStatus } from "@/types";

// Mock data - Replace with API call
const mockUsers: User[] = [
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

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showFilter, setShowFilter] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  useEffect(() => {
    // Simulate API call
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  const statsCards = [
    {
      icon: HiOutlineUsers,
      title: "USERS",
      value: "2,453",
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: FaUserCheck,
      title: "ACTIVE USERS",
      value: "2,453",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: FaUserClock,
      title: "USERS WITH LOANS",
      value: "12,453",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: MdSavings,
      title: "USERS WITH SAVINGS",
      value: "102,453",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ];

  const getStatusColor = (status: UserStatus) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-gray-100 text-gray-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Blacklisted":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleFilter = () => {
    let filtered = users;

    if (filters.organization) {
      filtered = filtered.filter((user) =>
        user.organization
          .toLowerCase()
          .includes(filters.organization.toLowerCase())
      );
    }
    if (filters.username) {
      filtered = filtered.filter((user) =>
        user.username.toLowerCase().includes(filters.username.toLowerCase())
      );
    }
    if (filters.email) {
      filtered = filtered.filter((user) =>
        user.email.toLowerCase().includes(filters.email.toLowerCase())
      );
    }
    if (filters.phoneNumber) {
      filtered = filtered.filter((user) =>
        user.phoneNumber.includes(filters.phoneNumber)
      );
    }
    if (filters.status) {
      filtered = filtered.filter((user) => user.status === filters.status);
    }

    setFilteredUsers(filtered);
    setShowFilter(false);
  };

  const resetFilter = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    setFilteredUsers(users);
    setShowFilter(false);
  };

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="p-4 lg:p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm border border-gray-100"
            >
              <div
                className={`w-10 h-10 rounded-full ${card.bgColor} flex items-center justify-center mb-3`}
              >
                <Icon className={`w-5 h-5 ${card.iconColor}`} />
              </div>
              <p className="text-[#545F7D] text-sm font-medium mb-2">
                {card.title}
              </p>
              <p className="text-[#213F7D] text-2xl font-semibold">
                {card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Organization
                    </span>
                    <button
                      onClick={() => setShowFilter(!showFilter)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                    </button>
                  </div>
                </th>
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Username
                    </span>
                    <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                  </div>
                </th>
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Email
                    </span>
                    <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                  </div>
                </th>
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Phone Number
                    </span>
                    <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                  </div>
                </th>
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Date Joined
                    </span>
                    <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                  </div>
                </th>
                <th className="text-left px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#545F7D] uppercase">
                      Status
                    </span>
                    <IoFilterSharp className="w-4 h-4 text-[#545F7D]" />
                  </div>
                </th>
                <th className="px-6 py-5"></th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-5 text-sm text-[#545F7D]">
                    {user.organization}
                  </td>
                  <td className="px-6 py-5 text-sm text-[#545F7D]">
                    {user.username}
                  </td>
                  <td className="px-6 py-5 text-sm text-[#545F7D]">
                    {user.email}
                  </td>
                  <td className="px-6 py-5 text-sm text-[#545F7D]">
                    {user.phoneNumber}
                  </td>
                  <td className="px-6 py-5 text-sm text-[#545F7D]">
                    {user.dateJoined}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === user.id ? null : user.id
                          )
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <IoEllipsisVertical className="w-5 h-5 text-[#545F7D]" />
                      </button>

                      {activeDropdown === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-10">
                          <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-50 flex items-center gap-2">
                            <IoEyeOutline className="w-4 h-4" />
                            View Details
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-50 flex items-center gap-2">
                            <FiUserX className="w-4 h-4" />
                            Blacklist User
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-[#545F7D] hover:bg-gray-50 flex items-center gap-2">
                            <FiUserCheck className="w-4 h-4" />
                            Activate User
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Filter Dropdown */}
        {showFilter && (
          <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-md bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-20">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Organization
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.organization}
                  onChange={(e) =>
                    setFilters({ ...filters, organization: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="Lendsqr">Lendsqr</option>
                  <option value="Irorun">Irorun</option>
                  <option value="Lendstar">Lendstar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="User"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.username}
                  onChange={(e) =>
                    setFilters({ ...filters, username: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.email}
                  onChange={(e) =>
                    setFilters({ ...filters, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.date}
                  onChange={(e) =>
                    setFilters({ ...filters, date: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.phoneNumber}
                  onChange={(e) =>
                    setFilters({ ...filters, phoneNumber: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#545F7D] mb-2">
                  Status
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#39CDCC]"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="">Select</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                  <option value="Blacklisted">Blacklisted</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={resetFilter}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-[#545F7D] hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={handleFilter}
                  className="flex-1 py-2 px-4 bg-[#39CDCC] text-white rounded-lg hover:bg-[#2ebaba] transition-colors"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#545F7D]">Showing</span>
            <select
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#39CDCC]"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-[#545F7D]">
              out of {filteredUsers.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M7 1L2 6L7 11" stroke="#545F7D" strokeWidth="2" />
              </svg>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {[...Array(Math.min(5, totalPages))].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-1 rounded text-sm transition-colors
                      ${
                        currentPage === pageNumber
                          ? "bg-[#39CDCC] text-white"
                          : "text-[#545F7D] hover:bg-gray-100"
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              {totalPages > 5 && (
                <span className="px-2 text-[#545F7D]">...</span>
              )}
              {totalPages > 5 && (
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`px-3 py-1 rounded text-sm transition-colors
                    ${
                      currentPage === totalPages
                        ? "bg-[#39CDCC] text-white"
                        : "text-[#545F7D] hover:bg-gray-100"
                    }`}
                >
                  {totalPages}
                </button>
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                <path d="M1 1L6 6L1 11" stroke="#545F7D" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
