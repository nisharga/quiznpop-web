import React from 'react'
import { ImageUpload, ProfileCardList, UserDetailsForm } from './components'

const page = () => {
    return (
        <div>
            <h4 className='mb-8'
                data-testid="profile-details-section-title">Profile Details</h4>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-9 lg:col-span-3">
                    <ImageUpload />
                </div>
                <div className="col-span-12 lg:col-span-9">
                    <ProfileCardList />
                    <UserDetailsForm />
                </div>
            </div>
        </div>
    )
}

export default page