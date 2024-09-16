(function anonymous(context
) {
/*
	Index: 325
	Path:  Box2D/Dynamics/b2Body::m_SetAngle
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetAngle(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

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
//        stack1 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        stack1 = this.$BgGetPosition();
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local1;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgSetPositionAndAngle(stack1, local1);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetAngle.js
})