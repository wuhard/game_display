(function anonymous(context
) {
/*
	Index: 979
	Path:  states/LevelState::m_pauseKeyDownListener
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_pauseKeyDownListener(local1 /* KeyboardEvent */) {
        // Possible use a real "this"
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
                        { p = 55; continue; };
                    case 6:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelStaying
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelStaying = false;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::pausePanelExiting
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgpausePanelExiting = true;
                        // 7 0::SoundSystem
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgSoundSystem;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = "select";// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.PlaySound("select");
                        } else {
                            // 7 0::PlaySound
                            {
                                let t = stack0;
                                const m = t.$BgPlaySound || (t = sec.box(stack0), t.$BgPlaySound);
                                if( typeof m === "function" ) { 
                                    m.call(t, "select");
                                } else { 
                                   stack0.axCallProperty($names[1], ["select"], false);
                                }
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::rootStage
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['rootStage'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgrootStage;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        // 7 0:flash.events::KeyboardEvent
                        temp = scope0.findScopeProperty($names[4], true, false);
                        stack1 = temp.$BgKeyboardEvent;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[4]);
                        }
                        // 7 0::KEY_DOWN
                        //Possible type:7 0:flash.events::KeyboardEvent
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['KEY_DOWN'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgKEY_DOWN;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::pauseKeyDownListener
                        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
                        stack2 = this.axGetProperty($names[6]);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.removeEventListener(stack1, stack2);
                        } else {
                            // 7 0::removeEventListener
                            {
                                let t = stack0;
                                const m = t.$BgremoveEventListener || (t = sec.box(stack0), t.$BgremoveEventListener);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2);
                                } else { 
                                   stack0.axCallProperty($names[7], [stack1, stack2], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 50:
                        //JIT: Emit inline return
                        return;
                    case 55:
//                        // JIT: potential type:7 0:flash.events::KeyboardEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::keyCode
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['keyCode'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgkeyCode;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        local2 = stack0;
                        stack0 = 32;
                        stack1 = local2;
                        if (local2 !== 32) { p = 73; continue; };
                        stack0 = 0;
                        { p = 124; continue; };
                    case 73:
                        stack0 = 80;
                        stack1 = local2;
                        if (local2 !== 80) { p = 86; continue; };
                        stack0 = 1;
                        { p = 124; continue; };
                    case 86:
                        stack0 = 112;
                        stack1 = local2;
                        if (local2 !== 112) { p = 99; continue; };
                        stack0 = 2;
                        { p = 124; continue; };
                    case 99:
                        stack0 = 27;
                        stack1 = local2;
                        if (local2 !== 27) { p = 112; continue; };
                        stack0 = 3;
                        { p = 124; continue; };
                    case 112:
                        { p = 122; continue; };
                        // unreachable
                        // unreachable
                    case 122:
                        stack0 = 4;
                    case 124:
                        //IR: KILL removed, reason: prevent optimisation
                        if (stack0 >= 0 && stack0 < 5) { p = [6, 6, 6, 6, 50][stack0]; continue; } else { p = 50; continue; };
                    case 146:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/states/LevelState/m_pauseKeyDownListener.js
})