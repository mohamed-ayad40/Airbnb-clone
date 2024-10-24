"use client";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Searchbar = ({placeholder}: {placeholder?: string}) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && input) {
        // Manually build the search query string
        const searchParams = new URLSearchParams({
          location: input,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          numOfGuests: numOfGuests.toString(),
        });

        // Use router.push with the full URL string
        router.push(`/search?${searchParams.toString()}`);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, startDate, endDate, numOfGuests, router]);
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {input && (
        <div className="absolute  top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%]">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b bg-white pb-3">
            <h2 className="text-2xl flex-grow font-semibold text-center">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center bg-white p-5 text-center">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href={
                {
                  pathname: "/search",
                  search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
                }
              }
              onClick={() => setInput("")}
              className="flex-grow text-red-500"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
