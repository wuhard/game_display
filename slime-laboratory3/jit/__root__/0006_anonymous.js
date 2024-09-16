(function anonymous(context
) {
/*
	Index: 7
	Path:  __root__/0006_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 0::argv
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 9 {0, 0:avmplus, 3:avmplus:System, 3:avmplus.as$1, 2:avmplus, 1:avmplus:System, 5:avmplus:System}::getArgv
        stack1 = scope0.findScopeProperty($names[1], true, false);
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.getArgv();
        } else {
            // 9 {0, 0:avmplus, 3:avmplus:System, 3:avmplus.as$1, 2:avmplus, 1:avmplus:System, 5:avmplus:System}::getArgv
            {
                let t = stack1;
                const m = t.$BggetArgv || (t = sec.box(stack1), t.$BggetArgv);
                if( typeof m === "function" ) { 
                    stack1 = t.$BggetArgv ();
                } else { 
                    stack1 = stack1.axCallProperty($names[1], [], false);
                }
            }
        }
        // 7 0::argv
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.argv = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0006_anonymous.js
})