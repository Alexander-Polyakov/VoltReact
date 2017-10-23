import request from 'superagent'


export const fetchCustomersApi = async () => {
	const {body} = await request.get(
		'/api/customers'
	)

	return body
}
