
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { DataGridComponentViewmodel } from './datagridcomponentviewmodel';

import { DetailFormComponentViewmodel } from './detailformcomponentviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'DataGridComponentViewmodel' : 'dataGridComponentViewmodel',
        'DetailFormComponentViewmodel' : 'detailFormComponentViewmodel'
    }
    public dataGridComponentViewmodel: DataGridComponentViewmodel;
    public detailFormComponentViewmodel: DetailFormComponentViewmodel;
    @NgCommand({
        name: 'dataImport1',
        params: {
            type: '',
            ruleID: '',
            option: ''
        },
        paramDescriptions: {
            type: { type: 'int' },
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public dataImport1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'dataExport1',
        params: {
            type: '',
            ruleID: '',
            option: ''
        },
        paramDescriptions: {
            type: { type: 'int' },
            ruleID: { type: 'string' },
            option: { type: 'string' }
        }
    })
    public dataExport1(commandParam?: any): Observable<any> { return; }

}