import Config from '@config';
import mime from 'mime';

export const removeSpaces = (str: string): string => {
	return ('' + str.replace(/ +(?= )/g, '')).trim();
};
export const fileExtension = (fileName: string): string => {
	return fileName.split('.').pop();
};
export const timestampToDate = (timestamp: number): Date => {
	return new Date(timestamp * 1000);
};
export const fileMimeType = (extension: string): string => {
	const mimetype = mime.getType(extension);

	return mimetype ?? 'text/plain';
};
export const safeFilename = (s: string): string => {
	const safe = s
		.normalize('NFD') // Normalize accented characters
		.replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
		.replace(/[^a-z0-9-_]/gi, '') // Keep only letters, numbers, underscores, hyphens
		.replace(/\s+/g, '-') // Replace spaces with underscores
		.toLowerCase(); // Convert to lowercase for consistency

	return safe.substring(0, 100).replace(/^\.+|\.+$/g, '');
};

//

const customExtensions = [Config.data.extensions.ratings] as const;
type CustomExtensions = (typeof customExtensions)[number];

export const saveFile = ({
	content,
	filename,
	extension,
}: {
	content: string | object;
	filename: string;
	extension: 'txt' | 'json' | 'csv' | CustomExtensions;
}) => {
	let _content = '';
	const _filename = `${safeFilename(filename)}.${extension}`;
	const mimetype = fileMimeType(extension);

	if (typeof content === 'object') {
		_content = JSON.stringify(content);
	} else if (typeof content === 'string') {
		_content = content;
	}

	// Create a new Blob object using the text content
	const blob = new Blob([_content], { type: mimetype });

	// Create a temporary link element
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = _filename;

	// Programmatically click the link to trigger the download
	link.click();

	// Release the memory used by the Blob
	URL.revokeObjectURL(link.href);
};
export const readFile = (file: File, onLoad: (content: string) => void) => {
	const reader = new FileReader();

	reader.onload = () => {
		if (typeof reader.result === 'string') onLoad(reader.result);
	};
	reader.readAsText(file);
};
