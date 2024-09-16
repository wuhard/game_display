(function anonymous(context
) {
/*
	Index: 582
	Path:  Box2D/Common/Math/b2Math.IsPowerOfTwo
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_IsPowerOfTwo(local1 /* uint */) {
        // Possible use a real "this"
        /* Force uint coerce */
        local1 = (local1>>>0);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
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
                        // JIT: potential type:7 0::uint
                        stack0 = local1;
                        stack1 = 0;
                        stack0 = local1 > 0;
                        stack1 = stack0;
                        if (!stack1) { p = 19; continue; };
                        // JIT: potential type:7 0::uint
                        stack0 = local1;
                        // JIT: potential type:7 0::uint
                        stack1 = local1;
                        stack1--;
                        stack0 &= stack1;
                        stack1 = 0;
                        stack0 = stack0 == 0;
                    case 19:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local2 = stack0;
                        stack0 = local2;
                        return (!!local2);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/IsPowerOfTwo.js
})