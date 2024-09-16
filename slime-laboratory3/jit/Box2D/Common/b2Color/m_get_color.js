(function anonymous(context
) {
/*
	Index: 463
	Path:  Box2D/Common/b2Color::m_get_color
	Type:  Public
	Kind:  Getter
	Super: Object
	Return: 7 0::uint
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_get_color() {
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
        // 7 3::_r
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack0 = this.$Bg_r;
        stack1 = 16;
        stack0 <<= 16;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::_g
        //Possible type:undefined
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bg_g;
        stack2 = 8;
        stack1 <<= 8;
        stack0 |= stack1;
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 3::_b
        //Possible type:7 0::uint
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::uint  */ 
        stack1 = this.$Bg_b;
        stack0 |= stack1;
        return (stack0>>>0);
    }
//# sourceURL=http://jit/Box2D/Common/b2Color/m_get_color.js
})