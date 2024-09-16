(function anonymous(context
) {
/*
	Index: 35
	Path:  Utils.ResetGameplay
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_ResetGameplay() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::PlayerLifes
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        stack1 = 1;// JIT: redundant assigment, value unused
        // 7 0::PlayerLifes
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.PlayerLifes = 1;
        } else {
            context.setproperty($names[0], 1, stack0);
        }
        // 7 0::ResetPoints
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgResetPoints();
        return;
    }
//# sourceURL=http://jit/Utils/ResetGameplay.js
})