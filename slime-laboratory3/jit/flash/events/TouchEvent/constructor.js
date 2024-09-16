(function anonymous(context
) {
/*
	Index: 1
	Path:  flash/events/TouchEvent::constructor
	Type:  Public
	Kind:  null
	Super: flash/events/Event
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* String */, local2 /* Boolean */ = true, local3 /* Boolean */ = false, local4 /* int */ = 0, local5 /* Boolean */ = false, local6 /* Number */ = NaN, local7 /* Number */ = NaN, local8 /* Number */ = NaN, local9 /* Number */ = NaN, local10 /* Number */ = NaN, local11 /* InteractiveObject */ = null, local12 /* Boolean */ = false, local13 /* Boolean */ = false, local14 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force Boolean coerce */
        local2 = (!!local2);
        /* Force Boolean coerce */
        local3 = (!!local3);
        /* Force int coerce */
        local4 = (local4|0);
        /* Force Boolean coerce */
        local5 = (!!local5);
        /* Force Number coerce */
        local6 = (+local6);
        /* Force Number coerce */
        local7 = (+local7);
        /* Force Number coerce */
        local8 = (+local8);
        /* Force Number coerce */
        local9 = (+local9);
        /* Force Number coerce */
        local10 = (+local10);
        /* Force Boolean coerce */
        local12 = (!!local12);
        /* Force Boolean coerce */
        local13 = (!!local13);
        /* Force Boolean coerce */
        local14 = (!!local14);

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
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::touchPointID
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgtouchPointID = local4;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local5;
        // 7 0::isPrimaryTouchPoint
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgisPrimaryTouchPoint = local5;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local6;
        // 7 0::localX
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BglocalX = local6;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local7;
        // 7 0::localY
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BglocalY = local7;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local8;
        // 7 0::sizeX
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgsizeX = local8;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local9;
        // 7 0::sizeY
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgsizeY = local9;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local10;
        // 7 0::pressure
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$Bgpressure = local10;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:flash.display::InteractiveObject// JIT: redundant assigment, value unused
        stack1 = local11;
        // 7 0::relatedObject
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgrelatedObject = local11;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local12;
        // 7 0::ctrlKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgctrlKey = local12;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local13;
        // 7 0::altKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgaltKey = local13;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local14;
        // 7 0::shiftKey
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgshiftKey = local14;
        return;
    }
//# sourceURL=http://jit/flash/events/TouchEvent/constructor.js
})