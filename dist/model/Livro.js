"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(_editora, _formato, _cor) {
        this.editora = _editora;
        this.formato = _formato;
        this.cor = _cor;
    }
    getEditora() {
        return this.editora;
    }
    setEditora(_editora) {
        this.editora = _editora;
    }
    getFormato() {
        return this.formato;
    }
    setFormato(_formato) {
        this.formato = _formato;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map