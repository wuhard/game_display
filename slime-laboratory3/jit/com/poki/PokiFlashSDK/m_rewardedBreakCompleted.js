(function anonymous(context
) {
/*
	Index: 3126
	Path:  com/poki/PokiFlashSDK::m_rewardedBreakCompleted
	Type:  Public
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_rewardedBreakCompleted(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        stack1 = "rewardedBreak Completed! ";
//                        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
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
                        /* We sure that this safe call, represented in TRAIT as Method  */ 
                        this.$BgconsoleLog(stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::callBackRewardedBreak
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Function  */ 
                        stack0 = this.$BgcallBackRewardedBreak;
                        stack1 = null;
                        //JIT: Emit inline return
                        if (null === stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
                        stack1 = local1;
                        /* We sure that this safe call, represented in TRAIT as Slot  */ 
                        /*fast*/this.axCallProperty($names[1], [local1], false);
                    case 31:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_rewardedBreakCompleted.js
})