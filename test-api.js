const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Test cases
const testCases = [
    {
        name: "Example A",
        data: ["a", "1", "334", "4", "R", "$"]
    },
    {
        name: "Example B", 
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
    },
    {
        name: "Example C",
        data: ["A", "ABcD", "DOE"]
    },
    {
        name: "Mixed Data",
        data: ["123", "456", "789", "abc", "DEF", "!@#", "0", "xyz"]
    },
    {
        name: "Empty Array",
        data: []
    },
    {
        name: "Only Numbers",
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    {
        name: "Only Alphabets",
        data: ["hello", "WORLD", "JavaScript", "API"]
    },
    {
        name: "Only Special Characters",
        data: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    }
];

async function testAPI() {
    console.log('🚀 Testing BFHL API...\n');
    
    try {
        // Test health check
        console.log('1. Testing Health Check...');
        const healthResponse = await axios.get(`${BASE_URL}/`);
        console.log('✅ Health Check:', healthResponse.data.message);
        
        // Test sample endpoint
        console.log('\n2. Testing Sample Endpoint...');
        const sampleResponse = await axios.get(`${BASE_URL}/test`);
        console.log('✅ Sample Endpoint:', sampleResponse.data.message);
        
        // Test main API endpoint
        console.log('\n3. Testing Main API Endpoint (/bfhl)...\n');
        
        for (const testCase of testCases) {
            try {
                console.log(`📝 Testing: ${testCase.name}`);
                console.log(`Input: ${JSON.stringify(testCase.data)}`);
                
                const response = await axios.post(`${BASE_URL}/bfhl`, {
                    data: testCase.data
                });
                
                console.log(`✅ Response Status: ${response.status}`);
                console.log(`✅ is_success: ${response.data.is_success}`);
                console.log(`✅ user_id: ${response.data.user_id}`);
                console.log(`✅ sum: ${response.data.sum}`);
                console.log(`✅ concat_string: ${response.data.concat_string}`);
                console.log('---\n');
                
            } catch (error) {
                console.log(`❌ Error in ${testCase.name}:`, error.response?.data || error.message);
                console.log('---\n');
            }
        }
        
        // Test error cases
        console.log('4. Testing Error Cases...\n');
        
        const errorCases = [
            { name: "Missing data", body: {} },
            { name: "Invalid data type", body: { data: "not an array" } },
            { name: "Null data", body: { data: null } }
        ];
        
        for (const errorCase of errorCases) {
            try {
                console.log(`📝 Testing Error: ${errorCase.name}`);
                console.log(`Input: ${JSON.stringify(errorCase.body)}`);
                
                const response = await axios.post(`${BASE_URL}/bfhl`, errorCase.body);
                console.log(`✅ Response:`, response.data);
                
            } catch (error) {
                console.log(`✅ Expected Error:`, error.response?.data || error.message);
            }
            console.log('---\n');
        }
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.log('💡 Make sure the server is running on port 3000');
            console.log('💡 Run: npm start');
        }
    }
}

// Run tests
testAPI();
