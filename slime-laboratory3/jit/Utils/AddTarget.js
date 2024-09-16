(function anonymous(context
) {
/*
	Index: 43
	Path:  Utils.AddTarget
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_AddTarget(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // 7 0::PlayerTargetToReach
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgPlayerTargetToReach;
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 += local1;
                        // 7 0::PlayerTargetToReach
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerTargetToReach = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgPlayerTargetToReach;
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 > stack0)) { return; }
                        // 7 0::PlayerTargetToReach
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 0::PlayerTargetToReach
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerTargetToReach = 0;
                        } else {
                            context.setproperty($names[0], 0, stack0);
                        }
                    case 30:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Utils/AddTarget.js
})