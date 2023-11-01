const mongoose = require('mongoose');


const subcategorySchema = new mongoose.Schema({
    id: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    subcategoryName: {
        type: String,
        required: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
    active: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Number,
        default: Date.now
    },
}, { timestamps: true, versionKey: false });


// subcategorySchema.post('save', function (error, doc, next) {
//     if (error.name === 'MongoServerError' && error.code === 11000) {
//         const field = Object.keys(error.keyValue)[0];
//         let message
//         switch (field) {
//             case 'id': message = strings.ID_EXISTS; break;
//             case 'subcategoryName': message = strings.SUBCATEGORY_EXISTS; break;
//             default: message = ${field} test already exists.; break;
//         }
//         next(new Error(message));
//     } else {
//         next(error);
//     }
// });

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;