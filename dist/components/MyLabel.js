"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "no label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.color, color = _d === void 0 ? "secondary" : _d, _e = _a.AllCaps, AllCaps = _e === void 0 ? false : _e, _f = _a.fontcolor, fontcolor = _f === void 0 ? "" : _f, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? "" : _g, _h = _a.border, border = _h === void 0 ? "" : _h;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " text-").concat(color), style: { color: fontcolor, backgroundColor: backgroundColor, border: border } }, { children: AllCaps ? label.toUpperCase() : label }), void 0));
};
exports.MyLabel = MyLabel;
