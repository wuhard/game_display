(function anonymous(context
) {
/*
	Index: 611
	Path:  __root__/1548_anonymous::anonymous
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
        // 7 0::IS_HERO_ON_CHECKPOINT
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_HERO_ON_CHECKPOINT
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_HERO_ON_CHECKPOINT = false;
        } else {
            context.setproperty($names[0], false, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1548_anonymous.js
})