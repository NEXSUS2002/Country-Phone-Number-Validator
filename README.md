# Country Phone Number Validator

This is a simple web application that validates phone numbers for various countries. The application supports multiple country formats and includes a toggle for light and dark modes.

## Features

- Validate phone numbers for different countries including the United States, Nigeria, United Kingdom, Japan, and China.
- Supports multiple formats for each country's phone numbers.
- Toggle between light and dark mode for better user experience.
- Clear input functionality to reset the form.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Country-Phone-Number-Validator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Country-Phone-Number-Validator
    ```
3. Open `index.html` in your web browser.

## Usage

1. Select the country from the dropdown menu.
2. Enter the phone number in the input field.
3. Click the "Check" button to validate the phone number.
4. The result will be displayed below the input field.
5. Use the "Clear" button to reset the input field.
6. Use the "Toggle Light/Dark Mode" button to switch between themes.

## Development

### Adding New Countries

1. Add the country option in the `index.html` file:
    ```html
    <option value="country_code">Country Name</option>
    ```
2. Add the phone number validation patterns in the `main.js` file:
    ```javascript
    const patterns = {
        country_code: [
            /pattern1/,
            /pattern2/,
            // add more patterns if needed
        ]
    };
    ```

### Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
