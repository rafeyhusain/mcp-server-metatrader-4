import net from 'net';

export async function getQuote(symbol: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    client.connect(77, 'localhost', () => {
      const message = JSON.stringify({ MSG: 'QUOTE', SYMBOL: symbol }) + '\r\n';
      client.write(message);
    });

    client.on('data', (data: Buffer) => {
      try {
        const response = JSON.parse(data.toString());
        resolve(response);
      } catch (error) {
        reject(error);
      } finally {
        client.end();
      }
    });

    client.on('error', (err: Error) => {
      reject(err);
    });
  });
}
