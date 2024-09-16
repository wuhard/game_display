(function anonymous(context
) {
/*
	Index: 816
	Path:  levels/collisions/LevelCollision::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Level */, local2 /* Number */, local3 /* Number */, local4 /* Number */, local5 /* Number */, local6 /* Number */) {
        // Possible use a real "this"
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
        // local7 is assigned before read, skip init
        let local7 = undefined
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
        context.savedScope.superConstructor.call(this, );
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::level
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
        this.$Bglevel = local1;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local2;
        stack3 = local2;
        local7 = stack3;
        // 7 0::originalXPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgoriginalXPos = (+local2);
//        stack1 = local7;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 0::xPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgxPos = (+local7);
//        stack0 = this;// JIT: redundant assigment, value unused
        stack1 = this;
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack2 = local3;
        stack3 = local3;
        local7 = stack3;
        // 7 0::originalYPos
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])){
            stack1.originalYPos = local3;
        } else {
            context.setproperty($names[0], local3, stack1);
        }
//        stack1 = local7;// JIT: redundant assigment, value unused
        //IR: KILL removed, reason: prevent optimisation
        // 7 0::yPos
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
        this.$BgyPos = (+local7);
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
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::levelCollisionSprite
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:flash.display::MovieClip  */ 
        this.$BglevelCollisionSprite = null;
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = false;// JIT: redundant assigment, value unused
        // 7 0::destroy
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$Bgdestroy = false;
        return;
    }
//# sourceURL=http://jit/levels/collisions/LevelCollision/constructor.js
})