import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import type { FilterModalProps, FilterValues } from "@/types";

const FilterModal = ({ children, onFilter, onReset }: FilterModalProps) => {
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [filters, setFilters] = useState<FilterValues>({
    organization: "",
    username: "",
    email: "",
    date: undefined,
    phoneNumber: "",
    status: "",
  });

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("");
      return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    return true;
  };

  const handleEmailChange = (email: string) => {
    setFilters({ ...filters, email });
    if (email) {
      validateEmail(email);
    } else {
      setEmailError("");
    }
  };

  const handleFilter = () => {
    if (!validateEmail(filters.email)) {
      return;
    }

    onFilter(filters);
    setOpen(false);
  };

  const handleReset = () => {
    const resetFilters = {
      organization: "",
      username: "",
      email: "",
      date: undefined,
      phoneNumber: "",
      status: "",
    };
    setFilters(resetFilters);
    setEmailError("");
    onReset();
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="w-[300px] p-6 max-h-[600px] overflow-y-auto"
        align="start"
        side="bottom"
        sideOffset={8}
        collisionPadding={16}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="organization"
              className="text-sm font-medium text-[#545F7D]"
            >
              Organization
            </Label>
            <Select
              value={filters.organization}
              onValueChange={(value) =>
                setFilters({ ...filters, organization: value })
              }
            >
              <SelectTrigger id="organization" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Organizations</SelectItem>
                <SelectItem value="Lendsqr">Lendsqr</SelectItem>
                <SelectItem value="Irorun">Irorun</SelectItem>
                <SelectItem value="Lendstar">Lendstar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="username"
              className="text-sm font-medium text-[#545F7D]"
            >
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="User"
              value={filters.username}
              onChange={(e) =>
                setFilters({ ...filters, username: e.target.value })
              }
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-[#545F7D]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={filters.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={cn(
                "w-full",
                emailError && "border-red-500 focus-visible:ring-red-500"
              )}
            />
            {emailError && (
              <p className="text-xs text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#545F7D]">Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !filters.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.date ? (
                    format(filters.date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0"
                align="start"
                side="bottom"
                sideOffset={4}
              >
                <Calendar
                  mode="single"
                  selected={filters.date}
                  onSelect={(date) => setFilters({ ...filters, date })}
                  captionLayout="dropdown"
                  classNames={{
                    day_button:
                      "data-[selected-single=true]:bg-[#39CDCC] data-[selected-single=true]:text-white data-[selected-single=true]:hover:bg-[#2ebaba] data-[selected-single=true]:hover:text-white",
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-[#545F7D]"
            >
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              value={filters.phoneNumber}
              onChange={(e) =>
                setFilters({ ...filters, phoneNumber: e.target.value })
              }
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="status"
              className="text-sm font-medium text-[#545F7D]"
            >
              Status
            </Label>
            <Select
              value={filters.status}
              onValueChange={(value) =>
                setFilters({ ...filters, status: value })
              }
            >
              <SelectTrigger id="status" className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Blacklisted">Blacklisted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              variant="outline"
              onClick={handleReset}
              className="flex-1 border-gray-300 text-[#545F7D] hover:bg-gray-50"
            >
              Reset
            </Button>
            <Button
              onClick={handleFilter}
              disabled={!!emailError}
              className="flex-1 bg-[#39CDCC] text-white hover:bg-[#2ebaba] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Filter
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterModal;
