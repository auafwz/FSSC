import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';
var ɵ0 = { type: 'string' };
var RootViewmodel = /** @class */ (function (_super) {
    tslib_1.__extends(RootViewmodel, _super);
    function RootViewmodel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bindingPath = '/';
        _this.dom = {};
        _this.childViewModels = {
            'DataGridComponentViewmodel': 'dataGridComponentViewmodel'
        };
        return _this;
    }
    RootViewmodel.prototype.Load1 = function (commandParam) { return; };
    RootViewmodel.prototype.Add1 = function (commandParam) { return; };
    RootViewmodel.prototype.Edit1 = function (commandParam) { return; };
    RootViewmodel.prototype.Save1 = function (commandParam) { return; };
    RootViewmodel.prototype.Cancel1 = function (commandParam) { return; };
    RootViewmodel.prototype.Remove1 = function (commandParam) { return; };
    RootViewmodel.prototype.dataImport1 = function (commandParam) { return; };
    RootViewmodel.prototype.dataExport1 = function (commandParam) { return; };
    tslib_1.__decorate([
        NgCommand({
            name: 'Load1',
            params: {
                filter: '',
                sort: ''
            },
            paramDescriptions: {
                filter: { type: 'string' },
                sort: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Load1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Add1',
            params: {
                transitionAction: 'Create'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Add1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Edit1',
            params: {
                transitionAction: 'Edit'
            },
            paramDescriptions: {
                transitionAction: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Edit1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Save1',
            params: {
                transitionAction: 'Save',
                commandName: '',
                frameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                transitionAction: { type: 'string' },
                commandName: { type: 'string' },
                frameId: { type: 'string' },
                successMsg: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Save1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Cancel1',
            params: {
                transitionAction: 'Cancel',
                loadCmdName: '',
                loadCmdFrameId: ''
            },
            paramDescriptions: {
                transitionAction: { type: 'string' },
                loadCmdName: { type: 'string' },
                loadCmdFrameId: { type: 'string' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Cancel1", null);
    tslib_1.__decorate([
        NgCommand({
            name: 'Remove1',
            params: {
                id: '{DATA~/data-grid-component/id}',
                ifSave: '{STATEMACHINE~/renderStates/canEdit}',
                refreshCommandName: '',
                refreshCommandFrameId: '',
                successMsg: ''
            },
            paramDescriptions: {
                id: ɵ0,
                ifSave: { type: 'boolean' },
                refreshCommandName: { type: 'string' },
                refreshCommandFrameId: { type: 'string' },
                successMsg: { type: '' }
            }
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "Remove1", null);
    tslib_1.__decorate([
        NgCommand({
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
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataImport1", null);
    tslib_1.__decorate([
        NgCommand({
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
        }),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", Observable)
    ], RootViewmodel.prototype, "dataExport1", null);
    RootViewmodel = tslib_1.__decorate([
        Injectable()
    ], RootViewmodel);
    return RootViewmodel;
}(ViewModel));
export { RootViewmodel };
export { ɵ0 };
