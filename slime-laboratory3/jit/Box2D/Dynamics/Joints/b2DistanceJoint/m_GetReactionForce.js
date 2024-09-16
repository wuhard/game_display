(function anonymous(context
) {
/*
	Index: 1310
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_GetReactionForce
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetReactionForce(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

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
        // 7 0:Box2D.Common.Math::b2Vec2
        stack0 = scope0.findScopeProperty($names[0], true, false);
        // JIT: potential type:7 0::Number
        stack1 = local1;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 3::m_impulse
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgm_impulse;
        stack1 *= stack2;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 3::m_u
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack2 = this.$Bgm_u;
        // 7 0::x
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
            stack2 = stack2['x'];
        } else {
            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
            stack2 = temp.$Bgx;
            if (stack2 === undefined || typeof stack2 === 'function') {
                stack2 = temp.axGetProperty($names[1]);
            }
        }
        stack1 *= stack2;
        // JIT: potential type:7 0::Number
        stack2 = local1;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 3::m_impulse
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgm_impulse;
        stack2 *= stack3;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 3::m_u
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack3 = this.$Bgm_u;
        // 7 0::y
        //Possible type:7 0:Box2D.Common.Math::b2Vec2
        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
            stack3 = stack3['y'];
        } else {
            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
            stack3 = temp.$Bgy;
            if (stack3 === undefined || typeof stack3 === 'function') {
                stack3 = temp.axGetProperty($names[2]);
            }
        }
        stack2 *= stack3;
        //JIT: Support fast construct:b2Vec2/Object
        stack0 = context.constructFast(stack0, [stack1, stack2], $names[0]);
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_GetReactionForce.js
})