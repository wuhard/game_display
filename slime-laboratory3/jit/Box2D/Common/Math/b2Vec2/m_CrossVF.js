(function anonymous(context
) {
/*
	Index: 249
	Path:  Box2D/Common/Math/b2Vec2::m_CrossVF
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_CrossVF(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
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
        stack0 = +stack0;
        local2 = stack0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // JIT: potential type:7 0::Number
        stack1 = local1;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgy;
        stack1 *= stack2;
        // 7 0::x
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgx = (+stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
        // JIT: potential type:7 0::Number
        stack1 = local1;
        stack1 = -local1;
//        stack2 = local2;// JIT: redundant assigment, value unused
        stack1 *= local2;
        // 7 0::y
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgy = (+stack1);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_CrossVF.js
})