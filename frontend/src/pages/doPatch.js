const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/Home.jsx', 'utf8');

// normalize endings
code = code.replace(/\r\n/g, '\n');

let patch = fs.readFileSync('frontend/src/pages/patch2.js', 'utf8');
patch = patch.replace(/\r\n/g, '\n');

let startReplace = patch.indexOf('const replacement = `\n') + 22;
let endReplace = patch.lastIndexOf('`;\n');
if (startReplace < 22) {
    console.log('could not find replacement start in patch2.js');
    process.exit(1);
}

let newHTML = patch.substring(startReplace, endReplace);

let startTarget = code.indexOf('  return (\n    <div className="min-h-screen bg-[#0f0e0e] text-orange-50 font-sans">');
if (startTarget !== -1) {
    code = code.substring(0, startTarget) + newHTML;
    fs.writeFileSync('frontend/src/pages/Home.jsx', code, 'utf8');
    console.log('Successfully applied patch!');
} else {
    console.log('Failed to find target in Home.jsx.');
}
