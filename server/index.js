const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for frontend calls
app.use(express.json()); // To handle JSON requests

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js backend!' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
