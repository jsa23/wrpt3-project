import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage(){
    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will recieve an email confirmation.');
        } 

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you`re ready.')
        }
    }, []);

    return (
        <form action="/checkout_sessions" method="POST">
            <section>
                <button type="submit" role="link">
                    Checkout
                </button>
            </section>
            <style jsx>
                {`
                section {
                    background: #fffffff;
                    display: flex;
                    flex-direction: column;
                    width: 400px;
                    height: 112px;
                    border-radius: 6px;
                    justify-content: space-between;
                }
                button {
                    height: 36px;
                    background: #55533;
                    border-radius: 4px;
                    color: white;
                    border: 0;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    box-shadow: 0px 4px 5.5px 0px rgba(0,0,0,0.07);
                }
                button: hover {
                    opacity: 0.8;
                }
                `}
            </style>
        </form>
    )
}