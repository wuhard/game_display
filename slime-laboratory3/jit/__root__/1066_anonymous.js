(function anonymous(context
) {
/*
	Index: 958
	Path:  __root__/1066_anonymous::anonymous
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
        // 7 0::RANDOM_SKIN_COUNTER
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::RANDOM_SKIN_COUNTER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.RANDOM_SKIN_COUNTER = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1066_anonymous.js
})