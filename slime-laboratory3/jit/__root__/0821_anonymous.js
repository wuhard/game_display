(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0821_anonymous::anonymous
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
        // 7 0::SHOW_ALL
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "showAll";// JIT: redundant assigment, value unused
        // 7 0::SHOW_ALL
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.SHOW_ALL = "showAll";
        } else {
            context.setproperty($names[0], "showAll", stack0);
        }
        // 7 0::EXACT_FIT
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "exactFit";// JIT: redundant assigment, value unused
        // 7 0::EXACT_FIT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.EXACT_FIT = "exactFit";
        } else {
            context.setproperty($names[1], "exactFit", stack0);
        }
        // 7 0::NO_BORDER
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = "noBorder";// JIT: redundant assigment, value unused
        // 7 0::NO_BORDER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.NO_BORDER = "noBorder";
        } else {
            context.setproperty($names[2], "noBorder", stack0);
        }
        // 7 0::NO_SCALE
        stack0 = scope0.findScopeProperty($names[3], false, false);
//        stack1 = "noScale";// JIT: redundant assigment, value unused
        // 7 0::NO_SCALE
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.NO_SCALE = "noScale";
        } else {
            context.setproperty($names[3], "noScale", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0821_anonymous.js
})