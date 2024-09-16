(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/1488_anonymous::anonymous
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
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::LOW
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LOW = 1;
        } else {
            context.setproperty($names[0], 1, stack0);
        }
        // 7 0::MEDIUM
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 2;// JIT: redundant assigment, value unused
        // 7 0::MEDIUM
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.MEDIUM = 2;
        } else {
            context.setproperty($names[1], 2, stack0);
        }
        // 7 0::HIGH
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 3;// JIT: redundant assigment, value unused
        // 7 0::HIGH
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.HIGH = 3;
        } else {
            context.setproperty($names[2], 3, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1488_anonymous.js
})