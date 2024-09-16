(function anonymous(context
) {
/*
	Index: 603
	Path:  interfaces/VirtualDPad::m_deleteVirtualDPad
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_deleteVirtualDPad() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_BEGIN
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_BEGIN'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_BEGIN;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::stageTouchHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_MOVE
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_MOVE'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_MOVE;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::stageTouchHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[4]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootStage
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootStage'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootStage;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_END
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_END'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_END;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::stageTouchEndHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[8]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::jumpController
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgjumpController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_BEGIN
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_BEGIN'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_BEGIN;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::jumpTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[9]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::jumpController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgjumpController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_END
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_END'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_END;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::jumpTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[9]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::jumpController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgjumpController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_OUT
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_OUT'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_OUT;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[10]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::jumpTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[9]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::downController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgdownController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_BEGIN
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_BEGIN'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_BEGIN;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::downTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[11]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::downController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgdownController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_END
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_END'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_END;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::downTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[11]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::downController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgdownController;
        // 7 0:flash.events::TouchEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgTouchEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::TOUCH_OUT
        //Possible type:7 0:flash.events::TouchEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['TOUCH_OUT'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgTOUCH_OUT;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[10]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 2:interfaces::downTapHandler
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[11]);
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
                   stack0.axCallProperty($names[5], [stack1, stack2], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgcontrollerContainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::leftController
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BgleftController;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[12], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgcontrollerContainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::rightController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BgrightController;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[12], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgcontrollerContainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::jumpController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BgjumpController;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[12], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgcontrollerContainer;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::downController
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BgdownController;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[12], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::leftController
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BgleftController = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::rightController
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BgrightController = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::jumpController
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BgjumpController = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::downController
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BgdownController = null;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        // 7 0::rootMovie
        //Possible type:7 0::Utils
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['rootMovie'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgrootMovie;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[13]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack1 = this.$BgcontrollerContainer;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.removeChild(stack1);
        } else {
            // 7 0::removeChild
            {
                let t = stack0;
                const m = t.$BgremoveChild || (t = sec.box(stack0), t.$BgremoveChild);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[12], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 1:interfaces:VirtualDPad::controllerContainer
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BgcontrollerContainer = null;
        return;
    }
//# sourceURL=http://jit/interfaces/VirtualDPad/m_deleteVirtualDPad.js
})