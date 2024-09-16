(function anonymous(context
) {
/*
	Index: 41
	Path:  Utils.SynchPoints
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_SynchPoints() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgUtils;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::PlayerPointsToReach
        //Possible type:7 0::Utils
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['PlayerPointsToReach'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgPlayerPointsToReach;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::PlayerPoints
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerPoints = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Utils/SynchPoints.js
})