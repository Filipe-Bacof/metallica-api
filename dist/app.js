"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const handleError_1 = require("./middlewares/handleError");
dotenv_1.default.config();
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(port, () => {
    console.log("🤘 Let's Rock!");
    console.log(`🔥 App rodando na porta ${port}`);
});
app.use(router_1.default);
app.use(handleError_1.handleError);
//# sourceMappingURL=app.js.map