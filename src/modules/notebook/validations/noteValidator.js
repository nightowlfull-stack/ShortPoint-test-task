export const validateNote = values => {
  const errors = {};
  const requiredFields = [
    'color',
    'noteText',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `Note text can't be empty`;
    }
  });

  return errors;
};

