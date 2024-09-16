(function anonymous(context
) {
/*
	Index: 71
	Path:  entities/Entity::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_geom__Rectangle_def = context.getTopLevel(0); // flash.geom:Rectangle

    return function compiled_constructor(local1 /* Level */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::level
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
        this.$Bglevel = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::xVel
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgxVel = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::yVel
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgyVel = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::godMode
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BggodMode = false;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::foo
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$Bgfoo = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::lastState
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BglastState = 0;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.geom::Rectangle
        /* GenerateLexImports */
//        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
//        stack2 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack4 = 0;// JIT: redundant assigment, value unused
//        stack5 = 0;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:Rectangle/Object
        stack1 = context.constructFast(flash_geom__Rectangle_def, [0, 0, 0, 0], $names[0]);
        // 7 0::aabb
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Rectangle  */ 
        this.$Bgaabb = stack1;
        return;
    }
//# sourceURL=http://jit/entities/Entity/constructor.js
})