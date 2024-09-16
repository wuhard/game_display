(function anonymous(context
) {
/*
	Index: 20
	Path:  Game::m_exitLevelState
	Type:  Public
	Kind:  Method
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_exitLevelState() {
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 2::notNull
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack0 = this.$BgnotNull;
                        //JIT: Emit inline return
                        if (stack0) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 3::levelState
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:states::LevelState  */ 
                        this.$BglevelState = null;
                    case 14:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Game/m_exitLevelState.js
})