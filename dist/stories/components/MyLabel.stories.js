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
exports.CustomBorder = exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: "select" },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args), void 0)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "normal",
    AllCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    AllCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: "normal",
    color: "tertiary",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: "h1",
    fontcolor: "#5517ac",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: "h1",
    backgroundColor: "#5517ac",
};
exports.CustomBorder = Template.bind({});
exports.CustomBorder.args = {
    size: "h1",
    border: "1px solid #5517ac",
};
