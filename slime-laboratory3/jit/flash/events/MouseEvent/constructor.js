(function anonymous(context
) {
/*
	Index: 1
	Path:  flash/events/MouseEvent::constructor
	Type:  Public
	Kind:  null
	Super: flash/events/Event
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* String */, local2 /* Boolean */ = true, local3 /* Boolean */ = false, local4 /* Number */ = undefined, local5 /* Number */ = undefined, local6 /* InteractiveObject */ = null, local7 /* Boolean */ = false, local8 /* Boolean */ = false, local9 /* Boolean */ = false, local10 /* Boolean */ = false, local11 /* int */ = 0) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force Boolean coerce */
        local2 = (!!local2);
        /* Force Boolean coerce */
        local3 = (!!local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Boolean coerce */
        local7 = (!!local7);
        /* Force Boolean coerce */
        local8 = (!!local8);
        /* Force Boolean coerce */
        local9 = (!!local9);
        /* Force Boolean coerce */
        local10 = (!!local10);
        /* Force int coerce */
        local11 = (local11|0);

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
        stack0 = this;
//        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack3 = local3;
        context.savedScope.superConstructor.call(this, local1, local2, local3);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::localX
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BglocalX = local4;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local5;
        // 7 0::localY
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BglocalY = local5;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:flash.display::InteractiveObject// JIT: redundant assigment, value unused
        stack1 = local6;
        // 7 0::relatedObject
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgrelatedObject = local6;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local7;
        // 7 0::ctrlKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgctrlKey = local7;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local8;
        // 7 0::altKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgaltKey = local8;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local9;
        // 7 0::shiftKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgshiftKey = local9;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local10;
        // 7 0::buttonDown
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgbuttonDown = local10;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local11;
        // 7 0::delta
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$Bgdelta = local11;
        return;
    }
//# sourceURL=http://jit/flash/events/MouseEvent/constructor.js
})