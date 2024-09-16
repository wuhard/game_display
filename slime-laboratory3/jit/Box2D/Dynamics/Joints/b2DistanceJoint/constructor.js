(function anonymous(context
) {
/*
	Index: 1318
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::constructor
	Type:  Public
	Kind:  null
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* b2DistanceJointDef */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = null;// JIT: redundant assigment, value unused
        //JIT: SKIP_NULL_COERCE
        local2 = null;
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local3 = NaN;
//        stack0 = NaN;// JIT: redundant assigment, value unused
        local4 = NaN;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 3::m_localAnchor1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_localAnchor1 = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 3::m_localAnchor2
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_localAnchor2 = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 3::m_u
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_u = stack1;
        stack0 = this;
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        context.savedScope.superConstructor.call(this, local1);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_localAnchor1
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_localAnchor1;
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::localAnchorA
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['localAnchorA'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BglocalAnchorA;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[1]);
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
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 3::m_localAnchor2
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack0 = this.$Bgm_localAnchor2;
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::localAnchorB
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['localAnchorB'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BglocalAnchorB;
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
                   stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::length
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['length'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bglength;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 3::m_length
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_length = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::frequencyHz
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['frequencyHz'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgfrequencyHz;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[5]);
            }
        }
        // 7 3::m_frequencyHz
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_frequencyHz = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2DistanceJointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::dampingRatio
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['dampingRatio'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgdampingRatio;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
        // 7 3::m_dampingRatio
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_dampingRatio = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_impulse
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_impulse = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_gamma
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_gamma = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 3::m_bias
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgm_bias = 0;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/constructor.js
})