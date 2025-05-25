import { createServer } from '@modelcontextprotocol/sdk';
import { quoteTool } from '../tools/quoteTool.js';

const server = createServer({
  tools: [quoteTool],
});

server.listen();
