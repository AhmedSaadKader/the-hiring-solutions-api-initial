"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const address = process.env.PORT || '0.0.0.0:3000';
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Hello world!');
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
