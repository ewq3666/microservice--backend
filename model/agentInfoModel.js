const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;

const agentSchema = Schema({
    agentName: {
        type: String
    },
    Mobile: {
        type: String
    },
    Password: {
        type: String
    },
    Collection: {
        type: String
    },
    TotalDays: {
        type: String
    },
    UserId: {
        type: String
    },
    Commision: {
        type: String
    },
    agentID: {
        type: String
    }
    
    
});

module.exports = model('agent', agentSchema);
