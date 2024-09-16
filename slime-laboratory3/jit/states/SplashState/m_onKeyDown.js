(function anonymous(context
) {
/*
	Index: 1033
	Path:  states/SplashState::m_onKeyDown
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_onKeyDown(local1 /* KeyboardEvent */) {
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
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
                        // 7 0:flash.ui::Keyboard
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgKeyboard;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        // 7 0::BACK
                        //Possible type:7 0:flash.ui::Keyboard
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['BACK'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgBACK;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        //JIT: Emit inline return
                        if (stack1 != stack0) { return; }
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.preventDefault();
                        } else {
                            // 7 0::preventDefault
                            {
                                let t = local1;
                                const m = t.$BgpreventDefault || (t = sec.box(local1), t.$BgpreventDefault);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
                            local1.stopImmediatePropagation();
                        } else {
                            // 7 0::stopImmediatePropagation
                            {
                                let t = local1;
                                const m = t.$BgstopImmediatePropagation || (t = sec.box(local1), t.$BgstopImmediatePropagation);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   local1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
                        // 7 0::currentState
                        //Possible type:7 0:game_utils::StateMachineNew
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['currentState'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcurrentState;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack1 = "IS_EXIT_PANEL_STATE";
                        if ("IS_EXIT_PANEL_STATE" != stack0) { p = 65; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "END_ACTION";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction("END_ACTION");
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, "END_ACTION");
                                } else { 
                                   stack0.axCallProperty($names[6], ["END_ACTION"], false);
                                }
                            }
                        }
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[7], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[7]);
                        }
//                        stack1 = "back";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("back");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "back");
                                } else { 
                                   stack0.axCallProperty($names[8], ["back"], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 65:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::stateMachine
                        //Possible type:7 0::SoundSystem
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:game_utils::StateMachineNew  */ 
                        stack0 = this.$BgstateMachine;
//                        stack1 = "BACK_BUTTON_ACTION";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.performAction("BACK_BUTTON_ACTION");
                        } else {
                            // 7 0::performAction
                            {
                                let t = stack0;
                                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                                if( typeof m === "function" ) { 
                                    m.call(t, "BACK_BUTTON_ACTION");
                                } else { 
                                   stack0.axCallProperty($names[6], ["BACK_BUTTON_ACTION"], false);
                                }
                            }
                        }
                    case 76:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/SplashState/m_onKeyDown.js
})