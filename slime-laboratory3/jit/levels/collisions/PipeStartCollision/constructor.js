(function anonymous(context
) {
/*
	Index: 1731
	Path:  levels/collisions/PipeStartCollision::constructor
	Type:  Public
	Kind:  null
	Super: levels/collisions/LevelCollision
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const flash_geom__Rectangle_def = context.getTopLevel(0); // flash.geom:Rectangle

    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* int */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local2 = (+local2);
        /* Force Number coerce */
        local3 = (+local3);
        /* Force Number coerce */
        local4 = (+local4);
        /* Force Number coerce */
        local5 = (+local5);
        /* Force int coerce */
        local6 = (local6|0);

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local5;
//        stack6 = 0;// JIT: redundant assigment, value unused
        context.savedScope.superConstructor.call(this, local1, local2, local3, local4, local5, 0);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0:flash.geom::Rectangle
        /* GenerateLexImports */
//        stack1 = flash_geom__Rectangle_def;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack3 = local3;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack4 = local4;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack5 = local5;
        //JIT: Support fast construct:Rectangle/Object
        stack1 = context.constructFast(flash_geom__Rectangle_def, [local2, local3, local4, local5], $names[0]);
        // 7 1:levels.collisions:PipeStartCollision::_aabb
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.geom::Rectangle  */ 
        this.$Bg_aabb = stack1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::int// JIT: redundant assigment, value unused
        stack1 = local6;
        // 7 1:levels.collisions:PipeStartCollision::TYPE
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgTYPE = (local6|0);
        return;
    }
//# sourceURL=http://jit/levels/collisions/PipeStartCollision/constructor.js
})