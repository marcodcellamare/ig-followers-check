export interface ItfData {
	href: string;
	timestamp: number;
	value?: string;
	clicked?: boolean;
	info?: {
		[key: string]: ItfDataInfo;
	};
}
export interface ItfDataInfo {
	_: boolean;
	timestamp: number;
}
export type ItfFilterTypes = 'followers' | 'following' | 'not_followers' | '';
