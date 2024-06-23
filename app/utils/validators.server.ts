export const validateEmail = (email: string): string | undefined => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email || email.length === 0) {
    return "Email address is required."
  }
  if (!validRegex.test(email)) {
    return "Please enter a valid email address.";
  }
};

export const validatePassword = (password: string): string | undefined => {
    if (password.length > 8 && password.length <= 64) {
        return 'Please enter a password that is at least 8 characters long'
    }
}

export const validateName = (name: string): string | undefined => {
    if (!name.length) {
        return 'Please enter a first name and last name'
    }
}
