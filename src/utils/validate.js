export const checkValidEmail = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) return "Please enter correct email address";
  return "";
};

export const checkValidPassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isPasswordValid)
    return "Please include Capital, small and special characters in Password";

  return "";
};

export const checkValidName = (name) => {
  if (name.length < 1) {
    return "Name field can't be empty";
  }
  return "";
};

export const trimText = (text, length) => {
  return text.slice(0, length) + "...";
};