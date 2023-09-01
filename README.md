
# Link Validator :)

A lightweight npm package that helps you verify the Facebook and Instagram profile links with ease.

## Installation

You can install this package using npm:

npm install link-validator

## Example:
    import { AccountChecker } from 'account-checker';
     
    1. let status = await AccountChecker.checkFacebookAccount("patel.a"); // return false
    2. let status = await AccountChecker.checkFacebookAccount("patel.apurv"); // return true
    3. let status = await AccountChecker.checkInstagramAccount("patel.apurv"); // return true
    4. let status = await AccountChecker.checkInstagramAccount("p"); // return false



## Feedback

If you have any feedback, please reach out to us at apurv@itoneclick.com

