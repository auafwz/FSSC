import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BefProxy, UriService } from '@farris/bef';
var ProjectsFanwzProxy = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsFanwzProxy, _super);
    function ProjectsFanwzProxy(httpClient, uriService) {
        var _this = _super.call(this, httpClient, uriService) || this;
        _this.apiUrl = 'api/fssc/df/v1.0/projectfanwz_frm';
        _this.baseUri = uriService.extendUri(_this.apiUrl);
        return _this;
    }
    ProjectsFanwzProxy = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            UriService])
    ], ProjectsFanwzProxy);
    return ProjectsFanwzProxy;
}(BefProxy));
export { ProjectsFanwzProxy };
