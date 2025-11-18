
'use client'
import React from "react";
import { CalendarIcon } from "lucide-react";
import { UseFormReturn, Controller, FieldValues } from "react-hook-form";
import { format } from "date-fns"; 
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"; 

interface IProps<T extends FieldValues>{
  form: UseFormReturn<T>;
  name: string;
}

const BirthdayPicker = ({ form, name }: IProps<FieldValues>) => {
    const {
        control,
        formState: { errors },
    } = form;

    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: "Birthday is required" }}
            render={({ field: { value, onChange } }) => 
                <div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !value && "text-muted-foreground"
                                )}
                            >
                                {value ? format(value, "PPP") : "Pick a date"}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={value} 
                                onSelect={(date) => 
                                    onChange(date ? date.toISOString().split("T")[0] : "")} 
                                disabled={(date) => date > new Date()}
                                // initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                    {errors[name] && 
            <p className="text-red-600 text-sm mt-1">
                {errors[name]?.message?.toString()}
            </p>
                    }
                </div>
            }
        />
    );
};

export default BirthdayPicker;
