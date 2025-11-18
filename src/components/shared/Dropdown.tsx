'use client'
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";  
import { ChevronDown } from "lucide-react";
import { Controller } from "react-hook-form";

interface IProps{
  // eslint-disable-next-line
  form: any;
  name: string;
  label: string;
  dataArray: {
    label: string;
    value: string;
  }[];
} 

const Dropdown = ({ form, name, label, dataArray }: IProps) => {
    const { control, setValue, watch } = form;
    const selectedValue = watch(name); 
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value } }) => 
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="input border rounded-[8px] flex justify-between 
                        items-center w-full py-2 px-2 text-sm !font-medium">
                            {selectedValue ? selectedValue : label}
                            <ChevronDown className="fill-white" />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="!bg-white !w-full">
                        {dataArray.map((item) => 
                            <DropdownMenuItem
                                key={item.value}
                                onClick={() => setValue(name, item.value)}
                                className={value === item.value ? "bg-gray-200" : ""}
                            >
                                {item.label}
                            </DropdownMenuItem>)}
                    </DropdownMenuContent>
                </DropdownMenu>
            }
        />
    );
};

export default Dropdown;
