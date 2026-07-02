const fs = require('fs');
const path = require('path');

// Helper to load fort data from JSON files
const loadFortData = () => {
  const fortsDir = path.join(__dirname, '../data/forts');
  const fortFiles = fs.readdirSync(fortsDir).filter(file => file.endsWith('.json'));

  const forts = fortFiles.map(file => {
    const fortData = JSON.parse(fs.readFileSync(path.join(fortsDir, file), 'utf8'));
    // Add _id for compatibility
    fortData._id = file.replace('.json', '');
    return fortData;
  });

  return forts;
};

// @desc    GET all forts
// @route   GET /api/forts
const getAllForts = (req, res) => {
  try {
    const forts = loadFortData();
    res.json(forts);
  } catch (error) {
    res.status(500).json({ message: 'Error loading forts', error: error.message });
  }
};

// @desc    GET single fort by ID
// @route   GET /api/forts/:id
const getFortById = (req, res) => {
  try {
    const fortId = req.params.id;
    const fortPath = path.join(__dirname, '../data/forts', `${fortId}.json`);

    if (!fs.existsSync(fortPath)) {
      return res.status(404).json({ message: 'Fort not found' });
    }

    const fortData = JSON.parse(fs.readFileSync(fortPath, 'utf8'));
    fortData._id = fortId;

    res.json(fortData);
  } catch (error) {
    res.status(500).json({ message: 'Error loading fort', error: error.message });
  }
};

module.exports = {
  getAllForts,
  getFortById
};
