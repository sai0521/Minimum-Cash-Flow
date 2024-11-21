# Minimum Cash Flow Application

This project is a web-based tool to calculate the **minimum cash flow** required to settle debts or transactions among multiple participants. It provides an interactive interface for users to input participants, their owed amounts, and compute the optimal transaction flow.

## Features
- Add participants and input their respective transaction data.
- Generate a transaction matrix dynamically based on user inputs.
- Validate inputs (e.g., number of participants, unique names, valid numbers).
- Calculate and display the minimum cash flow to settle debts efficiently.
- Responsive design with an intuitive and user-friendly interface.

## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Styling for a clean and modern UI.
- **JavaScript**: Dynamic functionality, input validation, and cash flow calculation logic.

## How It Works
1. **Input Number of Participants**:
   - Enter the number of participants (between 2 and 15) in the input field.
   - Click **Next** to proceed.

2. **Enter Participant Names**:
   - Provide unique names for each participant.
   - Click **Generate Table** to create the transaction matrix.

3. **Input Transaction Matrix**:
   - Fill the table with transaction amounts (e.g., Person A owes Person B).
   - Ensure all values are numbers; empty cells will be flagged.

4. **Calculate Cash Flow**:
   - Click **Calculate** to compute the optimal transactions required to settle debts.
   - Results will be displayed below the table.

## Example Calculation

### Input:  
- **Number of participants**: 3  
- **Names**: Alice, Bob, Charlie  
- **Transactions**:

|          | Alice | Bob | Charlie |
|----------|-------|-----|---------|
| **Alice** | 0     | 100 | 200     |
| **Bob**   | 50    | 0   | 150     |
| **Charlie** | 100   | 0   | 0       |

### Output:
- Bob pays **50** to Alice.  
- Charlie pays **200** to Alice.  
- Charlie pays **50** to Bob.  

