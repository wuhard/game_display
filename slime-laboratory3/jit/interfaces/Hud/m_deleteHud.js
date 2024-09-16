(function anonymous(context
) {
/*
	Index: 657
	Path:  interfaces/Hud::m_deleteHud
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_deleteHud() {
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
        // 7 0:flash.events::KeyboardEvent
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgKeyboardEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::KEY_UP
        //Possible type:7 0:flash.events::KeyboardEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['KEY_UP'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgKEY_UP;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 1:interfaces:Hud::keyUpHudListener
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
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::hudSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
        stack0 = this.$BghudSprite;
        // 7 0::checkpointButton
        //Possible type:7 0::HudSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['checkpointButton'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgcheckpointButton;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[6]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[7], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[7]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[8]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::checkpointButtonHandler
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
        // 7 0::hudSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
        stack0 = this.$BghudSprite;
        // 7 0::skipLevelButton
        //Possible type:7 0::HudSprite
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['skipLevelButton'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgskipLevelButton;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[10]);
            }
        }
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[7], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[7]);
        }
        // 7 0::CLICK
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['CLICK'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgCLICK;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[8]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::checkpointButtonHandler
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
                stack0 = temp.axGetProperty($names[11]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::hudSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::HudSprite  */ 
        stack1 = this.$BghudSprite;
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
        // 7 0::hudSprite
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::HudSprite  */ 
        this.$BghudSprite = null;
        return;
    }
//# sourceURL=http://jit/interfaces/Hud/m_deleteHud.js
})