const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  file_name: {
    type: String,
    required: [true, "Please tell us file name"],
  },
  file_type: {
    type: String,
    required: [true, "Please tell us file type"],
  },
  doc: String,
});

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
