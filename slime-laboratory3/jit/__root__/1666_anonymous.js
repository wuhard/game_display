(function anonymous(context
) {
/*
	Index: 0
	Path:  __root__/1666_anonymous::anonymous
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
        // 7 0::KEY_DOWN
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "keyDown";// JIT: redundant assigment, value unused
        // 7 0::KEY_DOWN
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_DOWN = "keyDown";
        } else {
            context.setproperty($names[0], "keyDown", stack0);
        }
        // 7 0::KEY_UP
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "keyUp";// JIT: redundant assigment, value unused
        // 7 0::KEY_UP
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.KEY_UP = "keyUp";
        } else {
            context.setproperty($names[1], "keyUp", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1666_anonymous.js
})