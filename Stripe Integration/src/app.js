import express from 'express'
import { configDotenv } from 'dotenv'
configDotenv()
import Stripe from 'stripe';
import cors from 'cors';
import mongoose from 'mongoose';
import OrderModel from './models/OrderModel.js';
import WebhookEventModel from './models/webhookEvent.js';
import normalizeCartItems from './models/utils/helper.js';
import stripeWebhookHandler from 'stripe'
// const app = express()

// app.get('/health',(req , res)=>{
//     res.status(200).json({
//         status : true ,
//         message : "Api Health is working fine..."
//     })
// })

// app.listen(process.env.PORT , ()=>{
//     console.log('Server is running on port no' + process.env.PORT)
// })



const app = express();
app.post(
  "/api/stripe/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhookHandler
);

app.use(express.json())

app.post(
  "/api/payments/create-checkout-session",
  async (req, res) => {
    try {
      const { items, customerEmail } = req.body;

      const normalizedItems = normalizeCartItems(items);
        return res.send({
            status : true ,
            message : 'testing'
        })
      const amountTotal = normalizedItems.reduce(
        (total, item) =>
          total + item.unitAmount * item.quantity,
        0
      );

      const order = await Order.create({
        customerEmail: customerEmail || null,

        items: normalizedItems.map((item) => ({
          productId: item.productId,
          name: item.name,
          quantity: item.quantity,
          unitAmount: item.unitAmount,
        })),

        amountTotal,
        currency: "usd",
        status: "pending",
      });

      const session =
        await stripe.checkout.sessions.create({
          mode: "payment",

          line_items: normalizedItems.map((item) => ({
            price_data: {
              currency: item.currency,

              product_data: {
                name: item.name,
              },

              unit_amount: item.unitAmount,
            },

            quantity: item.quantity,
          })),

          customer_email: customerEmail || undefined,

          success_url:
            `${process.env.CLIENT_URL}` +
            `/payment/success?session_id={CHECKOUT_SESSION_ID}`,

          cancel_url:
            `${process.env.CLIENT_URL}/checkout?cancelled=true`,

          metadata: {
            orderId: order._id.toString(),
          },

          payment_intent_data: {
            metadata: {
              orderId: order._id.toString(),
            },
          },
        });

      order.stripeCheckoutSessionId = session.id;
      await order.save();

      return res.status(201).json({
        success: true,
        checkoutUrl: session.url,
        orderId: order._id,
      });
    } catch (error) {
      console.error(
        "Create checkout session error:",
        error
      );

      return res.status(400).json({
        success: false,
        message:
          error.message ||
          "Unable to create checkout session",
      });
    }
  }
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT No :${PORT}`);
})