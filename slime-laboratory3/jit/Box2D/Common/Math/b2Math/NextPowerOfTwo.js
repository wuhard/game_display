(function anonymous(context
) {
/*
	Index: 581
	Path:  Box2D/Common/Math/b2Math.NextPowerOfTwo
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::uint
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_NextPowerOfTwo(local1 /* uint */) {
        // Possible use a real "this"
        /* Force uint coerce */
        local1 = (local1>>>0);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        // JIT: potential type:7 0::uint
        stack0 = local1;
        // JIT: potential type:7 0::uint
        stack1 = local1;
        stack2 = 1;
        stack1 >>= 1;
        stack2 = 2147483647;
        stack1 &= 2147483647;
        stack0 |= stack1;
        stack0 >>>= 0;
        local1 = stack0;
        // JIT: potential type:7 0::uint
        stack0 = local1;
        // JIT: potential type:7 0::uint
        stack1 = local1;
        stack2 = 2;
        stack1 >>= 2;
        stack2 = 1073741823;
        stack1 &= 1073741823;
        stack0 |= stack1;
        stack0 >>>= 0;
        local1 = stack0;
        // JIT: potential type:7 0::uint
        stack0 = local1;
        // JIT: potential type:7 0::uint
        stack1 = local1;
        stack2 = 4;
        stack1 >>= 4;
        stack2 = 268435455;
        stack1 &= 268435455;
        stack0 |= stack1;
        stack0 >>>= 0;
        local1 = stack0;
        // JIT: potential type:7 0::uint
        stack0 = local1;
        // JIT: potential type:7 0::uint
        stack1 = local1;
        stack2 = 8;
        stack1 >>= 8;
        stack2 = 16777215;
        stack1 &= 16777215;
        stack0 |= stack1;
        stack0 >>>= 0;
        local1 = stack0;
        // JIT: potential type:7 0::uint
        stack0 = local1;
        // JIT: potential type:7 0::uint
        stack1 = local1;
        stack2 = 16;
        stack1 >>= 16;
        stack2 = 65535;
        stack1 &= 65535;
        stack0 |= stack1;
        stack0 >>>= 0;
        local1 = stack0;
        // JIT: potential type:7 0::uint
        stack0 = local1;
//        stack1 = 1;// JIT: redundant assigment, value unused
        stack0 += 1;
        return (stack0>>>0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/NextPowerOfTwo.js
})