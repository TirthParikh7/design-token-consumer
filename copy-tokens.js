const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'figma-design-tokens/output/fixed-token.css');
const destination = path.join(__dirname, 'public/styles/tokens.css');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('❌ Failed to copy tokens:', err);
  } else {
    console.log('✅ Tokens copied to public/styles/tokens.css');
  }
});
