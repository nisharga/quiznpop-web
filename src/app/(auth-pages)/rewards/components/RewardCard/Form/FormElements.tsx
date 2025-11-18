import React from 'react'
import { motion } from 'framer-motion'
import { animationVariants } from '@/utils'
import { Dropdown, FormInput } from '@/components'
import { bankList, countryList } from '@/static' 

interface IProps{
    // eslint-disable-next-line
    form: any; 
}

const FormElements = ({ form }: IProps) => {
    return (
        <>
            <motion.div 
                className='col-span-12 mb-4'
                initial="hidden" animate="visible" variants={animationVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <FormInput 
                    form={form}
                    labelClass='input-label !text-left block'
                    className='input'
                    name='amount'
                    label='Enter Amount'
                    placeholder='Ex. 100'
                />
            </motion.div>

            <motion.div 
                className='col-span-12 mb-4'
                initial="hidden" animate="visible" variants={animationVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <div className="font-normal text-sm input-label !mb-2 text-left">
                Select Country
                </div>
                <Dropdown 
                    form={form} 
                    name="country" 
                    dataArray={countryList} 
                    label="select a country" 
                />
            </motion.div> 

            <motion.div 
                className='col-span-12 mb-4'
                initial="hidden" animate="visible" variants={animationVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <div className="font-normal text-sm input-label !mb-2 text-left">Select Bank</div>
                <Dropdown 
                    form={form} 
                    name="bank" 
                    dataArray={bankList} 
                    label="select a bank" 
                />
            </motion.div>

            <motion.div 
                className='col-span-12 mb-4'
                initial="hidden" animate="visible" variants={animationVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <FormInput 
                    form={form}
                    labelClass='input-label !text-left block'
                    className='input'
                    name='holderName'
                    label='Account Holder Name'
                    placeholder='Ex. Jhon Smith'
                />
            </motion.div>

            <motion.div 
                className='col-span-12 mb-4'
                initial="hidden" animate="visible" variants={animationVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <FormInput 
                    form={form}
                    labelClass='input-label !text-left block'
                    className='input'
                    name='accountNo'
                    label='Account Number'
                    placeholder='Ex. 121354387645435'
                />
            </motion.div>
        </>
    )
}

export default FormElements