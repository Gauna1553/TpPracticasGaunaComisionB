"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemComponent = void 0;
var core_1 = require("@angular/core");
var item_1 = require("../../models/item");
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.item = new item_1.Item();
        this.deleteItem = new core_1.EventEmitter;
        this.toggleItem = new core_1.EventEmitter;
    }
    ItemComponent.prototype.onDelete = function (item) {
        this.deleteItem.emit(item);
    };
    ItemComponent.prototype.onToggle = function (item) {
        item.completed = !item.completed;
        this.toggleItem.emit(item);
    };
    __decorate([
        core_1.Input()
    ], ItemComponent.prototype, "item");
    __decorate([
        core_1.Output()
    ], ItemComponent.prototype, "deleteItem");
    __decorate([
        core_1.Output()
    ], ItemComponent.prototype, "toggleItem");
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'app-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
