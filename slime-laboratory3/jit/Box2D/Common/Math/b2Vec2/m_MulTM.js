(function anonymous(context
) {
/*
	Index: 248
	Path:  Box2D/Common/Math/b2Vec2::m_MulTM
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_MulTM(local1 /* b2Mat22 */) {
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

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$Bgb2Math;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::col1
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['col1'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$Bgcol1;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.Dot(this, stack2);
        } else {
            // 7 0::Dot
            {
                let t = stack0;
                const m = t.$BgDot || (t = sec.box(stack0), t.$BgDot);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgDot (this, stack2);
                } else { 
                    stack0 = stack0.axCallProperty($names[2], [this, stack2], false);
                }
            }
        }
        stack0 = +stack0;
        local2 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Math
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgb2Math;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
//        stack2 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
        stack3 = local1;
        // 7 0::col2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack3 = local1['col2'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack3 = temp.$Bgcol2;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[3]);
            }
        }
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.Dot(this, stack3);
        } else {
            // 7 0::Dot
            {
                let t = stack1;
                const m = t.$BgDot || (t = sec.box(stack1), t.$BgDot);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgDot (this, stack3);
                } else { 
                    stack1 = stack1.axCallProperty($names[2], [this, stack3], false);
                }
            }
        }
        // 7 0::y
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgy = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = local2;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgx = (+local2);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_MulTM.js
})