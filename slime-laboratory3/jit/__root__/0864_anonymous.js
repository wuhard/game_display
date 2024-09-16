(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/0864_anonymous::anonymous
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
        // 7 0::marshallExceptions
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::marshallExceptions
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.marshallExceptions = false;
        } else {
            context.setproperty($names[0], false, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0864_anonymous.js
})