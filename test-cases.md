# BFHL API Test Cases

## API Endpoint
- **URL**: `POST /bfhl`
- **Base URL**: `http://localhost:3000`

## Test Case 1: Example A (From Question Paper)
**Input:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Expected Output:**
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

## Test Case 2: Example B (From Question Paper)
**Input:**
```json
{
  "data": ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["5"],
  "even_numbers": ["2", "4", "92"],
  "alphabets": ["A", "Y", "B"],
  "special_characters": ["&", "-", "*"],
  "sum": "103",
  "concat_string": "ByA"
}
```

## Test Case 3: Example C (From Question Paper)
**Input:**
```json
{
  "data": ["A", "ABcD", "DOE"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["A", "ABCD", "DOE"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "EoDdCbAa"
}
```

## Test Case 4: Mixed Data Types
**Input:**
```json
{
  "data": ["123", "456", "789", "abc", "DEF", "!@#", "0", "xyz"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["123", "789"],
  "even_numbers": ["456", "0"],
  "alphabets": ["ABC", "DEF", "XYZ"],
  "special_characters": ["!@#"],
  "sum": "1368",
  "concat_string": "ZyxEfDcBa"
}
```

## Test Case 5: Empty Array
**Input:**
```json
{
  "data": []
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": [],
  "special_characters": [],
  "sum": "0",
  "concat_string": ""
}
```

## Test Case 6: Only Numbers
**Input:**
```json
{
  "data": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "3", "5", "7", "9"],
  "even_numbers": ["2", "4", "6", "8", "10"],
  "alphabets": [],
  "special_characters": [],
  "sum": "55",
  "concat_string": ""
}
```

## Test Case 7: Only Alphabets
**Input:**
```json
{
  "data": ["hello", "WORLD", "JavaScript", "API"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": ["HELLO", "WORLD", "JAVASCRIPT", "API"],
  "special_characters": [],
  "sum": "0",
  "concat_string": "IpAtCrIptSavaJoLlRoWlLeHo"
}
```

## Test Case 8: Only Special Characters
**Input:**
```json
{
  "data": ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": [],
  "even_numbers": [],
  "alphabets": [],
  "special_characters": ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
  "sum": "0",
  "concat_string": ""
}
```

## Test Case 9: Single Character Elements
**Input:**
```json
{
  "data": ["a", "1", "!", "B", "2", "@", "c", "3", "#"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "3"],
  "even_numbers": ["2"],
  "alphabets": ["A", "B", "C"],
  "special_characters": ["!", "@", "#"],
  "sum": "6",
  "concat_string": "CbA"
}
```

## Test Case 10: Large Numbers
**Input:**
```json
{
  "data": ["999999", "888888", "777777", "hello", "world"]
}
```

**Expected Output:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17122024",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["999999", "777777"],
  "even_numbers": ["888888"],
  "alphabets": ["HELLO", "WORLD"],
  "special_characters": [],
  "sum": "2666664",
  "concat_string": "DlRoWoLlEh"
}
```

## Error Cases

### Error Case 1: Invalid Input (Missing data)
**Input:**
```json
{}
```

**Expected Output:**
```json
{
  "is_success": false,
  "error": "Invalid input. 'data' must be an array."
}
```

### Error Case 2: Invalid Input (data is not array)
**Input:**
```json
{
  "data": "not an array"
}
```

**Expected Output:**
```json
{
  "is_success": false,
  "error": "Invalid input. 'data' must be an array."
}
```

### Error Case 3: Invalid Input (null data)
**Input:**
```json
{
  "data": null
}
```

**Expected Output:**
```json
{
  "is_success": false,
  "error": "Invalid input. 'data' must be an array."
}
```

## Testing Instructions

1. **Start the server**: `npm start`
2. **Test endpoint**: `GET http://localhost:3000/test` (shows all sample cases)
3. **Health check**: `GET http://localhost:3000/`
4. **Main API**: `POST http://localhost:3000/bfhl`

## Notes

- All numbers are returned as strings in the response
- The `user_id` will change daily based on the current date
- The `concat_string` follows the alternating caps pattern in reverse order
- Empty arrays are returned for categories with no matching elements
- The API handles all edge cases gracefully with proper error messages
