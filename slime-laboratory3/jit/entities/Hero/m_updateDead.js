(function anonymous(context
) {
/*
	Index: 1115
	Path:  entities/Hero::m_updateDead
	Type:  Protected
	Kind:  Method
	Super: entities/Entity
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateDead() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgyPos;
                        stack1 = 10000;
                        if (!(10000 < stack0)) { p = 21; continue; };
                        // 7 0::yPos
                        stack0 = scope0.findScopeProperty($names[0], false, false);
//                        stack1 = 10000;// JIT: redundant assigment, value unused
                        // 7 0::yPos
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yPos = 10000;
                        } else {
                            context.setproperty($names[0], 10000, stack0);
                        }
                    case 21:
                        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
                        stack0 = this.$BgyVel;
                        stack1 = 20;
                        //JIT: Emit inline return
                        if (!(20 < stack0)) { return; }
                        // 7 0::yVel
                        stack0 = scope0.findScopeProperty($names[1], false, false);
//                        stack1 = 20;// JIT: redundant assigment, value unused
                        // 7 0::yVel
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.yVel = 20;
                        } else {
                            context.setproperty($names[1], 20, stack0);
                        }
                    case 38:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/Hero/m_updateDead.js
})