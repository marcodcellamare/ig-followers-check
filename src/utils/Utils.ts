export const removeSpaces = (str: string): string => {
	return ('' + str.replace(/ +(?= )/g, '')).trim();
};
export const fileExtension = (fileName: string): string => {
	return fileName.split('.').pop();
};
