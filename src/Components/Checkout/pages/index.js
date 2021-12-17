// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
// export default function PreviewPage(){
//     React.useEffect(() => {
//         const query = new URLSearchParams(window.location.search);
//         if (query.get('success')) {
//             console.log('Order placed! You will recieve an email confirmation.');
//         } 

//         if (query.get('canceled')) {
//             console.log('Order canceled -- continue to shop around and checkout when you`re ready.')
//         }
//     }, []);

//     return (
//         <form action="/api/payment" method="POST">
//             <section>
//                 <button type="submit" role="link">
//                     Checkout
//                 </button>
//             </section>
           
//         </form>
//     )
// }