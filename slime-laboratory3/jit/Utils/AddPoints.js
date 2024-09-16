(function anonymous(context
) {
/*
	Index: 42
	Path:  Utils.AddPoints
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_AddPoints(local1 /* int */) {
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
                        // 7 0::PlayerPointsToReach
                        stack0 = scope0.findScopeProperty($names[0], false, false);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack1 = this.$BgPlayerPointsToReach;
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack2 = local1;
                        stack1 += local1;
                        // 7 0::PlayerPointsToReach
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerPointsToReach = stack1;
                        } else {
                            context.setproperty($names[0], stack1, stack0);
                        }
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgPlayerPointsToReach;
                        stack1 = 9999999;
                        //JIT: Emit inline return
                        if (!(9999999 < stack0)) { return; }
                        // 7 0::PlayerPointsToReach
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        stack1 = 9999999;// JIT: redundant assigment, value unused
                        // 7 0::PlayerPointsToReach
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.PlayerPointsToReach = 9999999;
                        } else {
                            context.setproperty($names[0], 9999999, stack0);
                        }
                    case 30:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Utils/AddPoints.js
})