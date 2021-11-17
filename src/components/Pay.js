import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
const stripekey = "pk_test_51JYAh4SJtA72x2UkLjI4dU1m0mKhyOln1Nm9YAZOnqfUyQZHm5FWFS4OeFbWeaY5fqWjszfxDGS2U2U7tDgWFRdf00n7nu1apJ"

const Pay = () => {
    const [stripeToken, setStripeToken] = useState('');
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    }


    useEffect(() => {
        const serverRequest = async () => {
            try {
                const response = await axios.post('http://localhost:8000/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 3000,
                });
                console.log("response.data", response.data);
                navigate('/success');
            } catch (error) {
                console.error("in axios.post()", error);
            }
        }
        stripeToken && serverRequest();

    }, [stripeToken, navigate]);
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"


        }}>
            <StripeCheckout name='DJ store'
                image='https://i.pinimg.com/originals/54/ba/a5/54baa52c0984d2706589463feafd60ff.png'
                description="Your order total"
                billingAddress
                shippingAddress
                amount={3000}
                stripeKey={stripekey}
                token={onToken}
            >
                <button style={{
                    background: '#000',
                    color: '#fff',
                    fontSize: '30px',
                    borderRadius: '20px',
                    padding: '30px 50px',
                    cursor: 'pointer'
                }}>Pay Now</button>
            </StripeCheckout>
        </div>
    )
}

export default Pay;
