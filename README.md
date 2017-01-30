# Redux Universal Example

A demo for Redux server side rendering. The page includes three parts: head, body and footer, and each has its own color. The server will assemble the initial store and render the page for the client.

## Start

	npm install
	
	npm start

## Structure

### server

All essential parts of server: 

1. `/api/color`: randomly picks color
2. `/`: prepare the initial store and assemble the page to send to the client

### client
Get the initial store created by server and re-render the page.

### common
All essential components.

## License

No license, you can use it anywhere you like.


