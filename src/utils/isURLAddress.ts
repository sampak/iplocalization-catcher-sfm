export const isURLAddress = (value: string): boolean => {
  const urlRegex = /^(https?:\/\/\S+)|(www\.\S+)$/i;
  if (!urlRegex.test(value)) {
    return false;
  }

  return true;
};
