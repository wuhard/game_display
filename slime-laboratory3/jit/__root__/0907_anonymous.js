(function anonymous(context
) {
/*
	Index: 152
	Path:  __root__/0907_anonymous::anonymous
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
        // 7 5:game_utils:SaveManager::dataName
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = "slime_labs_3_neutronized_03";// JIT: redundant assigment, value unused
        // 7 5:game_utils:SaveManager::dataName
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.dataName = "slime_labs_3_neutronized_03";
        } else {
            context.setproperty($names[0], "slime_labs_3_neutronized_03", stack0);
        }
        // 7 5:game_utils:SaveManager::dataName_Android
        stack0 = scope0.findScopeProperty($names[1], false, false);
//        stack1 = "slime_labs_3_neutronized_android_03";// JIT: redundant assigment, value unused
        // 7 5:game_utils:SaveManager::dataName_Android
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.dataName_Android = "slime_labs_3_neutronized_android_03";
        } else {
            context.setproperty($names[1], "slime_labs_3_neutronized_android_03", stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/0907_anonymous.js
})