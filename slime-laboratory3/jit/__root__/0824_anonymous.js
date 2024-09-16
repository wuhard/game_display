(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0824_anonymous::anonymous
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
        // 7 0::TOP
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "T";// JIT: redundant assigment, value unused
        // 7 0::TOP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOP = "T";
        } else {
            context.setproperty($names[0], "T", stack0);
        }
        // 7 0::LEFT
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "L";// JIT: redundant assigment, value unused
        // 7 0::LEFT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LEFT = "L";
        } else {
            context.setproperty($names[1], "L", stack0);
        }
        // 7 0::BOTTOM
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "B";// JIT: redundant assigment, value unused
        // 7 0::BOTTOM
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BOTTOM = "B";
        } else {
            context.setproperty($names[2], "B", stack0);
        }
        // 7 0::RIGHT
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "R";// JIT: redundant assigment, value unused
        // 7 0::RIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RIGHT = "R";
        } else {
            context.setproperty($names[3], "R", stack0);
        }
        // 7 0::TOP_LEFT
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = "TL";// JIT: redundant assigment, value unused
        // 7 0::TOP_LEFT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOP_LEFT = "TL";
        } else {
            context.setproperty($names[4], "TL", stack0);
        }
        // 7 0::TOP_RIGHT
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = "TR";// JIT: redundant assigment, value unused
        // 7 0::TOP_RIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.TOP_RIGHT = "TR";
        } else {
            context.setproperty($names[5], "TR", stack0);
        }
        // 7 0::BOTTOM_LEFT
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = "BL";// JIT: redundant assigment, value unused
        // 7 0::BOTTOM_LEFT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BOTTOM_LEFT = "BL";
        } else {
            context.setproperty($names[6], "BL", stack0);
        }
        // 7 0::BOTTOM_RIGHT
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = "BR";// JIT: redundant assigment, value unused
        // 7 0::BOTTOM_RIGHT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BOTTOM_RIGHT = "BR";
        } else {
            context.setproperty($names[7], "BR", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0824_anonymous.js
})