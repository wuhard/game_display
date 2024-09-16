(function anonymous(context
) {
/*
	Index: 578
	Path:  Box2D/Common/Math/b2Math.Swap
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_Swap(local1 /* Array */, local2 /* Array */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        // JIT: potential type:7 0::Array
        stack0 = local1;
        stack1 = 0;
        // 27 {3, 0, 0:Box2D.Common.Math, 3, 2:Box2D.Common.Math, 0:http://adobe.com/AS3/2006/builtin, 1:Box2D.Common.Math:b2Math, 5:Box2D.Common.Math:b2Math}::*
        {
            let simple = 0;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[0], 0);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        
        local3 = stack0;
        // JIT: potential type:7 0::Array
        stack0 = local1;
        stack1 = 0;
        // JIT: potential type:7 0::Array
        stack2 = local2;
        stack3 = 0;
        // 27 {3, 0, 0:Box2D.Common.Math, 3, 2:Box2D.Common.Math, 0:http://adobe.com/AS3/2006/builtin, 1:Box2D.Common.Math:b2Math, 5:Box2D.Common.Math:b2Math}::*
        {
            let simple = 0;
            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

            if (typeof simple === "number") {
                stack2 = b_obj.axGetNumericProperty(simple);
            } else {
                stack2 = b_obj['$Bg' + simple];
                if (stack2 === undefined || typeof stack2 === 'function') {
                    const rm = context.runtimename($names[0], 0);
                    stack2 = b_obj.axGetProperty(rm);
                }
            }
        }
        context.setproperty(context.runtimename($names[0], 0), stack2, local1);
        // JIT: potential type:7 0::Array
        stack0 = local2;
        stack1 = 0;
        stack2 = local3;
        context.setproperty(context.runtimename($names[0], 0), local3, local2);
        return;
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/Swap.js
})