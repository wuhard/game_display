(function anonymous(context
) {
/*
	Index: 54
	Path:  SoundSystem.PlayLastMusic
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_PlayLastMusic(local1 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

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
        // 7 0::PlayMusic
        /* We sure that this scope owner, represented in TRAIT as Method  */ 
//        stack0 = this;// JIT: redundant assigment, value unused
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack1 = this.$BgLastMusicName;
//        stack2 = -1;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack3 = local1;
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgPlayMusic(stack1, -1, local1);
        return;
    }
//# sourceURL=http://jit/SoundSystem/PlayLastMusic.js
})