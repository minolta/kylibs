"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
let ConvertService = class ConvertService {
    toSelectobjet(items) {
        let buf = [];
        for (let i of items) {
            let so = { id: i.id, text: '' };
            if (!!i.text)
                so.text = i.text;
            else if (!!i.name)
                so.text = i.name;
            buf.push(so);
        }
        return buf;
    }
};
ConvertService = __decorate([
    core_1.Injectable()
], ConvertService);
exports.ConvertService = ConvertService;
//# sourceMappingURL=convert.service.js.map