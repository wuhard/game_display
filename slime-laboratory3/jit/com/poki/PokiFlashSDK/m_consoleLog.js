(function anonymous(context
) {
/*
	Index: 3127
	Path:  com/poki/PokiFlashSDK::m_consoleLog
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __trace_def = context.getTopLevel(0); // :trace

    return function compiled_m_consoleLog(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
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
                        // 7 3::consoleLogPrefix
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::String  */ 
                        stack0 = this.$BgconsoleLogPrefix;
//                        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
                        stack1 = local1;
                        stack0 += local1;
                        stack0 = context.axCoerceString(stack0);
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::debug
                        //Possible type:7 0::String
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$Bgdebug;
                        stack1 = true;
                        //JIT: Emit inline return
                        if (true != stack0) { return; }
                        // 7 0::trace
                        /* GenerateLexImports */
//                        stack0 = __trace_def;// JIT: redundant assigment, value unused
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __trace_def, ((_a !== 'object' && _a !== 'function' ) || __trace_def == null || __trace_def[AX_CLASS_SYMBOL]))) {
                            __trace_def.trace(local2);
                        } else {
                            // 7 0::trace
                            {
                                let t = __trace_def;
                                const m = t.$Bgtrace || (t = sec.box(__trace_def), t.$Bgtrace);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   __trace_def.axCallProperty($names[0], [local2], false);
                                }
                            }
                        }
                        // 7 0:flash.external::ExternalInterface
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgExternalInterface;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = "console.log";// JIT: redundant assigment, value unused
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("console.log", local2);
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "console.log", local2);
                                } else { 
                                   stack0.axCallProperty($names[2], ["console.log", local2], false);
                                }
                            }
                        }
                    case 38:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_consoleLog.js
})