(function anonymous(context
) {
/*
	Index: 920
	Path:  entities/particles/Particle::m_updateScreenPosition
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateScreenPosition(local1 /* Rectangle */) {
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
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::particleSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgparticleSprite;
        // 7 0::int
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack2 = context.savedScope.global.object;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::xPos
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$BgxPos;
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[1], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::particleSprite
        //Possible type:7 0:flash.display::MovieClip
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$BgparticleSprite;
        // 7 0::int
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack2 = context.savedScope.global.object;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::yPos
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$BgyPos;
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/entities/particles/Particle/m_updateScreenPosition.js
})