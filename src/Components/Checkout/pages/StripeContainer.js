import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51K6gxpLyEf7jeeKns4BjiMbeE932hUuq442Akkw63PArWsexzwGzv2PTf8DMZ7eiQjjZTOCCRgdHk6OzrwkpSmET00ZKyRagUb"

const stripePromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
    return (
        <Elements stripe={stripePromise}>
            <PaymentForm total={props.total}/>
        </Elements>
    )
}