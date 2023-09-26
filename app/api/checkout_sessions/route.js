import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
    try {
        // Parse JSON body from the request
        const requestBody = await request.json();
        const { headers } = requestBody;
        console.log(headers);

        // Create Checkout Sessions using the parsed headers
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: '{{PRICE_ID}}',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${headers.origin}/?success=true`,
            cancel_url: `${headers.origin}/?canceled=true`,
        });

        // Use the NextResponse object to perform the redirect
        return NextResponse.redirect(303, session.url);
    } catch (err) {
        console.error(err); // Log the error
        return new Response('An error occurred', { status: 500 }); // Return an error response
    }
};
