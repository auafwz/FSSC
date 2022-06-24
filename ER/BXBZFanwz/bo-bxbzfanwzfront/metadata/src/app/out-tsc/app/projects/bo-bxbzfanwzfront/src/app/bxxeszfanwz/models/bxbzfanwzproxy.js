import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var BXBZFanwzProxy = /** @class */ (function (_super) {
    tslib_1.__extends(BXBZFanwzProxy, _super);
    function BXBZFanwzProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/fssc/er/v1.0/bxxeszfanwz_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    BXBZFanwzProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], BXBZFanwzProxy);
    return BXBZFanwzProxy;
}(BefProxy));
export { BXBZFanwzProxy };
