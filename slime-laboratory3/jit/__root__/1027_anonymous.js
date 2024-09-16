(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/1027_anonymous::anonymous
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
        // 7 0::TOUCH_BEGIN
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "touchBegin";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_BEGIN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_BEGIN = "touchBegin";
        } else {
            context.setproperty($names[0], "touchBegin", stack0);
        }
        // 7 0::TOUCH_END
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "touchEnd";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_END
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_END = "touchEnd";
        } else {
            context.setproperty($names[1], "touchEnd", stack0);
        }
        // 7 0::TOUCH_MOVE
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "touchMove";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_MOVE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_MOVE = "touchMove";
        } else {
            context.setproperty($names[2], "touchMove", stack0);
        }
        // 7 0::TOUCH_OVER
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "touchOver";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_OVER = "touchOver";
        } else {
            context.setproperty($names[3], "touchOver", stack0);
        }
        // 7 0::TOUCH_OUT
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = "touchOut";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_OUT = "touchOut";
        } else {
            context.setproperty($names[4], "touchOut", stack0);
        }
        // 7 0::TOUCH_ROLL_OVER
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = "touchRollOver";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_ROLL_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_ROLL_OVER = "touchRollOver";
        } else {
            context.setproperty($names[5], "touchRollOver", stack0);
        }
        // 7 0::TOUCH_ROLL_OUT
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = "touchRollOut";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_ROLL_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_ROLL_OUT = "touchRollOut";
        } else {
            context.setproperty($names[6], "touchRollOut", stack0);
        }
        // 7 0::TOUCH_TAP
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = "touchTap";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_TAP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_TAP = "touchTap";
        } else {
            context.setproperty($names[7], "touchTap", stack0);
        }
        // 7 0::PROXIMITY_BEGIN
        stack0 = scope0.findScopeProperty($names[8], false, false);
//        stack1 = "proximityBegin";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_BEGIN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_BEGIN = "proximityBegin";
        } else {
            context.setproperty($names[8], "proximityBegin", stack0);
        }
        // 7 0::PROXIMITY_END
        stack0 = scope0.findScopeProperty($names[9], false, false);
//        stack1 = "proximityEnd";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_END
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_END = "proximityEnd";
        } else {
            context.setproperty($names[9], "proximityEnd", stack0);
        }
        // 7 0::PROXIMITY_MOVE
        stack0 = scope0.findScopeProperty($names[10], false, false);
//        stack1 = "proximityMove";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_MOVE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_MOVE = "proximityMove";
        } else {
            context.setproperty($names[10], "proximityMove", stack0);
        }
        // 7 0::PROXIMITY_OUT
        stack0 = scope0.findScopeProperty($names[11], false, false);
//        stack1 = "proximityOut";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_OUT = "proximityOut";
        } else {
            context.setproperty($names[11], "proximityOut", stack0);
        }
        // 7 0::PROXIMITY_OVER
        stack0 = scope0.findScopeProperty($names[12], false, false);
//        stack1 = "proximityOver";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_OVER = "proximityOver";
        } else {
            context.setproperty($names[12], "proximityOver", stack0);
        }
        // 7 0::PROXIMITY_ROLL_OUT
        stack0 = scope0.findScopeProperty($names[13], false, false);
//        stack1 = "proximityRollOut";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_ROLL_OUT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_ROLL_OUT = "proximityRollOut";
        } else {
            context.setproperty($names[13], "proximityRollOut", stack0);
        }
        // 7 0::PROXIMITY_ROLL_OVER
        stack0 = scope0.findScopeProperty($names[14], false, false);
//        stack1 = "proximityRollOver";// JIT: redundant assigment, value unused
        // 7 0::PROXIMITY_ROLL_OVER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PROXIMITY_ROLL_OVER = "proximityRollOver";
        } else {
            context.setproperty($names[14], "proximityRollOver", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1027_anonymous.js
})