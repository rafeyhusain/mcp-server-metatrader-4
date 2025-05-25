# MetaTrader 4 Server with Model Context Protocol

This project implements a MetaTrader 4 server integration using the Model Context Protocol (MCP) SDK. It provides a TypeScript-based solution for connecting and interacting with MetaTrader 4 trading platform.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MetaTrader 4 platform
- TypeScript

## Installation

1. Clone the repository:

```bash
git clone https://github.com/rafehusain/mcp-server-metatrader-4.git
cd mcp-server-metatrader-4
```

1. Install dependencies:

```bash
npm install
```

## Project Structure

```
├── build/           # Compiled JavaScript files
├── tools/          # Utility scripts and tools
├── index.ts        # Main application entry point
├── package.json    # Project dependencies and scripts
└── tsconfig.json   # TypeScript configuration
```

## Development

1. Build the project:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

## Dependencies

- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) - Model Context Protocol SDK
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [@types/node](https://www.npmjs.com/package/@types/node) - TypeScript definitions for Node.js

## License

See [License](./LICENSE)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please [open an issue](https://github.com/rafey.husain/mcp-server-metatrader-4/issues) in the GitHub repository.
