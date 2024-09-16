(function anonymous(context
) {
/*
	Index: 1550
	Path:  Box2D/Dynamics/Joints/b2DistanceJointDef::constructor
	Type:  Public
	Kind:  null
	Super: Box2D/Dynamics/Joints/b2JointDef
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0::localAnchorA
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$BglocalAnchorA = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[0], true, false);
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [], $names[0]);
        // 7 0::localAnchorB
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        this.$BglocalAnchorB = stack1;
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
        // 7 0::type
        stack0 = scope0.findScopeProperty($names[1], false, false);
        // 7 0:Box2D.Dynamics.Joints::b2Joint
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$Bgb2Joint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0:http://www.box2d.org/ns/b2internal::e_distanceJoint
        //Possible type:7 0:Box2D.Dynamics.Joints::b2Joint
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['e_distanceJoint'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$Bge_distanceJoint;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        // 7 0::type
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.type = stack1;
        } else {
            context.setproperty($names[1], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::length
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bglength = 1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::frequencyHz
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgfrequencyHz = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::dampingRatio
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgdampingRatio = 0;
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJointDef/constructor.js
})