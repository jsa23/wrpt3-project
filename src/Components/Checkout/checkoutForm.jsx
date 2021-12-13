import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import Row from './prebuilt/Row';
import BillingDetailsFields from './prebuitl/BillingDetailsFields';
import SubmitButton from './prebuilt/SubmitButton';
import CheckoutError from './prebuilt/CheckoutError';

const CardElementContainer = styled.div`
    height: 40px;
    display: flex;
    aligin-items: center;

    $ .StripedElement {
        width: 100%;
        padding: 15px;
    }
    `;

    const CheckoutForm=({price, onSuccessfulCheckout}) => {
        const [isProcessing, setProcessingTo] = useState(false);
        const [checkoutError, setCheckoutError] = useState();

        const handleFormSubmit = async ev => {
            ev.preventDefault();

            const billindDetails = {
                name: ev.target.name.value,
                email: ev.target.email.value,
                address: {
                    city: ev.target.city.value,
                    state: ev.target.state.value,
                    postal_code: ev.target.zip.value
                }
            };
        };
    }