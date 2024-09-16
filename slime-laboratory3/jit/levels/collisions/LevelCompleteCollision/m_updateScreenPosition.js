(function anonymous(context
) {
/*
	Index: 1682
	Path:  levels/collisions/LevelCompleteCollision::m_updateScreenPosition
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
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
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BglevelCollisionSprite;
        // 7 0::int
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack2 = context.savedScope.global.object;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack3 = this.$BgxPos;
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[1], stack1, stack0);
        }
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
        stack0 = this.$BglevelCollisionSprite;
        // 7 0::int
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack2 = context.savedScope.global.object;
        /* GETLEX We sure that this safe get, represented in TRAIT as Slot  */ 
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
//# sourceURL=http://jit/levels/collisions/LevelCompleteCollision/m_updateScreenPosition.js
})