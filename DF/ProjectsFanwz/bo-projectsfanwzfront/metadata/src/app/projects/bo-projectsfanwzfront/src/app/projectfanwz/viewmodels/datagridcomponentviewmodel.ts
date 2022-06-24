
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "projectCode_034d37e8_rnse",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "projectCode_034d37e8_rnse",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "projectCode",
          "isExpression": false,
          "value": "projectCode"
        },
        "dataField": "projectCode",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "项目编号",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "projectName_2693df04_jujs",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "projectName_2693df04_jujs",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "projectName",
          "isExpression": false,
          "value": "projectName"
        },
        "dataField": "projectName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "项目名称",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      }
    ],
    "multiSelect": false,
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'loadList1',
        params: {
        }
    })
    public loadList1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'remove1',
        params: {
            id: '{DATA~/data-grid-component/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public remove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'loadCard1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            frameId: 'detail-form-component'
        },
        paramDescriptions: {
            id: { type: 'string' },
            frameId: { type: 'string' }
        }
    })
    public loadCard1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'add1',
        params: {
        }
    })
    public add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'changePage1',
        params: {
            loadCommandName: 'loadList1',
            loadCommandFrameId: 'data-grid-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public changePage1(commandParam?: any): Observable<any> { return; }

}