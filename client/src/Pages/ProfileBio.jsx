import React from 'react'
import '../PagesCss/UserProfileForm.css'

const ProfileBio = ({currentProfile}) => {
    return (
        <div>
            <div>
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            <h4 style={{margin:"10px 0px" , fontSize:"20px"}}>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag} style={{padding:"5px 0px"}}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p style={{margin:"10px 0px" , fontSize:"20px" ,fontWeight:"900"}}>0 Tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4 style={{margin:"10px 0px" , fontSize:"20px"}}>About</h4>
                            <p style={{padding:"5px 0px"}}>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p style={{padding:"5px 0px", fontSize:"18px" ,fontWeight:"900"}}>No bio found</p>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileBio