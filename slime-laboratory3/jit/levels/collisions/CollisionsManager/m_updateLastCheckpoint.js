(function anonymous(context
) {
/*
	Index: 623
	Path:  levels/collisions/CollisionsManager::m_updateLastCheckpoint
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateLastCheckpoint(local1 /* CheckpointCollision */, local2 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local2 = (!!local2);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:levels.collisions::CheckpointCollision// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::currentCheckpoint
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels.collisions::CheckpointCollision  */ 
        this.$BgcurrentCheckpoint = local1;
        return;
    }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_updateLastCheckpoint.js
})