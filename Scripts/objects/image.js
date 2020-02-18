"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var image = /** @class */ (function (_super) {
        __extends(image, _super);
        // constructor
        function image(source, x, y, isCentered) {
            if (source === void 0) { source = ""; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, source) || this;
            _this.source = source;
            _this.x = x;
            _this.y = y;
            _this.isCentered = isCentered;
            _this.on("load", function () {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            });
            _this.x = x;
            _this.y = y;
            return _this;
        }
        image.prototype.setImg = function (sourceA) {
            var _this = this;
            this.source = sourceA;
            this.on("load", function () {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            });
        };
        return image;
    }(createjs.Bitmap));
    objects.image = image;
})(objects || (objects = {}));
//# sourceMappingURL=image.js.map