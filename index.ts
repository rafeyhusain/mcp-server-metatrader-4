import { createServer } from '@modelcontextprotocol/sdk';
import { quoteTool } from './tools/quoteTool';

const server = createServer({
  tools: [quoteTool],
});

server.listen();
