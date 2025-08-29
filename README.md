# BFHL API - VIT Full Stack Question Paper

A REST API built with Node.js and Express.js that processes arrays and returns categorized data according to VIT's requirements.

## Features

- ✅ **POST /bfhl** endpoint that processes arrays
- ✅ Categorizes data into odd numbers, even numbers, alphabets, and special characters
- ✅ Calculates sum of all numbers
- ✅ Generates concatenated string with alternating caps in reverse order
- ✅ Dynamic user_id generation based on current date
- ✅ Comprehensive error handling
- ✅ Input validation
- ✅ CORS enabled for cross-origin requests

## API Response Structure

```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "3", "5"],
  "even_numbers": ["2", "4", "6"],
  "alphabets": ["A", "B", "C"],
  "special_characters": ["!", "@", "#"],
  "sum": "21",
  "concat_string": "CbA"
}
```

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
npm start
```

### 3. Test the API
```bash
npm test
```

## API Endpoints

### Main Endpoint
- **POST** `/bfhl` - Process array data

### Utility Endpoints
- **GET** `/` - Health check
- **GET** `/test` - View sample test cases

## Sample Usage

### Example Request
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'
```

### Example Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Test Cases

The API includes comprehensive test cases covering:

1. **Example A**: Mixed data with numbers, alphabets, and special characters
2. **Example B**: Complex mixed data
3. **Example C**: Only alphabets
4. **Edge Cases**: Empty arrays, only numbers, only special characters
5. **Error Cases**: Invalid input validation

Run `npm test` to execute all test cases automatically.

## Configuration

### User Information
Edit the `USER_INFO` object in `server.js` to customize:
- Full name (used in user_id generation)
- Email address
- Roll number

### Port Configuration
The server runs on port 3000 by default. Set `PORT` environment variable to change:
```bash
PORT=8080 npm start
```

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### Railway
1. Connect your GitHub repository
2. Railway will auto-deploy on push

### Render
1. Create new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

### Heroku
1. Install Heroku CLI
2. Create app: `heroku create your-app-name`
3. Deploy: `git push heroku main`

## Project Structure

```
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── test-api.js        # Automated test script
├── test-cases.md      # Comprehensive test cases
└── README.md          # This file
```

## Dependencies

- **express**: Web framework
- **body-parser**: Request body parsing
- **cors**: Cross-origin resource sharing
- **axios**: HTTP client (for testing)

## Development

### Development Mode
```bash
npm run dev
```

### Testing
```bash
npm test
```

## Error Handling

The API gracefully handles:
- Invalid input data
- Missing required fields
- Malformed JSON
- Server errors

All errors return appropriate HTTP status codes and error messages.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your VIT submission!

## Support

For issues or questions:
1. Check the test cases in `test-cases.md`
2. Run the automated tests with `npm test`
3. Review the error messages in the console

---

**Good luck with your VIT submission! 🚀**
