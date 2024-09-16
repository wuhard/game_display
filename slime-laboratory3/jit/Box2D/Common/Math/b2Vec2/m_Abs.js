(function anonymous(context
) {
/*
	Index: 253
	Path:  Box2D/Common/Math/b2Vec2::m_Abs
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_Abs() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgx;
                        stack1 = 0;
                        if (!(0 > stack0)) { p = 21; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgx;
                        stack1 = -stack1;
                        // 7 0::x
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgx = (+stack1);
                    case 21:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack0 = this.$Bgy;
                        stack1 = 0;
                        //JIT: Emit inline return
                        if (!(0 > stack0)) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgy;
                        stack1 = -stack1;
                        // 7 0::y
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgy = (+stack1);
                    case 40:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_Abs.js
})