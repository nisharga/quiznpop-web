'use client'
import React from 'react' 
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { motion } from 'framer-motion';
import { rowVariants } from '@/utils';
import { IRewardTableProps, useTableData } from './useRewardTableData';

const RewardTable = () => {
    const { columns, data } = useTableData();

    const table = useReactTable<IRewardTableProps>({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const headerClass = (type: string) => {
        return `p-2.5 text-purple-500 font-medium text-sm ${type === 'tnx' ? 
            'text-left' : type === 'type' ? 'text-left'
                : type === 'dateTime' ? 'text-right' : 'text-center'}`
    }
  
    return (
        <div className='bg-purple-50 rounded-xl p-5'>
            <h3 className='mb-6' data-testid="coin-sub-title">Recent Reward transfer log</h3>
            <div className="overflow-x-auto">
                <table className='!w-full min-w-full divide-y-2'>
                    <thead>
                        {
                            table.getHeaderGroups().map((headerGroup) => 
                                <tr key={headerGroup.id}>
                                    {
                                        headerGroup.headers.map((header) => 
                                            <th key={header.id} className={headerClass(header.id)}
                                                data-testid="reward-table-header">
                                                {header.isPlaceholder ? null :
                                                    flexRender(header.column.columnDef.header,
                                                        header.getContext())}
                                            </th>)
                                    }
                                </tr>)
                        }
                    </thead>
                    <tbody className='!w-full'>
                        {
                            table.getRowModel().rows.map((row, index) => 
                                <React.Fragment key={row.id}>
                                    <tr className="border border-[#E6D8FC] w-full h-[1px]"></tr>
                                    <motion.tr
                                        className='w-full p-2.5'
                                        initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                                        animate="visible"
                                        variants={rowVariants}
                                    >
                                        {row.getVisibleCells().map(cell => 
                                            <td key={cell.id} className='px-3'>
                                                {
                                                    flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )
                                                }
                                            </td>)}
                                    </motion.tr>
                                </React.Fragment>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RewardTable;
