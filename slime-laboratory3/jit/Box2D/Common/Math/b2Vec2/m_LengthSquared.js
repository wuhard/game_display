(function anonymous(context
) {
/*
	Index: 255
	Path:  Box2D/Common/Math/b2Vec2::m_LengthSquared
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_LengthSquared() {
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
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack0 = this.$Bgx;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgx;
        stack0 *= stack1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgy;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgy;
        stack1 *= stack2;
        stack0 += stack1;
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_LengthSquared.js
})