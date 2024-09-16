(function anonymous(context
) {
/*
	Index: 247
	Path:  Box2D/Common/Math/b2Vec2::m_MulM
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_MulM(local1 /* b2Mat22 */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack0 = this.$Bgx;
        stack0 = +stack0;
        local2 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::col1
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['col1'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgcol1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0::x
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['x'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgx;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
//        stack2 = local2;// JIT: redundant assigment, value unused
        stack1 *= local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgcol2;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::x
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgy;
        stack2 *= stack3;
        stack1 += stack2;
        // 7 0::x
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgx = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::col1
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['col1'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgcol1;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0::y
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['y'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bgy;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        stack2 = local2;// JIT: redundant assigment, value unused
        stack1 *= local2;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgcol2;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::y
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['y'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgy;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[3]);
            }
        }
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgy;
        stack2 *= stack3;
        stack1 += stack2;
        // 7 0::y
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgy = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_MulM.js
})