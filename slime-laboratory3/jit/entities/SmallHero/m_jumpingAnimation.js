(function anonymous(context
) {
/*
	Index: 1100
	Path:  entities/SmallHero::m_jumpingAnimation
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_jumpingAnimation() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
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
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$Bglevel;
        // 7 0::collisionsManager
        //Possible type:7 0::level
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['collisionsManager'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgcollisionsManager;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[1]);
            }
        }
//        stack1 = true;// JIT: redundant assigment, value unused
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.switchTickTock(true);
        } else {
            // 7 0::switchTickTock
            {
                let t = stack0;
                const m = t.$BgswitchTickTock || (t = sec.box(stack0), t.$BgswitchTickTock);
                if( typeof m === "function" ) { 
                    m.call(t, true);
                } else { 
                   stack0.axCallProperty($names[2], [true], false);
                }
            }
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgjumpImpulse();
        return;
    }
//# sourceURL=http://jit/entities/SmallHero/m_jumpingAnimation.js
})