(function anonymous(context
) {
/*
	Index: 273
	Path:  Box2D/Dynamics/Joints/b2Joint::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* b2JointDef */) {
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
        // 7 0:Box2D.Dynamics.Joints::b2JointEdge
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2JointEdge/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeA
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2JointEdge  */ 
        this.$Bgm_edgeA = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Dynamics.Joints::b2JointEdge
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2JointEdge/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_edgeB
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2JointEdge  */ 
        this.$Bgm_edgeB = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_localCenterA
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_localCenterA = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[1], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[1]);
        // 7 0:http://www.box2d.org/ns/b2internal::m_localCenterB
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$Bgm_localCenterB = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
        // 7 0:Box2D.Common::b2Settings
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$Bgb2Settings;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::bodyA
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['bodyA'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgbodyA;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack2 = local1;
        // 7 0::bodyB
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack2 = local1['bodyB'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack2 = temp.$BgbodyB;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[4]);
            }
        }
        stack1 = stack1 == stack2;
        stack1 = !stack1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.b2Assert(stack1);
        } else {
            // 7 0::b2Assert
            {
                let t = stack0;
                const m = t.$Bgb2Assert || (t = sec.box(stack0), t.$Bgb2Assert);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[5], [stack1], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::type
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['type'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgtype;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[6]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_type
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgm_type = (stack1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_prev
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
        this.$Bgm_prev = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_next
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics.Joints::b2Joint  */ 
        this.$Bgm_next = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::bodyA
        //Possible type:undefined
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['bodyA'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgbodyA;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyA
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_bodyA = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::bodyB
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['bodyB'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgbodyB;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[4]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_bodyB
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Dynamics::b2Body  */ 
        this.$Bgm_bodyB = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::collideConnected
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['collideConnected'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BgcollideConnected;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[7]);
            }
        }
        // 7 0:http://www.box2d.org/ns/b2internal::m_collideConnected
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgm_collideConnected = (!!stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0:http://www.box2d.org/ns/b2internal::m_islandFlag
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgm_islandFlag = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Dynamics.Joints::b2JointDef// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::userData
        //Possible type:undefined
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['userData'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$BguserData;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[8]);
            }
        }
        // 7 3::m_userData
        /* We sure that this safe set, represented in TRAIT as Slot, with type: null  */ 
        this.$Bgm_userData = stack1;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2Joint/constructor.js
})