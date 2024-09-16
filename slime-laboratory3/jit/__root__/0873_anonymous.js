(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0873_anonymous::anonymous
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
        // 7 0::NONE
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "none";// JIT: redundant assigment, value unused
        // 7 0::NONE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.NONE = "none";
        } else {
            context.setproperty($names[0], "none", stack0);
        }
        // 7 0::GESTURE
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "gesture";// JIT: redundant assigment, value unused
        // 7 0::GESTURE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GESTURE = "gesture";
        } else {
            context.setproperty($names[1], "gesture", stack0);
        }
        // 7 0::TOUCH_POINT
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "touchPoint";// JIT: redundant assigment, value unused
        // 7 0::TOUCH_POINT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOUCH_POINT = "touchPoint";
        } else {
            context.setproperty($names[2], "touchPoint", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0873_anonymous.js
})