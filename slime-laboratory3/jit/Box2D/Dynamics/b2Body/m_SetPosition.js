(function anonymous(context
) {
/*
	Index: 323
	Path:  Box2D/Dynamics/b2Body::m_SetPosition
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetPosition(local1 /* b2Vec2 */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
        stack1 = local1;
//        stack2 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack2 = this.$BgGetAngle();
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgSetPositionAndAngle(local1, stack2);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetPosition.js
})