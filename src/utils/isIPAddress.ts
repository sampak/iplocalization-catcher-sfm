export const isIPAddress = (value: string): boolean => {
  const ipRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/;
  if (!ipRegex.test(value)) {
    return false;
  }

  return true;
};
