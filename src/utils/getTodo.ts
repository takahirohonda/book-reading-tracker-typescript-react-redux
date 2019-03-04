import axios from 'axios';

const getTodo = (url: string) => {
	axios.get(url)
	.then((res) => {
			console.log(res)
	})
	.catch((err) => {
			console.log(err)
	})
}

export default getTodo

/* Export and Import 

Pattern 1: Using export default
	export default getTodo
	const getTodo from './getTodo'

Pattern 2: Export function at the top level, 
then import the individual module with deconsructor
	export const getTodo  = ( ....)
	import { getTodo } from './getTodo'

*/
