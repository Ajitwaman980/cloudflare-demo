export default {
	// demo mode
	async fetch(request, env, ctx) {
		return Response.json({
			messagre: 'This is a test request and will be sent to the server  ',
			request: request.url,
		});
	},
} satisfies ExportedHandler<Env>;
