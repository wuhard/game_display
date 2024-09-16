(function anonymous(context
) {
/*
	Index: 1109
	Path:  entities/Hero.calculate_catmull
	Type:  StaticProtected
	Kind:  Method
	Super: -
	Return: 7 0::Array
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_calculate_catmull(local1 /* Number */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        // local11 is assigned before read, skip init
        let local11 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // JIT: potential type:7 0::Number
        stack0 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
        stack0 = +stack0;
        stack1 = stack0;
        local6 = stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        stack0 *= local1;
        stack0 = +stack0;
        local7 = stack0;
        stack0 = 0.5;
        stack1 = 2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local3;
        stack1 *= local3;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local4;
        stack2 += local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local1;
        stack2 *= local1;
        stack1 += stack2;
        stack2 = 2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local2;
        stack2 *= local2;
        stack3 = 5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
        stack3 *= local3;
        stack2 -= stack3;
        stack3 = 4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        stack3 *= local4;
        stack2 += stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local5;
        stack2 -= local5;
//        stack3 = local6;// JIT: redundant assigment, value unused
        stack2 *= local6;
        stack1 += stack2;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
        stack3 *= local3;
        stack2 += stack3;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        stack3 *= local4;
        stack2 -= stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local5;
        stack2 += local5;
//        stack3 = local7;// JIT: redundant assigment, value unused
        stack2 *= local7;
        stack1 += stack2;
        stack0 *= stack1;
        stack0 = +stack0;
        local8 = stack0;
        stack0 = 0.5;
        // JIT: potential type:7 0::Number
        stack1 = local2;
        stack1 = -local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local4;
        stack1 += local4;
        stack0 *= stack1;
        // JIT: potential type:7 0::Number
        stack1 = local1;
        stack2 = 2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local2;
        stack2 *= local2;
        stack3 = 5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
        stack3 *= local3;
        stack2 -= stack3;
        stack3 = 4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        stack3 *= local4;
        stack2 += stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local5;
        stack2 -= local5;
        stack1 *= stack2;
        stack0 += stack1;
        stack1 = local6;
//        stack2 = 1.5;// JIT: redundant assigment, value unused
        stack1 *= 1.5;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
        stack3 *= local3;
        stack2 += stack3;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        stack3 *= local4;
        stack2 -= stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local5;
        stack2 += local5;
        stack1 *= stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local9 = stack0;
        stack0 = 2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        stack0 *= local2;
        stack1 = 5;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local3;
        stack1 *= local3;
        stack0 -= stack1;
        stack1 = 4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local4;
        stack1 *= local4;
        stack0 += stack1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local5;
        stack0 -= local5;
        // JIT: potential type:7 0::Number
        stack1 = local1;
//        stack2 = 3;// JIT: redundant assigment, value unused
        stack1 *= 3;
        // JIT: potential type:7 0::Number
        stack2 = local2;
        stack2 = -local2;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local3;
        stack3 *= local3;
        stack2 += stack3;
        stack3 = 3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
        stack3 *= local4;
        stack2 -= stack3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local5;
        stack2 += local5;
        stack1 *= stack2;
        stack0 += stack1;
        stack0 = +stack0;
        local10 = stack0;
        // 7 0::Array
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        stack1 = local8;// JIT: redundant assigment, value unused
//        stack2 = local9;// JIT: redundant assigment, value unused
//        stack3 = local10;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:Array/Object
        stack0 = context.constructFast(stack0, [local8, local9, local10], $names[0]);
        //IR: Drop coerce, reason: redundant
        stack1 = stack0;
        local11 = stack1;
        return stack0;
    }
//# sourceURL=http://jit/entities/Hero/calculate_catmull.js
})