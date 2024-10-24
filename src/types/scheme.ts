export interface ItfData {
	href: string;
	value: string;
	timestamp: number;
}
export interface ItfExport {
	title: string;
	media_list_data: any;
	string_list_data: ItfData[];
}
