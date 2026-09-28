const fs = require('fs');
const content = fs.readFileSync('C:/Users/Ali.Raza/.gemini/antigravity/brain/e1c12ee8-145d-4dde-805b-10e34941b59c/.system_generated/tasks/task-224.log', 'utf8');
const p = content.indexOf('"id":2');
if (p !== -1) {
  // Search backward from p for "data":"
  const dataStart = content.lastIndexOf('"data":"', p);
  console.log('dataStart:', dataStart);
  if (dataStart !== -1) {
    const dataEnd = content.indexOf('"', dataStart + 8);
    console.log('dataEnd:', dataEnd);
    const b64 = content.substring(dataStart + 8, dataEnd);
    console.log('Base64 length:', b64.length);
    fs.writeFileSync('testing/node-122-65.png', Buffer.from(b64, 'base64'));
    console.log('Successfully saved testing/node-122-65.png!');
  }
}
