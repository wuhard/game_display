(function anonymous(context
) {
/*
	Index: 2979
	Path:  slime_laboratory3_fla/DragElement_15::m_frame1
	Type:  PackageInternal
	Kind:  Method
	Super: flash/display/MovieClip
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_frame1() {
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
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::drag
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgdrag;
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::MOUSE_DOWN
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['MOUSE_DOWN'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgMOUSE_DOWN;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::downDrag
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[2]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.addEventListener(stack1, stack2);
        } else {
            // 7 0::addEventListener
            {
                let t = stack0;
                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Getter  */ 
        stack0 = this.$Bgstage;
        // 7 0:flash.events::MouseEvent
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$BgMouseEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        // 7 0::MOUSE_UP
        //Possible type:7 0:flash.events::MouseEvent
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['MOUSE_UP'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgMOUSE_UP;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::upDrag
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[5]);
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.addEventListener(stack1, stack2);
        } else {
            // 7 0::addEventListener
            {
                let t = stack0;
                const m = t.$BgaddEventListener || (t = sec.box(stack0), t.$BgaddEventListener);
                if( typeof m === "function" ) { 
                    m.call(t, stack1, stack2);
                } else { 
                   stack0.axCallProperty($names[3], [stack1, stack2], false);
                }
            }
        }
        // 7 0::addEventListener
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.events::Event
        temp = scope0.findScopeProperty($names[6], true, false);
        stack1 = temp.$BgEvent;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[6]);
        }
        // 7 0::ENTER_FRAME
        //Possible type:7 0:flash.events::Event
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['ENTER_FRAME'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgENTER_FRAME;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::update
        /* We sure that this safe get, represented in TRAIT as Method, type: undefined  */ 
        stack2 = this.axGetProperty($names[8]);
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgaddEventListener(stack1, stack2);
        return;
    }
//# sourceURL=http://jit/slime_laboratory3_fla/DragElement_15/m_frame1.js
})