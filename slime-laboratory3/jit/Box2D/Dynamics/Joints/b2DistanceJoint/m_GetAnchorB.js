(function anonymous(context
) {
/*
	Index: 1309
	Path:  Box2D/Dynamics/Joints/b2DistanceJoint::m_GetAnchorB
	Type:  Public
	Kind:  Method
	Super: Box2D/Dynamics/Joints/b2Joint
	Return: 7 0:Box2D.Common.Math::b2Vec2
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_GetAnchorB() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bgm_bodyB;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::m_localAnchor2
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
        stack1 = this.$Bgm_localAnchor2;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.GetWorldPoint(stack1);
        } else {
            // 7 0::GetWorldPoint
            {
                let t = stack0;
                const m = t.$BgGetWorldPoint || (t = sec.box(stack0), t.$BgGetWorldPoint);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgGetWorldPoint (stack1);
                } else { 
                    stack0 = stack0.axCallProperty($names[0], [stack1], false);
                }
            }
        }
        return stack0;
    }
//# sourceURL=http://jit/Box2D/Dynamics/Joints/b2DistanceJoint/m_GetAnchorB.js
})