// Static fort data for deployment without backend
const sinhagadData = require('./sinhagad.json');

export const STATIC_FORTS_DATA = {
    sinhagad: sinhagadData
};

export const FORTS_LIST = [
    {
        _id: 'sinhagad',
        name: 'Sinhagad Fort',
        location: sinhagadData.location,
        trek: sinhagadData.trek,
        safety: sinhagadData.safety,
        accessibility: sinhagadData.accessibility,
        visitInfo: sinhagadData.visitInfo,
        description: sinhagadData.description,
        history: sinhagadData.history,
        images: sinhagadData.images
    }
];
