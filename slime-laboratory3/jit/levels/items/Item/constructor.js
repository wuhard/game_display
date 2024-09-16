(function anonymous(context
) {
/*
	Index: 96
	Path:  levels/items/Item::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Number */, local2 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);

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
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::collectable
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgcollectable = true;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::xPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgxPos = (+local1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::yPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgyPos = (+local2);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 10;// JIT: redundant assigment, value unused
        // 7 0::pointsTextOffset
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgpointsTextOffset = 10;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::pointsTextShift
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgpointsTextShift = 0;
        return;
    }
//# sourceURL=http://jit/levels/items/Item/constructor.js
})