(function anonymous(context
) {
/*
	Index: 1224
	Path:  levels/Level1::constructor
	Type:  Public
	Kind:  null
	Super: levels/Level
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        stack0 = this;
        context.savedScope.superConstructor.call(this, );
        // 7 0::levelStage
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0::Stage1
        stack1 = scope0.findScopeProperty($names[1], true, false);
        stack1 = context.constructprop($names[1], stack1, []);
        // 7 0::levelStage
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.levelStage = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        // 7 0::initArrays
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BginitArrays();
        stack0 = this;
        sec.box(this).axCallSuper($names[2], context.savedScope, []);
        // 7 0::cameraNode
        stack0 = scope0.findScopeProperty($names[3], false, false);
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[4], true, false);
//        stack2 = 0;// JIT: redundant assigment, value unused
        //IR: DUP changed to PUSH*, reason: prevent optimisation
//        stack3 = 0;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [0, 0], $names[4]);
        // 7 0::cameraNode
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.cameraNode = stack1;
        } else {
            context.setproperty($names[3], stack1, stack0);
        }
        // 7 0::cameraYOffset
        stack0 = scope0.findScopeProperty($names[5], false, false);
//        stack1 = -64;// JIT: redundant assigment, value unused
        // 7 0::cameraYOffset
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.cameraYOffset = -64;
        } else {
            context.setproperty($names[5], -64, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bgcamera;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = 0;
        } else {
            context.setproperty($names[6], 0, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bgcamera;
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = 0;
        } else {
            context.setproperty($names[7], 0, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 2:levels::tutorial_counter
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$Bgtutorial_counter = 0;
        return;
    }
//# sourceURL=http://jit/levels/Level1/constructor.js
})