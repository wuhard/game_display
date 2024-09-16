(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0818_anonymous::anonymous
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
        // 7 0::LOW
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "low";// JIT: redundant assigment, value unused
        // 7 0::LOW
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOW = "low";
        } else {
            context.setproperty($names[0], "low", stack0);
        }
        // 7 0::MEDIUM
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "medium";// JIT: redundant assigment, value unused
        // 7 0::MEDIUM
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MEDIUM = "medium";
        } else {
            context.setproperty($names[1], "medium", stack0);
        }
        // 7 0::HIGH
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "high";// JIT: redundant assigment, value unused
        // 7 0::HIGH
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH = "high";
        } else {
            context.setproperty($names[2], "high", stack0);
        }
        // 7 0::BEST
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "best";// JIT: redundant assigment, value unused
        // 7 0::BEST
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.BEST = "best";
        } else {
            context.setproperty($names[3], "best", stack0);
        }
        // 7 0::HIGH_8X8
        stack0 = scope0.findScopeProperty($names[4], false, false);
//        stack1 = "8x8";// JIT: redundant assigment, value unused
        // 7 0::HIGH_8X8
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH_8X8 = "8x8";
        } else {
            context.setproperty($names[4], "8x8", stack0);
        }
        // 7 0::HIGH_8X8_LINEAR
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = "8x8linear";// JIT: redundant assigment, value unused
        // 7 0::HIGH_8X8_LINEAR
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH_8X8_LINEAR = "8x8linear";
        } else {
            context.setproperty($names[5], "8x8linear", stack0);
        }
        // 7 0::HIGH_16X16
        stack0 = scope0.findScopeProperty($names[6], false, false);
//        stack1 = "16x16";// JIT: redundant assigment, value unused
        // 7 0::HIGH_16X16
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH_16X16 = "16x16";
        } else {
            context.setproperty($names[6], "16x16", stack0);
        }
        // 7 0::HIGH_16X16_LINEAR
        stack0 = scope0.findScopeProperty($names[7], false, false);
//        stack1 = "16x16linear";// JIT: redundant assigment, value unused
        // 7 0::HIGH_16X16_LINEAR
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH_16X16_LINEAR = "16x16linear";
        } else {
            context.setproperty($names[7], "16x16linear", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0818_anonymous.js
})