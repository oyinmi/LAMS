/* jshint esversion: 6 */

const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema(
    {
        firstname: {
            desc: "The user's firstname.",
            trim: true,
            type: String,
            required: true,
        },
        lastname: {
            desc: "The user's lastname.",
            trim: true,
            type: String,
            required: true,
        },
        username: {
            desc: "The user's username.",
            trim: true,
            type: String,
            required: true,
        },
        email: {
            desc: "The user's email address.",
            trim: true,
            type: String,
            index: true,
            unique: true,
            required: true,
        },
        password: {
            desc: "user password",
            trim: true,
            type: String,
            required: true,
            select: "password",
        },
        userType: {
            desc: "user roles",
            trim: true,
            type: String,
            enum: ["Admin"],
            default: "Admin",
            required: true,
        }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updated" },
    }
);


module.exports = mongoose.model("admin", AdminSchema);