import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { BXBZFanwzEntity } from './entities/bxbzfanwzentity';
import { BXBZFanwzProxy } from './bxbzfanwzproxy';
var BXBZFanwzRepository = /** @class */ (function (_super) {
    tslib_1.__extends(BXBZFanwzRepository, _super);
    function BXBZFanwzRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'BXBZFanwzRepository';
        _this.paginationInfo = {
            BXBZFanwzEntity: {
                pageSize: 20,
            }
        };
        _this.proxy = injector.get(BXBZFanwzProxy, null);
        return _this;
    }
    BXBZFanwzRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/fssc/er/v1.0/bxxeszfanwz_frm',
            entityType: BXBZFanwzEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], BXBZFanwzRepository);
    return BXBZFanwzRepository;
}(BefRepository));
export { BXBZFanwzRepository };
