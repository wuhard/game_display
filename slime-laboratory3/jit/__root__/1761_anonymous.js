(function anonymous(context
) {
/*
	Index: 781
	Path:  __root__/1761_anonymous::anonymous
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
        // 7 0::LINEAR
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::LINEAR
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.LINEAR = 0;
        } else {
            context.setproperty($names[0], 0, stack0);
        }
        // 7 0::linear
        stack0 = scope0.findScopeProperty($names[1], false, false);
        // 7 0::easeLinear
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgeaseLinear;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::linear
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.linear = stack1;
        } else {
            context.setproperty($names[1], stack1, stack0);
        }
        // 7 0::none
        stack0 = scope0.findScopeProperty($names[3], false, false);
        // 7 0::easeLinear
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgeaseLinear;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::none
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.none = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1761_anonymous.js
})