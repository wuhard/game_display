(function anonymous(context
) {
/*
	Index: 1
	Path:  flash/media/SoundTransform::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Number */ = 1, local2 /* Number */ = 0) {
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
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::volume
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$Bgvolume = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local2;
        // 7 0::pan
        /* We sure that this safe set, represented in TRAIT as Setter, with type: undefined  */ 
        this.$Bgpan = local2;
        return;
    }
//# sourceURL=http://jit/flash/media/SoundTransform/constructor.js
})