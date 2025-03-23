import capitalize from "capitalize";

export const capitalizar = (text: string) => {
  return capitalize.words(text.toLowerCase());
};
