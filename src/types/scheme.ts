export interface ItfData {
	href: string;
	value: string;
	timestamp: number;
	following?: boolean;
	followingTimestamp?: number;
	followingDate?: Date | false;
	followers?: boolean;
	followersTimestamp?: number;
	followersDate?: Date | false;
}
export interface ItfExport {
	title: string;
	media_list_data: any;
	string_list_data: ItfData[];
}
export interface ItfExportFollowing {
	relationships_following: ItfExport[];
}
