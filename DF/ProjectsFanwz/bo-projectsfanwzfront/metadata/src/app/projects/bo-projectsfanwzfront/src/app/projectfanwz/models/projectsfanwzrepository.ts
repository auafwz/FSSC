
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { ProjectsFanwzEntity } from './entities/projectsfanwzentity';

import { ProjectsFanwzProxy } from './projectsfanwzproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssc/df/v1.0/projectfanwz_frm',
    entityType: ProjectsFanwzEntity
})
export class ProjectsFanwzRepository extends BefRepository<ProjectsFanwzEntity> {
    public name = 'ProjectsFanwzRepository';

    public proxy: ProjectsFanwzProxy;
    public paginationInfo = {
        ProjectsFanwzEntity: {
            pageSize: 20,
        },
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(ProjectsFanwzProxy, null);
    }
}