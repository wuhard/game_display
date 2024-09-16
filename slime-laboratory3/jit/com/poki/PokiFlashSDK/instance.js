(function anonymous(context
) {
/*
	Index: 3114
	Path:  com/poki/PokiFlashSDK.instance
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0:com.poki::PokiFlashSDK
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_instance() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 3::_instance
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['_instance'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bg_instance;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (stack0) { p = 19; continue; };
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        stack1 = this;
                        stack1 = context.construct(stack1, []);
                        // 7 3::_instance
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0._instance = stack1;
                        } else {
                            context.setproperty($names[1], stack1, stack0);
                        }
                    case 19:
                        // 7 0:com.poki::PokiFlashSDK
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgPokiFlashSDK;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 3::_instance
                        //Possible type:7 0:com.poki::PokiFlashSDK
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['_instance'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bg_instance;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        return stack0;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/instance.js
})