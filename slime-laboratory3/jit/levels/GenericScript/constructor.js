(function anonymous(context
) {
/*
	Index: 908
	Path:  levels/GenericScript::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* int */, local2 /* Number */, local3 /* Number */, local4 /* Number */ = 0, local5 /* Number */ = 0, local6 /* Number */ = 0, local7 /* int */ = 0) {
        // Possible use a real "this"
        /* Force int coerce */
        local1 = (local1|0);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force Number coerce */
        local6 = (+local6);
        /* Force int coerce */
        local7 = (local7|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::type
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgtype = (local1|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::x
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgx = (+local2);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::y
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgy = (+local3);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::width
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgwidth = (+local4);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local5;
        // 7 0::height
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgheight = (+local5);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local6;
        // 7 0::rotation
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgrotation = (+local6);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local7;
        // 7 0::data_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgdata_1 = (local7|0);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::value_1
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgvalue_1 = 0;
        return;
    }
//# sourceURL=http://jit/levels/GenericScript/constructor.js
})