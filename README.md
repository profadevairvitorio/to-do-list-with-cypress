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
## GitHub Actions Configuration

   The GitHub Actions workflow is located in .github/workflows/cypress-tests.yml. This workflow is responsible for installing dependencies,     
   running tests, and generating reports.
   ![image](https://github.com/user-attachments/assets/991a6b8d-7003-4118-bb4e-c1725918ace9)
   ![image](https://github.com/user-attachments/assets/53001981-241a-4557-8eb0-37d87e3b1042)
   ![image](https://github.com/user-attachments/assets/2d3a663b-5458-4f47-9358-dec18872c8fc)



   

## Contributing
   If you’d like to contribute to this project:
   
   Fork the repository.
   Create a new branch for your changes.
   Make your changes and commit them.
   Push your changes to your fork.
   Submit a pull request to the main repository.
## License
   This project is licensed under the MIT License.
       
