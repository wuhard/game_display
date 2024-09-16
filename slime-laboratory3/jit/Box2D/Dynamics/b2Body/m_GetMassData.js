(function anonymous(context
) {
/*
	Index: 340
	Path:  Box2D/Dynamics/b2Body::m_GetMassData
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetMassData(local1 /* b2MassData */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_mass
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_mass;
        // 7 0::mass
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.mass = stack1;
        } else {
            context.setproperty($names[0], stack1, local1);
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_I
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgm_I;
        // 7 0::I
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])){
            local1.I = stack1;
        } else {
            context.setproperty($names[1], stack1, local1);
        }
//        // JIT: potential type:7 0:Box2D.Collision.Shapes::b2MassData// JIT: redundant assigment, value unused
        stack0 = local1;
        // 7 0::center
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack0 = local1['center'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack0 = temp.$Bgcenter;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[2]);
            }
        }
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_sweep
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Sweep  */ 
        stack1 = this.$Bgm_sweep;
        // 7 0::localCenter
        //Possible type:7 0:Box2D.Common.Math::b2Sweep
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['localCenter'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BglocalCenter;
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
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_GetMassData.js
})