(function anonymous(context
) {
/*
	Index: 1032
	Path:  states/SplashState::m__stageTouchHandler
	Type:  PackageInternal
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_stageTouchHandler(local1 /* TouchEvent */) {
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::IS_ON_MOBILE
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['IS_ON_MOBILE'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgIS_ON_MOBILE;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack1 = false;
                        //JIT: Emit inline return
                        if (false != stack0) { return; }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_MOBILE
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.IS_ON_MOBILE = true;
                        } else {
                            context.setproperty($names[1], true, stack0);
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::IS_ON_WINDOWS
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.IS_ON_WINDOWS = false;
                        } else {
                            context.setproperty($names[2], false, stack0);
                        }
                        // 7 0:flash.ui::Multitouch
                        temp = scope0.findScopeProperty($names[3], true, false);
                        stack0 = temp.$BgMultitouch;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[3]);
                        }
                        // 7 0:flash.ui::MultitouchInputMode
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgMultitouchInputMode;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::TOUCH_POINT
                        //Possible type:7 0:flash.ui::MultitouchInputMode
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['TOUCH_POINT'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgTOUCH_POINT;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::inputMode
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.inputMode = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
                    case 39:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m__stageTouchHandler.js
})