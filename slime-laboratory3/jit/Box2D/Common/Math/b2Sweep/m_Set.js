(function anonymous(context
) {
/*
	Index: 299
	Path:  Box2D/Common/Math/b2Sweep::m_Set
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Set(local1 /* b2Sweep */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::localCenter
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$BglocalCenter;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::localCenter
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['localCenter'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BglocalCenter;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[1], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::c0
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgc0;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::c0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['c0'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgc0;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[1], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::c
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgc;
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::c
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['c'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgc;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.SetV(stack1);
        } else {
            // 7 0::SetV
            {
                let t = stack0;
                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[1], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::a0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['a0'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bga0;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::a0
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bga0 = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::a
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['a'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bga;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0::a
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bga = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Sweep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::t0
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['t0'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgt0;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
        // 7 0::t0
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgt0 = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Sweep/m_Set.js
})