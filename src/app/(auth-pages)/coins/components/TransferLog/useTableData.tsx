'use client'
import { useMemo, useState } from "react";
import { createColumnHelper } from "@tanstack/react-table"; 
import { TRANSFER_LOG } from "@/static";
import { formatDateTime } from "@/utils";

export interface ITransferLogs {  
  type: string;
  details: {
    userName: string;
    senderId: string;
  };
  amount: string;
  status: string;
  dateTime: string;
}

const columnHelper = createColumnHelper<ITransferLogs>();

export const useTableData = () => {
    const [data, setData] = useState(TRANSFER_LOG);

    const columns = useMemo(
        () => [ 
            columnHelper.accessor("type", {
                id: "type",
                header: "T.Type",
                cell: ({ getValue }) => <span className="text-sm text-first-200 
                font-medium !py-4"
                data-testid="coin-table-type-data">{getValue()}</span>
            }),
            columnHelper.accessor("details", {
                id: "userName",
                header: "Sender / Receiver",
                cell: ({ getValue }) => <div className="flex items-center 
                justify-center flex-col w-full !py-4"
                data-testid="coin-table-details-data">
                    {getValue().userName !== '' && getValue().senderId !== '' ? 
                        <> <span className="text-sm text-first-200 font-medium">
                            {getValue().userName}</span>
                        <span className="text-sm text-first-200 font-medium">#
                            {getValue().senderId}</span> </> : '............'}
                </div>,
            }), 
            columnHelper.accessor("amount", {
                id: "amount",
                header: "Amount",
                cell: ({ getValue }) => <span className="text-sm text-first-200 
                font-medium flex items-center justify-center flex-col w-full !py-5"
                data-testid="coin-table-amount-data">
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
                        data-testid="coin-table-status-data">
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
                    data-testid="coin-table-dateTime-data">
                        {formatDateTime(getValue() as string)}</span></div>,
            }),    
        ],
        []
    );

    return { columns, data, setData };
};
