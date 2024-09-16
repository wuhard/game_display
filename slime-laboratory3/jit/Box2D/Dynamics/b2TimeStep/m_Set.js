(function anonymous(context
) {
/*
	Index: 311
	Path:  Box2D/Dynamics/b2TimeStep::m_Set
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Set(local1 /* b2TimeStep */) {
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
//        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::dt
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['dt'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgdt;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0::dt
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgdt = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::inv_dt
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['inv_dt'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bginv_dt;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0::inv_dt
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bginv_dt = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::positionIterations
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['positionIterations'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgpositionIterations;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0::positionIterations
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgpositionIterations = (stack1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::velocityIterations
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['velocityIterations'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgvelocityIterations;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::velocityIterations
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgvelocityIterations = (stack1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2TimeStep// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::warmStarting
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['warmStarting'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgwarmStarting;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0::warmStarting
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgwarmStarting = (!!stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2TimeStep/m_Set.js
})