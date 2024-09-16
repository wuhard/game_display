(function anonymous(context
) {
/*
	Index: 600
	Path:  interfaces/VirtualDPad::m_stageTouchEndHandler
	Type:  PackageInternal
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_stageTouchEndHandler(local1 /* TouchEvent */) {
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
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::PauseOn
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['PauseOn'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgPauseOn;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        if (!stack0) { p = 13; continue; };
                        return;
                    case 13:
//                        // JIT: potential type:7 0:flash.events::TouchEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::stageX
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['stageX'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$BgstageX;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::GFX_INV_SCALE
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['GFX_INV_SCALE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgGFX_INV_SCALE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack0 *= stack1;
                        stack0 |= 0;
                        local2 = stack0;
                        stack0 = local2;
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack1 = temp.$BgUtils;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::WIDTH
                        //Possible type:7 0::Utils
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['WIDTH'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgWIDTH;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack2 = 0.5;// JIT: redundant assigment, value unused
                        stack1 *= 0.5;
                        if (!(stack1 > local2)) { p = 80; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.leftUp();
                        } else {
                            // 7 0::leftUp
                            {
                                let t = stack0;
                                const m = t.$BgleftUp || (t = sec.box(stack0), t.$BgleftUp);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rightUp();
                        } else {
                            // 7 0::rightUp
                            {
                                let t = stack0;
                                const m = t.$BgrightUp || (t = sec.box(stack0), t.$BgrightUp);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [1], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 80:
//                        // JIT: potential type:7 0:flash.events::TouchEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        //Possible type:7 0:flash.display::MovieClip
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::JumpControllerButton
                        temp = scope0.findScopeProperty($names[9], true, false);
                        stack1 = temp.$BgJumpControllerButton;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[9]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        stack1 = stack0;
                        if (stack1) { p = 102; continue; };
//                        // JIT: potential type:7 0:flash.events::TouchEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0:flash.display::SimpleButton
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgSimpleButton;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 102:
                        stack1 = stack0;
                        if (stack1) { p = 116; continue; };
//                        // JIT: potential type:7 0:flash.events::TouchEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::JumpControllerIPadButton
                        temp = scope0.findScopeProperty($names[11], true, false);
                        stack1 = temp.$BgJumpControllerIPadButton;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[11]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 116:
                        stack1 = stack0;
                        if (stack1) { p = 130; continue; };
//                        // JIT: potential type:7 0:flash.events::TouchEvent// JIT: redundant assigment, value unused
                        stack0 = local1;
                        // 7 0::target
                        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
                            stack0 = local1['target'];
                        } else {
                            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
                            stack0 = temp.$Bgtarget;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::DownControllerButton
                        temp = scope0.findScopeProperty($names[12], true, false);
                        stack1 = temp.$BgDownControllerButton;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[12]);
                        }
                        stack0 = stack1.axIsType(stack0);
                    case 130:
                        if (!stack0) { p = 138; continue; };
                        //JIT: Emit inline return
                        return;
                    case 138:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.leftUp();
                        } else {
                            // 7 0::leftUp
                            {
                                let t = stack0;
                                const m = t.$BgleftUp || (t = sec.box(stack0), t.$BgleftUp);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[5], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::level
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.rightUp();
                        } else {
                            // 7 0::rightUp
                            {
                                let t = stack0;
                                const m = t.$BgrightUp || (t = sec.box(stack0), t.$BgrightUp);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[6], [], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::leftController
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgleftController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:interfaces:VirtualDPad::rightController
                        //Possible type:7 0:flash.display::MovieClip
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
                        stack0 = this.$BgrightController;
//                        stack1 = 1;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.gotoAndStop(1);
                        } else {
                            // 7 0::gotoAndStop
                            {
                                let t = stack0;
                                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                                if( typeof m === "function" ) { 
                                    m.call(t, 1);
                                } else { 
                                   stack0.axCallProperty($names[7], [1], false);
                                }
                            }
                        }
                    case 174:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/VirtualDPad/m_stageTouchEndHandler.js
})