(function anonymous(context
) {
/*
	Index: 468
	Path:  __root__/1290_anonymous::anonymous
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
        // 7 0:http://www.box2d.org/ns/b2internal::b2_defaultListener
        stack0 = scope0.findScopeProperty($names[0], false, false);
        stack1 = _this;
        stack1 = context.construct(stack1, []);
        // 7 0:http://www.box2d.org/ns/b2internal::b2_defaultListener
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2_defaultListener = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1290_anonymous.js
})