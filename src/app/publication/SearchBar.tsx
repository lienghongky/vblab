"use client";
import { Input,ButtonGroup, Button } from "@nextui-org/react";
import exp from "constants";
import { useState } from "react";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className=" w-96  rounded-2xl bg-gradient-to-br from-orange-400 via-red-700 to-sky-800 bg-opacity-30 dark:bg-opacity-30 p-1 ">
        <div className="w-full h-full flex items-center justify-between  rounded-xl  overflow-clip bg-white dark:bg-gray-900 p-2 space-x-2">
          <div className="w-full">
            <Input
              className="w-full h-full"
              label="Search"
              placeholder="Enter your search term"
              value={value}
              onValueChange={setValue}
            />
          </div>
          <Button isIconOnly color="warning" aria-label="Like">
            <img
              src="https://img.icons8.com/?size=100&id=2sWrwEXiaegS&format=png&color=000000"
              className="mx-auto my-auto w-8 h-8"
            />
          </Button>
        </div>
      </div>
      <ButtonGroup className="hidden sm:flex justify-center ">
          {
            props.data.filter.map((item, index) => (
              <Button key={index}
              startContent={<img className="w-8 h-8 object-cover rounded-xl" src={item.image}/>}>
                {item.title}
              </Button>
            ))
          }
        </ButtonGroup>
    </div>
  );
};

export default SearchBar;
