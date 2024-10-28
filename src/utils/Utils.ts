export const removeSpaces = (str: string): string => {
	return ('' + str.replace(/ +(?= )/g, '')).trim();
};
export const fileExtension = (fileName: string): string => {
	return fileName.split('.').pop();
};
export const timestampToDate = (timestamp: number): Date => {
	return new Date(timestamp * 1000);
};
