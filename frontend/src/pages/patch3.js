const fs = require('fs');
let code = fs.readFileSync('frontend/src/pages/Home.jsx', 'utf8');

const searchStr = \  return (
    <div className="min-h-screen bg-[#0f0e0e] text-orange-50 font-sans">
      <Navbar />\;

const idx = code.indexOf(searchStr);

if (idx !== -1) {
  // read patch2 replacement block
  let patchCode = fs.readFileSync('frontend/src/pages/patch2.js', 'utf8');
  let repStr = patchCode.substring(patchCode.indexOf('\\n  return (') + 1, patchCode.indexOf('\;\n\nif (startIndex'));
  
  code = code.substring(0, idx) + repStr;
  fs.writeFileSync('frontend/src/pages/Home.jsx', code, 'utf8');
  console.log('Worked!');
} else {
  console.log('SearchStr not found!');
}
