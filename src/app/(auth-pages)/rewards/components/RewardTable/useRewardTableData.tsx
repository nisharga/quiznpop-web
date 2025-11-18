'use client'
import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table";  
import { formatDateTime } from "@/utils";
import { REWARDS } from "@/static";

export interface IRewardTableProps {   
    tnx: string;
    type: string;
    amount: string;
    status: string;
    dateTime: string;
}

const columnHelper = createColumnHelper<IRewardTableProps>();

export const useTableData = () => {
    const [data, setData] = useState(REWARDS);

    const columns = useMemo(
        () => [ 
            columnHelper.accessor("tnx", {
                id: "tnx",
                header: "TNX ID",
                cell: ({ getValue }) => <span className="text-sm text-first-200 
                font-medium !py-4"
                data-testid="reward-table-tnx-data">{getValue()}</span>
            }),
            columnHelper.accessor("type", {
                id: "type",
                header: "T.Type",
                cell: ({ getValue }) => <span className="text-sm text-first-200 
                font-medium !py-4"
                data-testid="reward-table-type-data">{getValue()}</span>
            }), 
            columnHelper.accessor("amount", {
                id: "amount",
                header: "Amount",
                cell: ({ getValue }) => <span className="text-sm text-first-200 
                font-medium flex items-center justify-center flex-col w-full !py-5"
                data-testid="reward-table-amount-data">
                    {getValue()}</span>,
            }),
            columnHelper.accessor("status", {
                id: "status",
                header: "Status",
                cell: ({ getValue }) => 
                    <span
                        className={`flex items-center justify-center flex-col text-[12px] 
                            bg-[#FEE2AF] rounded py-[6px] px-2.5 ${
    getValue() === 'Pending' 
        ? 'text-[#F98007]' 
        : 'text-[#46B241]'  
}`}
                        data-testid="reward-table-status-data">
                        {getValue()}
                    </span>
                ,
            }),    
            columnHelper.accessor("dateTime", {
                id: "dateTime",
                header: "Time",
                cell: ({ getValue }) => <div className="flex flex-col items-end justify-end w-full">
                    <span className="!max-w-[100px] text-right text-sm text-first-200 
                    font-medium"
                    data-testid="reward-table-dateTime-data">
                        {formatDateTime(getValue() as string)}</span></div>,
            }),    
        ],
        []
    );

    return { columns, data, setData };
};
