const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Server setup
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server Running at PORT ${PORT}`));

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Route to handle contact form submission
router.post("/contact", (req, res) => {
  const { fullname,number, email, message } = req.body;
  const name = `${fullname} `;
  const mail = {
    from: name,
    to: process.env.RECEIVER_EMAIL,
    subject: "Contact Form United Pharma ",
    html: `<p>Name: ${name}</p>
           <p>Email: ${number}</p>
           <p>Phone: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, status: "Error sending email" });
    } else {
      res.status(200).json({ code: 200, status: "Message sent successfully" });
    }
  });
});
