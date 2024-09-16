(function anonymous(context
) {
/*
	Index: 157
	Path:  __root__/1109_anonymous::anonymous
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
        // 7 0::IS_AD_ON
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::IS_AD_ON
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.IS_AD_ON = false;
        } else {
            context.setproperty($names[0], false, stack0);
        }
        // 7 0::GAME_OVER_AD_COUNTER
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::GAME_OVER_AD_COUNTER
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.GAME_OVER_AD_COUNTER = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
        // 7 0::PAUSE_ON_DELAY
        stack0 = scope0.findScopeProperty($names[2], false, false);
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PAUSE_ON_DELAY
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PAUSE_ON_DELAY = 0;
        } else {
            context.setproperty($names[2], 0, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1109_anonymous.js
})