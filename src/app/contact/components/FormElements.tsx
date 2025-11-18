import { FormInput, Loading } from '@/components'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import React from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form';
  
interface FormElementsProps<T extends FieldValues> {
    // eslint-disable-next-line
    form: any; 
    onSubmit: SubmitHandler<T>; 
    isLoading: boolean;
}


const FormElements = ({ form, onSubmit, isLoading }: FormElementsProps<FieldValues>) => {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className='grid grid-cols-12 gap-5'>
                    <div className="col-span-12">
                        <h4 className='text-center mb-6'>Send Message</h4>
                    </div>
                    <div className='col-span-12'>
                        <FormInput
                            form={form}
                            labelClass='input-label'
                            className='input'
                            name='name'
                            label='Full Name'
                            placeholder='Ex. Jhon Smith'
                        />
                    </div> 
                    <div className='col-span-12'>
                        <FormInput
                            form={form}
                            labelClass='input-label'
                            className='input'
                            name='email'
                            label='Email'
                            placeholder='Ex. jhonsmith@email.com'
                        />
                    </div>
                    <div className='col-span-12'>
                        <FormInput
                            form={form}
                            labelClass='input-label'
                            className='input'
                            name='subject'
                            label='Subject'
                            placeholder='Write here Subject'
                        />
                    </div>  
                    <div className='col-span-12'>
                        <FormInput
                            form={form}
                            labelClass='input-label'
                            className='input'
                            name='message'
                            label='Message'
                            placeholder='Write here Message'
                            type='textarea'
                        />
                    </div>
                    <div className='col-span-12 flex items-center justify-center'>
                        <Button
                            className={`bg-purple-500 text-white w-full 
                            hover:bg-purple-400`}
                            type='submit'
                            disabled={isLoading}
                        >
                            {isLoading ? <Loading /> : ' Send'}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default FormElements