import React from 'react'
import '../PagesCss/Auth.css'

const AboutAuth = () => {
    return (
        <div className="auth-container-1" style={{padding:'20px', marginRight:'30px'}}>
            <h1>Join the Stack Overflow community</h1>
            <p style={{marginTop:'10px'}}>Get unstuck — ask a question</p>
            <p style={{marginTop:'10px'}}>Unlock new privileges like voting and commenting</p>
            <p style={{marginTop:'10px'}}>Save your favorite tags, filters, and jobs</p>
            <p style={{marginTop:'10px'}}>Earn reputation and badges</p>
            <p style={{ fontSize: '13px', color: '#666767',marginTop:'10px' }}>Collaborate and share knowledge with a private group for</p>
            <p style={{ fontSize: '13px', color: "#007ac6",marginTop:'10px' }}>Get Stack Overflow for Teams free for up to 50 users.</p>
        </div>
    )
}

export default AboutAuth