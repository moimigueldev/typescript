"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DONT NEED INTERFACES WHEN CREATING AN ABSTRACT CLASS
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // BUUBLE SORT
    Sorter.prototype.sort = function () {
        // Deconstructor
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
