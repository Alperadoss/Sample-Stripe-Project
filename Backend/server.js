// sk_test_51Np4a2D25uMblCNPCA7C9P6OCDqSO3XmJr6nodJa0mCpwDyfkujmCH4De5BBCc9mh977ERWSElXSEYzKHAJ02Lhu00CIOJAiG0
// coffee id price_1Np59jD25uMblCNPIQSB73fm
// sunglasses id price_1Np5BPD25uMblCNPL2NUfusv
//camera id price_1Np5CLD25uMblCNPrc5SYPma

const express = require('express');
var cors = require("cors");
const stripe = require('stripe')('sk_test_51Np4a2D25uMblCNPCA7C9P6OCDqSO3XmJr6nodJa0mCpwDyfkujmCH4De5BBCc9mh977ERWSElXSEYzKHAJ02Lhu00CIOJAiG0');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async (req,res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => {console.log("listening on port 4000")})
