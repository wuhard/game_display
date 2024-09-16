(function anonymous(context
) {
/*
	Index: 551
	Path:  __root__/1795_anonymous::anonymous
	Type:  Public
	Kind:  null
	Super: -
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_anonymous() {
        let _this = this === context.jsGlobal ? context.savedScope.global.object : this;

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = _this;
        scope0 = context.savedScope.extend(_this);
        // 7 0::b2Vec2_zero
        stack0 = scope0.findScopeProperty($names[0], false, false);
        // 7 0:Box2D.Common.Math::b2Vec2
        stack1 = scope0.findScopeProperty($names[1], true, false);
//        stack2 = 0;// JIT: redundant assigment, value unused
//        stack3 = 0;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack1 = context.constructFast(stack1, [0, 0], $names[1]);
        // 7 0::b2Vec2_zero
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2Vec2_zero = stack1;
        } else {
            context.setproperty($names[0], stack1, stack0);
        }
        // 7 0::b2Mat22_identity
        stack0 = scope0.findScopeProperty($names[2], false, false);
        // 7 0:Box2D.Common.Math::b2Mat22
        temp = scope0.findScopeProperty($names[3], true, false);
        stack1 = temp.$Bgb2Mat22;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[3]);
        }
        // 7 0:Box2D.Common.Math::b2Vec2
        stack2 = scope0.findScopeProperty($names[1], true, false);
//        stack3 = 1;// JIT: redundant assigment, value unused
//        stack4 = 0;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack2 = context.constructFast(stack2, [1, 0], $names[1]);
        // 7 0:Box2D.Common.Math::b2Vec2
        stack3 = scope0.findScopeProperty($names[1], true, false);
//        stack4 = 0;// JIT: redundant assigment, value unused
//        stack5 = 1;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:b2Vec2/Object
        stack3 = context.constructFast(stack3, [0, 1], $names[1]);
        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
           stack1 = stack1.FromVV(stack2, stack3);
        } else {
            // 7 0::FromVV
            {
                let t = stack1;
                const m = t.$BgFromVV || (t = sec.box(stack1), t.$BgFromVV);
                if( typeof m === "function" ) { 
                    stack1 = t.$BgFromVV (stack2, stack3);
                } else { 
                    stack1 = stack1.axCallProperty($names[4], [stack2, stack3], false);
                }
            }
        }
        // 7 0::b2Mat22_identity
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2Mat22_identity = stack1;
        } else {
            context.setproperty($names[2], stack1, stack0);
        }
        // 7 0::b2Transform_identity
        stack0 = scope0.findScopeProperty($names[5], false, false);
        // 7 0:Box2D.Common.Math::b2Transform
        stack1 = scope0.findScopeProperty($names[6], true, false);
        // 7 0::b2Vec2_zero
        temp = scope0.findScopeProperty($names[0], true, false);
        stack2 = temp.$Bgb2Vec2_zero;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[0]);
        }
        // 7 0::b2Mat22_identity
        temp = scope0.findScopeProperty($names[2], true, false);
        stack3 = temp.$Bgb2Mat22_identity;
        if (stack3 === undefined || typeof stack3 === 'function') {
            stack3 = temp.axGetProperty($names[2]);
        }
        //JIT: Support fast construct:b2Transform/Object
        stack1 = context.constructFast(stack1, [stack2, stack3], $names[6]);
        // 7 0::b2Transform_identity
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.b2Transform_identity = stack1;
        } else {
            context.setproperty($names[5], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/__root__/1795_anonymous.js
})