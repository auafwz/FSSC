
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { BXBZFanwzEntity } from './entities/bxbzfanwzentity';

import { BXBZFanwzProxy } from './bxbzfanwzproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssc/er/v1.0/bxxeszfanwz_frm',
    entityType: BXBZFanwzEntity
})
export class BXBZFanwzRepository extends BefRepository<BXBZFanwzEntity> {
    public name = 'BXBZFanwzRepository';

    public proxy: BXBZFanwzProxy;
    public paginationInfo = {
        BXBZFanwzEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(BXBZFanwzProxy, null);
    }
}