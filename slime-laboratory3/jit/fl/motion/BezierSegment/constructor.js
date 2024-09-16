(function anonymous(context
) {
/*
	Index: 935
	Path:  fl/motion/BezierSegment::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Point */, local2 /* Point */, local3 /* Point */, local4 /* Point */) {
        // Possible use a real "this"

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
//        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::a
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Point  */ 
        this.$Bga = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::b
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Point  */ 
        this.$Bgb = local2;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
        stack1 = local3;
        // 7 0::c
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Point  */ 
        this.$Bgc = local3;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:flash.geom::Point// JIT: redundant assigment, value unused
        stack1 = local4;
        // 7 0::d
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Point  */ 
        this.$Bgd = local4;
        return;
    }
//# sourceURL=http://jit/fl/motion/BezierSegment/constructor.js
})