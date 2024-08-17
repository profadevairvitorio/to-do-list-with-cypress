## Todo List With Cypress

This is an example project that uses HTML, CSS, JavaScript, and Cypress for automated testing. The purpose of this repository is to demonstrate how to set up GitHub Actions to automatically run Cypress tests.

## Project Structure

- `index.html`: The main HTML file.
- `styles.css`: The CSS file with styles.
- `script.js`: The JavaScript file with functionality.
- `cypress/`: Directory containing Cypress tests and configuration.
- `.github/workflows/`: Directory with GitHub Actions configuration.

## Cypress Setup

1. **Install Cypress:**

   Ensure that Cypress is installed in your project. You can install it using npm:

   ```bash
   npm install cypress --save-dev

   
2. **Cypress Configuration:**

    Cypress will be configured in the cypress/ folder. Add your tests and adjust the configuration as needed. 
    Your tests can be organized into integration, e2e, or other folders depending on your needs.

3. **Running Tests Locally:**

    To run tests locally, use the following command:

    ```bash
    npx cypress open
    ```
     This will open the Cypress Test Runner. Alternatively, to run tests in headless mode:

    ```bash
    npx cypress run
    ```
