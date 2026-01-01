export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // In a real application, you would send an email or save to a database here.
    console.log(`Received message from ${name} (${email}): ${message}`);

    return res.status(200).json({
      success: true,
      message: "Thank you for your message! I will get back to you soon."
    });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
