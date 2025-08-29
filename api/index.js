const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User information (you can modify these as needed)
const USER_INFO = {
    fullName: "john_doe",
    email: "john@xyz.com",
    rollNumber: "ABCD123"
};

// Helper function to generate user_id
function generateUserId(fullName) {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${fullName.toLowerCase()}_${day}${month}${year}`;
}

// Helper function to check if string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if string is an alphabet
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to check if string is a special character
function isSpecialChar(str) {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
}

// Main API endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Process the data
        const evenNumbers = [];
        const oddNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let alphabetChars = [];

        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseInt(str);
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                alphabetChars.push(...str.split(''));
            } else if (isSpecialChar(str)) {
                specialCharacters.push(str);
            }
        });

        // Generate concatenated string with alternating caps in reverse order
        const reversedAlphabets = alphabetChars.reverse();
        let concatString = '';
        reversedAlphabets.forEach((char, index) => {
            if (index % 2 === 0) {
                concatString += char.toUpperCase();
            } else {
                concatString += char.toLowerCase();
            }
        });

        // Generate response
        const response = {
            is_success: true,
            user_id: generateUserId(USER_INFO.fullName),
            email: USER_INFO.email,
            roll_number: USER_INFO.rollNumber,
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoint: "/bfhl",
        method: "POST",
        description: "VIT Full Stack Question Paper API"
    });
});

// Test endpoint to show sample requests
app.get('/test', (req, res) => {
    res.json({
        message: "Sample test cases for BFHL API",
        endpoint: "/bfhl",
        method: "POST",
        sample_requests: [
            {
                name: "Example A",
                request: {
                    data: ["a", "1", "334", "4", "R", "$"]
                },
                expected_response: {
                    is_success: true,
                    user_id: "john_doe_17091999",
                    email: "john@xyz.com",
                    roll_number: "ABCD123",
                    odd_numbers: ["1"],
                    even_numbers: ["334", "4"],
                    alphabets: ["A", "R"],
                    special_characters: ["$"],
                    sum: "339",
                    concat_string: "Ra"
                }
            },
            {
                name: "Example B",
                request: {
                    data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
                },
                expected_response: {
                    is_success: true,
                    user_id: "john_doe_17091999",
                    email: "john@xyz.com",
                    roll_number: "ABCD123",
                    odd_numbers: ["5"],
                    even_numbers: ["2", "4", "92"],
                    alphabets: ["A", "Y", "B"],
                    special_characters: ["&", "-", "*"],
                    sum: "103",
                    concat_string: "ByA"
                }
            },
            {
                name: "Example C",
                request: {
                    data: ["A", "ABcD", "DOE"]
                },
                expected_response: {
                    is_success: true,
                    user_id: "john_doe_17091999",
                    email: "john@xyz.com",
                    roll_number: "ABCD123",
                    odd_numbers: [],
                    even_numbers: [],
                    alphabets: ["A", "ABCD", "DOE"],
                    special_characters: [],
                    sum: "0",
                    concat_string: "EoDdCbAa"
                }
            }
        ]
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Something went wrong!"
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found"
    });
});
module.exports = app;