import validation from 'validate.js';

const validate = (fieldName, value) => {
  const constraints = {
    username: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be more than four characters',
      }
    },
    email: {
      presence: true,
      email: {
        message: ' is not valid.'
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be more than four characters',
      }
    },
  };

  const formValues = {};
  formValues[fieldName] = value;

  const formFields = {};
  formFields[fieldName] = constraints[fieldName];

  const result = validation(formValues, formFields);

  if (result) {
    return result[fieldName][0];
  }

  return null;
};

export default validate;
