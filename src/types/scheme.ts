export interface ItfData {
	href: string;
	timestamp: number;
	value?: string;
	info?: {
		[key: string]: ItfDataInfo;
	};
}
export interface ItfDataInfo {
	_: boolean;
	timestamp: number;
}
export type ItfFilterTypes = 'followers' | 'following' | 'not_followers' | '';
