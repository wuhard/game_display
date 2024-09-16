(function anonymous(context
) {
/*
	Index: 3113
	Path:  __root__/0861_anonymous::anonymous
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
        // 7 3::_instance
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 3::_instance
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0._instance = null;
        } else {
            context.setproperty($names[0], null, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0861_anonymous.js
})