import React from 'react'

const UserProfile = ({ params }: any) => {
    return (
        <div className='h-screen flex items-center justify-center'>UserProfile {params.id}</div>
    )
}

export default UserProfile