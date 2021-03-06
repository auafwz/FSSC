
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { EndEditService as EndEditService1 } from '@farris/command-services';
import { ValidationService as ValidationService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';
import { CardDataService as CardDataService1 } from '@farris/command-services';
import { StateMachineService as StateMachineService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'save1'
})
export class save1Handler extends CommandHandler {
    constructor(
        public _EndEditService1: EndEditService1,
        public _ValidationService1: ValidationService1,
        public _ListDataService1: ListDataService1,
        public _CardDataService1: CardDataService1,
        public _StateMachineService1: StateMachineService1
    ) {
        super();
    }

    schedule() {
        this.addTask('endEdit', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._EndEditService1, 'endEdit', args, context);
        });

        this.addTask('validateCurrentRow', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'validateCurrentRow', args, context);
        });

        this.addTask('save', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/successMsg}'
                    ];
            return this.invoke(this._CardDataService1, 'save', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/loadCmdName}', 
                '{COMMAND~/params/loadCmdFrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addTask('transit', (context: CommandContext) => {
            const args = [
                'Save'
                    ];
            return this.invoke(this._StateMachineService1, 'transit', args, context);
        });

        this.addTask('resetValidation', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._ValidationService1, 'resetValidation', args, context);
        });

        this.addLink('endEdit', 'validateCurrentRow', `1==1`);
        this.addLink('validateCurrentRow', 'save', `1==1`);
        this.addLink('save', 'refresh', `1==1`);
        this.addLink('refresh', 'transit', `1==1`);
        this.addLink('transit', 'resetValidation', `1==1`);
    }
}