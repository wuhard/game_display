(function anonymous(context
) {
/*
	Index: 242
	Path:  Box2D/Common/Math/b2Vec2::m_NegativeSelf
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_NegativeSelf() {
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
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgx;
        stack1 = -stack1;
        // 7 0::x
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgx = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgy;
        stack1 = -stack1;
        // 7 0::y
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgy = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_NegativeSelf.js
})