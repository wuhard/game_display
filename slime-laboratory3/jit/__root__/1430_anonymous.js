(function anonymous(context
) {
/*
	Index: 1405
	Path:  __root__/1430_anonymous::anonymous
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
        // 7 3::s_mat
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0:Box2D.Common.Math::b2Mat22
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2Mat22/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 3::s_mat
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.s_mat = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1430_anonymous.js
})