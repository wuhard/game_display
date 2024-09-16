(function anonymous(context
) {
/*
	Index: 1941
	Path:  interfaces/panels/GameTitlePanel::m_destroy
	Type:  Public
	Kind:  Method
	Super: flash/display/Sprite
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_destroy() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = 0;// JIT: redundant assigment, value unused
        local1 = 0;
        // 7 0::removeChild
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::SplashTitle  */ 
        stack1 = this.$BgtitleSprite;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgremoveChild(stack1);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = null;// JIT: redundant assigment, value unused
        // 7 0::titleSprite
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::SplashTitle  */ 
        this.$BgtitleSprite = null;
        return;
    }
//# sourceURL=http://jit/interfaces/panels/GameTitlePanel/m_destroy.js
})