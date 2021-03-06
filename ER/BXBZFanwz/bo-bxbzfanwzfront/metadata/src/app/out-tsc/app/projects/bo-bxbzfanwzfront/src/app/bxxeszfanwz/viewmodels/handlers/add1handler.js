import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';
var Add1Handler = /** @class */ (function (_super) {
    tslib_1.__extends(Add1Handler, _super);
    function Add1Handler(_ListDataService1, _StateMachineService1) {
        var _this = _super.call(this) || this;
        _this._ListDataService1 = _ListDataService1;
        _this._StateMachineService1 = _StateMachineService1;
        return _this;
    }
    Add1Handler.prototype.schedule = function () {
        var _this = this;
        this.addTask('append', function (context) {
            var args = [];
            return _this.invoke(_this._ListDataService1, 'append', args, context);
        });
        this.addTask('transit', function (context) {
            var args = [
                '{COMMAND~/params/transitionAction}'
            ];
            return _this.invoke(_this._StateMachineService1, 'transit', args, context);
        });
        this.addLink('append', 'transit', "1==1");
    };
    Add1Handler = tslib_1.__decorate([
        Injectable(),
        NgCommandHandler({
            commandName: 'Add1'
        }),
        tslib_1.__metadata("design:paramtypes", [ListDataService1,
            StateMachineService1])
    ], Add1Handler);
    return Add1Handler;
}(CommandHandler));
export { Add1Handler };
