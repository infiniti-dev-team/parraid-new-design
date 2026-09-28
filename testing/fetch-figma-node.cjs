const http = require('http');
const fs = require('fs');

const req = http.request('http://127.0.0.1:3845/sse', (res) => {
  let endpoint = '';
  let fullData = '';
  res.on('data', (chunk) => {
    const text = chunk.toString();
    fullData += text;
    if (!endpoint) {
      const match = text.match(/data: (\/messages\?sessionId=[a-zA-Z0-9-]+)/);
      if (match) {
        endpoint = match[1];
        console.log('Got endpoint:', endpoint);
        // Initialize
        sendRpc(endpoint, {
          jsonrpc: '2.0',
          id: 1,
          method: 'initialize',
          params: {
            protocolVersion: '2024-11-05',
            capabilities: {},
            clientInfo: { name: 'test', version: '1.0' }
          }
        }, () => {
          sendRpc(endpoint, {
            jsonrpc: '2.0',
            method: 'notifications/initialized'
          }, () => {
            console.log('Requesting get_design_context for 122:65...');
            sendRpc(endpoint, {
              jsonrpc: '2.0',
              id: 2,
              method: 'tools/call',
              params: {
                name: 'get_design_context',
                arguments: {
                  nodeId: '122:65',
                  forceCode: true
                }
              }
            });
          });
        });
      }
    } else {
      // Look for response with id: 2
      const lines = text.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const parsed = JSON.parse(line.substring(6));
            if (parsed.id === 2 && parsed.result) {
              console.log('Received result for id 2!');
              fs.writeFileSync('testing/node-122-65.json', JSON.stringify(parsed.result, null, 2));
              
              // Extract content
              if (parsed.result.content) {
                parsed.result.content.forEach((item, idx) => {
                  if (item.type === 'text') {
                    fs.writeFileSync(`testing/node-122-65-text.txt`, item.text);
                    console.log('Saved text output to testing/node-122-65-text.txt');
                  } else if (item.type === 'image') {
                    const imgBuf = Buffer.from(item.data, 'base64');
                    fs.writeFileSync(`testing/node-122-65.png`, imgBuf);
                    console.log('Saved image to testing/node-122-65.png');
                  }
                });
              }
              process.exit(0);
            }
          } catch (e) {}
        }
      }
    }
  });
});

function sendRpc(endpoint, data, cb) {
  const postData = JSON.stringify(data);
  const postReq = http.request('http://127.0.0.1:3845' + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  }, (postRes) => {
    if (cb) cb();
  });
  postReq.write(postData);
  postReq.end();
}

req.end();
