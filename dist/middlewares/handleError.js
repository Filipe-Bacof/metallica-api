"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
function handleError(error, // Definir um tipo mais específico para o objeto 'error' é recomendado, caso esteja disponível.
req, res, next) {
    console.log(error);
    if (error && error.status) {
        return res.status(error.status).send(error.message);
    }
    else {
        res.status(500).send(error);
    }
}
//# sourceMappingURL=handleError.js.map