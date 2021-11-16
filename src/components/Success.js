import React from 'react'

const Success = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <button style={{
                background: 'green',
                padding: '30px 50px',
                borderRadius: '10px',
                fontSize: '18px',
                cursor: 'pointer'
            }}>
                Payment Successful
            </button>
        </div>
    )
}

export default Success;
