// TODO: return undefined is string not include numbers
export const getNumbers = (str: string): number => Number(str.replace(/\D/g, ''));
