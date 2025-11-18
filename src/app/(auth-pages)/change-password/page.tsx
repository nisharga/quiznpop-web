import React from 'react'   
import { PasswordChangeForm } from './components'

const page = () => {
    return (
        <div>
            <h4 className='mb-8'>Change Password</h4>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-8">
                    <PasswordChangeForm />
                </div> 
            </div>
        </div>
    )
}

export default page