(function anonymous(context
) {
/*
	Index: 121
	Path:  Box2D/Dynamics/b2World::m_SetContinuousPhysics
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetContinuousPhysics(local1 /* Boolean */) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 3::m_continuousPhysics
        stack0 = scope0.findScopeProperty($names[0], false, false);
//        // JIT: potential type:7 0::Boolean// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 3::m_continuousPhysics
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.m_continuousPhysics = local1;
        } else {
            context.setproperty($names[0], local1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2World/m_SetContinuousPhysics.js
})