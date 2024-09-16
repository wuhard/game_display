(function anonymous(context
) {
/*
	Index: 1
	Path:  flash/events/KeyboardEvent::constructor
	Type:  Public
	Kind:  null
	Super: flash/events/Event
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* String */, local2 /* Boolean */ = true, local3 /* Boolean */ = false, local4 /* uint */ = 0, local5 /* uint */ = 0, local6 /* uint */ = 0, local7 /* Boolean */ = false, local8 /* Boolean */ = false, local9 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force Boolean coerce */
        local2 = (!!local2);
        /* Force Boolean coerce */
        local3 = (!!local3);
        /* Force uint coerce */
        local4 = (local4>>>0);
        /* Force uint coerce */
        local5 = (local5>>>0);
        /* Force uint coerce */
        local6 = (local6>>>0);
        /* Force Boolean coerce */
        local7 = (!!local7);
        /* Force Boolean coerce */
        local8 = (!!local8);
        /* Force Boolean coerce */
        local9 = (!!local9);

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
//        // JIT: potential type:7 0::uint// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::charCode
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgcharCode = local4;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::uint// JIT: redundant assigment, value unused
        stack1 = local5;
        // 7 0::keyCode
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgkeyCode = local5;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::uint// JIT: redundant assigment, value unused
        stack1 = local6;
        // 7 0::keyLocation
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$BgkeyLocation = local6;
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
        return;
    }
//# sourceURL=http://jit/flash/events/KeyboardEvent/constructor.js
})