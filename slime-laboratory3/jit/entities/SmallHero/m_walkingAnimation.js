(function anonymous(context
) {
/*
	Index: 1099
	Path:  entities/SmallHero::m_walkingAnimation
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_walkingAnimation() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::eye1
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:flash.display::MovieClip  */ 
        stack0 = this.$Bgeye1;
//        stack1 = 1;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.gotoAndStop(1);
        } else {
            // 7 0::gotoAndStop
            {
                let t = stack0;
                const m = t.$BggotoAndStop || (t = sec.box(stack0), t.$BggotoAndStop);
                if( typeof m === "function" ) { 
                    m.call(t, 1);
                } else { 
                   stack0.axCallProperty($names[0], [1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/entities/SmallHero/m_walkingAnimation.js
})