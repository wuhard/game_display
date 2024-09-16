(function anonymous(context
) {
/*
	Index: 3122
	Path:  com/poki/PokiFlashSDK::m_happyTime
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_happyTime(local1 /* int */) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = "happyTime(";
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack2 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack2 = local1.toString();
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::toString
                            {
                                let t = local1;
                                const m = t.$BgtoString || (t = sec.box(local1), t.$BgtoString);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$BgtoString ();
                                } else { 
                                    stack2 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack1 += stack2;
//                        stack2 = ")";// JIT: redundant assigment, value unused
                        stack1 += ")";
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog(stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::adBlocked
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgadBlocked;
                        if (!stack0) { p = 36; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "AdBlocker detected, can't request ad";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("AdBlocker detected, can't request ad");
                    case 36:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::initialized
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bginitialized;
                        if (stack0) { p = 52; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "SDK not yet initialized, make sure you call PokiSDK.Init(this) before attempting to request an ad";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("SDK not yet initialized, make sure you call PokiSDK.Init(this) before attempting to request an ad");
                    case 52:
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = "eval";// JIT: redundant assigment, value unused
                        stack2 = "window.rewardedBreak(";
//                        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
                        stack3 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                           stack3 = local1.toString();
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::toString
                            {
                                let t = local1;
                                const m = t.$BgtoString || (t = sec.box(local1), t.$BgtoString);
                                if( typeof m === "function" ) { 
                                    stack3 = t.$BgtoString ();
                                } else { 
                                    stack3 = local1.axCallProperty($names[0], [], false);
                                }
                            }
                        }
                        stack2 += stack3;
//                        stack3 = ");";// JIT: redundant assigment, value unused
                        stack2 += ");";
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("eval", stack2);
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "eval", stack2);
                                } else { 
                                   stack0.axCallProperty($names[2], ["eval", stack2], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_happyTime.js
})