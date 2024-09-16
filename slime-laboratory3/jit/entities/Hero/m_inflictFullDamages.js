(function anonymous(context
) {
/*
	Index: 1138
	Path:  entities/Hero::m_inflictFullDamages
	Type:  Public
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_inflictFullDamages() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
//        stack1 = 0;// JIT: redundant assigment, value unused
        // 7 0::PlayerLifes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerLifes = 0;
        } else {
            context.setproperty($names[1], 0, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BganimationManager;
        // 7 0:entities::AnimationManager
        temp = scope0.findScopeProperty($names[2], true, false);
        stack1 = temp.$BgAnimationManager;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[2]);
        }
        // 7 0::GameOverAction
        //Possible type:7 0:entities::AnimationManager
        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
            stack1 = stack1['GameOverAction'];
        } else {
            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
            stack1 = temp.$BgGameOverAction;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[3]);
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
            stack0.performAction(stack1);
        } else {
            // 7 0::performAction
            {
                let t = stack0;
                const m = t.$BgperformAction || (t = sec.box(stack0), t.$BgperformAction);
                if( typeof m === "function" ) { 
                    m.call(t, stack1);
                } else { 
                   stack0.axCallProperty($names[4], [stack1], false);
                }
            }
        }
        return;
    }
//# sourceURL=http://jit/entities/Hero/m_inflictFullDamages.js
})