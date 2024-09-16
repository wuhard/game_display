(function anonymous(context
) {
/*
	Index: 3116
	Path:  com/poki/PokiFlashSDK::m_Init
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Init(local1 /* MovieClip */) {
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
//                        // JIT: potential type:7 0:flash.display::MovieClip// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 0::_stage
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
                        this.$Bg_stage = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "beginning initialization";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog("beginning initialization");
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 3::initialized
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bginitialized;
                        if (!stack0) { p = 32; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "SDK is already initialized!";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("SDK is already initialized!");
                        return;
                    case 32:
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::available
                        //Possible type:7 0:flash.external::ExternalInterface
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['available'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgavailable;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 126; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "found ExternalInterface, calling initPokiBridge";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog("found ExternalInterface, calling initPokiBridge");
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "Ready";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::Ready
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[2]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addCallback("Ready", stack2);
                        } else {
                            // 7 0::addCallback
                            {
                                let t = stack0;
                                const m = t.$BgaddCallback || (t = sec.box(stack0), t.$BgaddCallback);
                                if( typeof m === "function" ) { 
                                    m.call(t, "Ready", stack2);
                                } else { 
                                   stack0.axCallProperty($names[3], ["Ready", stack2], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "AdBlocked";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::AdBlocked
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[4]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addCallback("AdBlocked", stack2);
                        } else {
                            // 7 0::addCallback
                            {
                                let t = stack0;
                                const m = t.$BgaddCallback || (t = sec.box(stack0), t.$BgaddCallback);
                                if( typeof m === "function" ) { 
                                    m.call(t, "AdBlocked", stack2);
                                } else { 
                                   stack0.axCallProperty($names[3], ["AdBlocked", stack2], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "commercialBreakCompleted";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::commercialBreakCompleted
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[5]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addCallback("commercialBreakCompleted", stack2);
                        } else {
                            // 7 0::addCallback
                            {
                                let t = stack0;
                                const m = t.$BgaddCallback || (t = sec.box(stack0), t.$BgaddCallback);
                                if( typeof m === "function" ) { 
                                    m.call(t, "commercialBreakCompleted", stack2);
                                } else { 
                                   stack0.axCallProperty($names[3], ["commercialBreakCompleted", stack2], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "rewardedBreakCompleted";// JIT: redundant assigment, value unused
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::rewardedBreakCompleted
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addCallback("rewardedBreakCompleted", stack2);
                        } else {
                            // 7 0::addCallback
                            {
                                let t = stack0;
                                const m = t.$BgaddCallback || (t = sec.box(stack0), t.$BgaddCallback);
                                if( typeof m === "function" ) { 
                                    m.call(t, "rewardedBreakCompleted", stack2);
                                } else { 
                                   stack0.axCallProperty($names[3], ["rewardedBreakCompleted", stack2], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "window.initPokiBridge";// JIT: redundant assigment, value unused
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack2 = temp.$BgExternalInterface;
                        if (stack2 === undefined || typeof stack2 === 'function') {
                            stack2 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::objectID
                        //Possible type:7 0:flash.external::ExternalInterface
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['objectID'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$BgobjectID;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[7]);
                            }
                        }
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("window.initPokiBridge", stack2);
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "window.initPokiBridge", stack2);
                                } else { 
                                   stack0.axCallProperty($names[8], ["window.initPokiBridge", stack2], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 126:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = "SDK has not been initialized!";// JIT: redundant assigment, value unused
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleError("SDK has not been initialized!");
                    case 134:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_Init.js
})