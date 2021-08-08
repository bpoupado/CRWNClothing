import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JM0n5HlynVeaUj5LemUcuoX9hoJjdFwBKtopvut9Pqfimv90UWej7A59cNZcv5pTQO2d3PV1P1j6MzZ3mrGmv9d00NENIKMs2';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd,'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            currency='EUR'
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;