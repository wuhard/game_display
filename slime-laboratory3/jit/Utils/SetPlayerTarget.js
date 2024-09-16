(function anonymous(context
) {
/*
	Index: 44
	Path:  Utils.SetPlayerTarget
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_SetPlayerTarget(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::PlayerTarget
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::PlayerTarget
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerTarget = local1;
        } else {
            context.setproperty($names[0], local1, stack0);
        }
        // 7 0::PlayerTargetToReach
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::PlayerTargetToReach
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerTargetToReach = local1;
        } else {
            context.setproperty($names[1], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Utils/SetPlayerTarget.js
})