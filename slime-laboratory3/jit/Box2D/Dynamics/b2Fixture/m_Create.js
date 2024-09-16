(function anonymous(context
) {
/*
	Index: 229
	Path:  Box2D/Dynamics/b2Fixture::m_Create
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Create(local1 /* b2Body */, local2 /* b2Transform */, local3 /* b2FixtureDef */) {
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
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::userData
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['userData'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$BguserData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$Bgm_userData = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::friction
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['friction'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgfriction;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_friction
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_friction = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::restitution
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['restitution'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgrestitution;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[2]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_restitution
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_restitution = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2Body// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0:http://www.box2d.org/ns/b2internal::m_body
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_body = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_next
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Fixture  */ 
        this.$Bgm_next = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::filter
        //Possible type:undefined
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['filter'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgfilter;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.Copy();
        } else {
            // 7 0::Copy
            {
                let t = stack1;
                const m = t.$BgCopy || (t = sec.box(stack1), t.$BgCopy);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgCopy ();
                } else { 
                    stack1 = stack1.axCallProperty($names[4], [], false);
                }
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_filter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2FilterData  */ 
        this.$Bgm_filter = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::isSensor
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['isSensor'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$BgisSensor;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_isSensor
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgm_isSensor = (!!stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::shape
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['shape'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgshape;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.Copy();
        } else {
            // 7 0::Copy
            {
                let t = stack1;
                const m = t.$BgCopy || (t = sec.box(stack1), t.$BgCopy);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgCopy ();
                } else { 
                    stack1 = stack1.axCallProperty($names[4], [], false);
                }
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_shape
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Collision.Shapes::b2Shape  */ 
        this.$Bgm_shape = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics::b2FixtureDef// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::density
        if (!(local3 != undefined && local3[AX_CLASS_SYMBOL])) {
            stack1 = local3['density'];
        } else {
            temp = local3[AX_CLASS_SYMBOL] ? local3 : sec.box(local3);
            stack1 = temp.$Bgdensity;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_density
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_density = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Fixture/m_Create.js
})