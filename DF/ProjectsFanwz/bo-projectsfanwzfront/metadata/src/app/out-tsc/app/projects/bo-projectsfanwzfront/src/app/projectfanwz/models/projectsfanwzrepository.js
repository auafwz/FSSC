import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository } from '@farris/bef';
import { ProjectsFanwzEntity } from './entities/projectsfanwzentity';
import { ProjectsFanwzProxy } from './projectsfanwzproxy';
var ProjectsFanwzRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectsFanwzRepository, _super);
    function ProjectsFanwzRepository(injector) {
        var _this = _super.call(this, injector) || this;
        _this.name = 'ProjectsFanwzRepository';
        _this.paginationInfo = {
            ProjectsFanwzEntity: {
                pageSize: 20,
            },
        };
        _this.proxy = injector.get(ProjectsFanwzProxy, null);
        return _this;
    }
    ProjectsFanwzRepository = tslib_1.__decorate([
        Injectable(),
        NgRepository({
            apiUrl: 'api/fssc/df/v1.0/projectfanwz_frm',
            entityType: ProjectsFanwzEntity
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], ProjectsFanwzRepository);
    return ProjectsFanwzRepository;
}(BefRepository));
export { ProjectsFanwzRepository };
