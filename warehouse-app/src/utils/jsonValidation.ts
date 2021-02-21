export const validateJsonInput = (input: string): boolean => {
  try {
    JSON.parse(input);
    return true;
  } catch (e) {
    return false;
  }
}