(function anonymous(context
) {
/*
	Index: 3128
	Path:  com/poki/PokiFlashSDK::m_consoleError
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __trace_def = context.getTopLevel(0); // :trace

    return function compiled_m_consoleError(local1 /* String */) {
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
//                        stack1 = "Error:";// JIT: redundant assigment, value unused
                        stack0 += "Error:";
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
//                        stack1 = "console.error";// JIT: redundant assigment, value unused
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.call("console.error", local2);
                        } else {
                            // 7 0::call
                            {
                                let t = stack0;
                                const m = t.$Bgcall || (t = sec.box(stack0), t.$Bgcall);
                                if( typeof m === "function" ) { 
                                    m.call(t, "console.error", local2);
                                } else { 
                                   stack0.axCallProperty($names[2], ["console.error", local2], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::visualDebugText
                        //Possible type:7 0:flash.external::ExternalInterface
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
                        stack0 = this.$BgvisualDebugText;
                        stack1 = null;
                        if (null != stack0) { p = 91; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:flash.text::TextField
                        stack1 = scope0.findScopeProperty($names[3], true, false);
                        //JIT: Support fast construct:TextField/InteractiveObject
                        stack1 = context.constructFast(stack1, [], $names[3]);
                        // 7 0::visualDebugText
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.text::TextField  */ 
                        this.$BgvisualDebugText = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::visualDebugText
                        //Possible type:7 0:flash.text::TextField
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
                        stack0 = this.$BgvisualDebugText;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::_stage
                        //Possible type:7 0:flash.text::TextField
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack1 = this.$Bg_stage;
                        // 7 0::stage
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['stage'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgstage;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::stageWidth
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['stageWidth'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgstageWidth;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        // 7 0::width
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.width = stack1;
                        } else {
                            context.setproperty($names[6], stack1, stack0);
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::_stage
                        //Possible type:7 0:flash.text::TextField
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$Bg_stage;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::visualDebugText
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
                        stack1 = this.$BgvisualDebugText;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.addChild(stack1);
                        } else {
                            // 7 0::addChild
                            {
                                let t = stack0;
                                const m = t.$BgaddChild || (t = sec.box(stack0), t.$BgaddChild);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1], false);
                                }
                            }
                        }
                    case 91:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::visualDebugText
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.text::TextField  */ 
                        stack0 = this.$BgvisualDebugText;
//                        stack1 = local2;// JIT: redundant assigment, value unused
                        // 7 0::text
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.text = local2;
                        } else {
                            context.setproperty($names[8], local2, stack0);
                        }
                    case 99:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/com/poki/PokiFlashSDK/m_consoleError.js
})