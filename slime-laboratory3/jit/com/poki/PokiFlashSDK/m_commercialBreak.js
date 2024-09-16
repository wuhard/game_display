(function anonymous(context
) {
/*
	Index: 3120
	Path:  com/poki/PokiFlashSDK::m_commercialBreak
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_commercialBreak() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
//                        stack1 = "commercialBreak()";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog("commercialBreak()");
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::adBlocked
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgadBlocked;
                        if (!stack0) { p = 26; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "AdBlocker detected, can't request ad";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("AdBlocker detected, can't request ad");
                    case 26:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::initialized
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bginitialized;
                        if (stack0) { p = 42; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "SDK not yet initialized, make sure you call PokiSDK.Init(this) before attempting to request an ad";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("SDK not yet initialized, make sure you call PokiSDK.Init(this) before attempting to request an ad");
                    case 42:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::clearKeys
                        //Possible type:7 0::Boolean
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Function  */ 
                        stack0 = this.$BgclearKeys;
                        stack1 = null;
                        if (null == stack0) { p = 56; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Slot  */ 
                        /*fast*/this.axCallProperty($names[0], [], false);
                    case 56:
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = "eval";// JIT: redundant assigment, value unused
//                        stack2 = "window.commercialBreak();";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("eval", "window.commercialBreak();");
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "eval", "window.commercialBreak();");
                                } else { 
                                   stack0.axCallProperty($names[2], ["eval", "window.commercialBreak();"], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_commercialBreak.js
})