import { get } from '../get';

export function getListData(){
	const result = get('/api/list');
	return result;
}