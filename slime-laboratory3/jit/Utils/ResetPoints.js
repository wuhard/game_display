(function anonymous(context
) {
/*
	Index: 36
	Path:  Utils.ResetPoints
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_ResetPoints() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::PlayerPoints
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerPoints
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerPoints = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
        // 7 0::PlayerPointsToReach
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerPointsToReach
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerPointsToReach = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Utils/ResetPoints.js
})